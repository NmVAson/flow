import axios from 'axios';
import store from '../store';

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

function withCompetence(experience) {
  const processedExperience = experience;
  const skillLevel = experience.feels?.skill;
  const challengeLevel = experience.feels?.challenge;

  if (skillLevel && challengeLevel && skillLevel !== 0 && skillLevel === challengeLevel) {
    processedExperience.competence = 'flow';
  } else if (skillLevel > challengeLevel) {
    processedExperience.competence = 'boredom';
  } else if (skillLevel < challengeLevel) {
    processedExperience.competence = 'anxiety';
  }

  return processedExperience;
}

export default {
  getAllResults: async () => {
    const { id } = store.state;
    const esmUrl = `https://nmvason-flow.builtwithdark.com/esm/${id}`;
    const response = await axios.get(esmUrl);

    return response
      .data
      .map(withMotivatorFlag)
      .map(withTensionFlag)
      .map(withHappinessRating)
      .map(withCompetence);
  },
};
