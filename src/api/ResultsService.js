import axios from 'axios';

function withMotivatorFlag(experience) {
  const processedExperience = experience;

  if (experience.why === 'I wanted to' && experience.feels.wish === 1) {
    processedExperience.isIntrinsic = true;
  } else if (experience.why === 'I had to' && experience.feels.wish > 1) {
    processedExperience.isIntrinsic = false;
  }

  return processedExperience;
}

function withTensionFlag(experience) {
  const processedExperience = experience;

  if (experience.mood?.tense >= 0) {
    processedExperience.isTense = (experience.mood.tense > 0);
  }

  return processedExperience;
}

function withHappinessRating(experience) {
  const processedExperience = experience;

  processedExperience.happinessRating = experience.mood?.happy;

  return processedExperience;
}

function isInFlow(experience) {
  const skillLevel = experience.feels?.skill;
  const challengeLevel = experience.feels?.challenge;

  return skillLevel && challengeLevel && skillLevel !== 0 && skillLevel === challengeLevel;
}

function isInBoredom(experience) {
  const skillLevel = experience.feels?.skill;
  const challengeLevel = experience.feels?.challenge;

  return skillLevel > challengeLevel;
}

function isInAnxiety(experience) {
  const skillLevel = experience.feels?.skill;
  const challengeLevel = experience.feels?.challenge;

  return skillLevel < challengeLevel;
}

function withCompetence(experience) {
  const processedExperience = experience;

  if (isInFlow(experience)) {
    processedExperience.competence = 'flow';
  } else if (isInBoredom(experience)) {
    processedExperience.competence = 'boredom';
  } else if (isInAnxiety(experience)) {
    processedExperience.competence = 'anxiety';
  }

  return processedExperience;
}

export default {
  getAllResults: async (id) => {
    const esmUrl = `https://nmvason-flow.builtwithdark.com/esm/${id}`;
    const response = await axios.get(esmUrl);

    return response
      .data
      .map(withMotivatorFlag)
      .map(withTensionFlag)
      .map(withHappinessRating)
      .map(withCompetence);
  },

  getActivitiesByChannelofExperience: async (id) => {
    const esmUrl = `https://nmvason-flow.builtwithdark.com/esm/${id}`;
    const response = await axios.get(esmUrl);
    const { data } = response;

    return data
      .map(withCompetence)
      .filter((d) => d.competence)
      .reduce((map, d) => {
        const key = d.competence;
        const actionList = map.get(key) || [];
        actionList.push(d.action);

        map.set(key, actionList);

        return map;
      }, new Map());
  },

  getActivitiesByMood: async (id) => {
    const esmUrl = `https://nmvason-flow.builtwithdark.com/esm/${id}`;
    const response = await axios.get(esmUrl);
    const { data } = response;

    return data
      .reduce((map, d) => {
        let key;
        if (d.mood?.happy > 0) {
          key = 'happy';
        } else if (d.mood?.happy < 0) {
          key = 'sad';
        } else {
          key = 'other';
        }

        const actionList = map.get(key) || [];
        actionList.push(d.action);

        map.set(key, actionList);

        return map;
      }, new Map());
  },

  getTotalResponses: async (id) => {
    const esmUrl = `https://nmvason-flow.builtwithdark.com/esm/${id}`;
    const response = await axios.get(esmUrl);
    const { data } = response;

    return data.length;
  }
};
