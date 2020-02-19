import ResultsService from '@/api/ResultsService';
import axios from 'axios';

jest.mock('axios');

describe('ResultsService', () => {
  it('sends get request to results endpoint', async () => {
    const expectedResults = {
      data: [
        {
          action: 'coding',
          affect: 'No.',
          company: 'Alone',
          confidence: {},
          date: '2020-02-19T10:21:28',
          feels: {},
          formID: '1',
          mood: {},
          pain: 1,
          place: 'work',
          thought: 'Vue',
          what: 'sleeping',
          who: 'Zach',
          why: 'I wanted to'
        }
      ]
    };
    axios.get.mockImplementationOnce(() => Promise.resolve(expectedResults));

    const results = await ResultsService.getAllResults();

    expect(results).toEqual(expectedResults.data);
  });

  it('calculates the activity as intrinsically motivated', async () => {
    const expectedResults = {
      data: [
        {
          why: 'I wanted to',
          feels: {
            wish: 1
          }
        }
      ]
    };
    axios.get.mockImplementationOnce(() => Promise.resolve(expectedResults));

    const results = await ResultsService.getAllResults();

    expect(results[0].isIntrinsic).toBe(true);
  });

  it('calculates the activity as extrinsically motivated', async () => {
    const expectedResults = {
      data: [
        {
          why: 'I had to',
          feels: {
            wish: 2
          }
        }
      ]
    };
    axios.get.mockImplementationOnce(() => Promise.resolve(expectedResults));

    const results = await ResultsService.getAllResults();

    expect(results[0].isIntrinsic).toBe(false);
  });

  it('omits intrinsic information for undecided activities', async () => {
    const expectedResults = {
      data: [
        {
          why: 'I had to',
          feels: {
            wish: 1
          }
        },
        {
          why: 'I had nothing else to do'
        }
      ]
    };
    axios.get.mockImplementationOnce(() => Promise.resolve(expectedResults));

    const results = await ResultsService.getAllResults();

    expect(results[0].isIntrinsic).toBeUndefined();
    expect(results[1].isIntrinsic).toBeUndefined();
  });

  it('calculates tension in the activity', async () => {
    const expectedResults = {
      data: [
        {
          mood: {
            tense: 3
          }
        },
        {
          mood: {
            tense: 2
          }
        },
        {
          mood: {
            tense: 11
          }
        },
        {
          mood: {
            tense: 0
          }
        }
      ]
    };
    axios.get.mockImplementationOnce(() => Promise.resolve(expectedResults));

    const results = await ResultsService.getAllResults();

    expect(results[0].isTense).toBe(true);
    expect(results[1].isTense).toBe(true);
    expect(results[2].isTense).toBe(true);
    expect(results[3].isTense).toBe(false);
  });

  it('omits tension when mood tense is unanswered', async () => {
    const expectedResults = {
      data: [
        {
          mood: {
            notTense: 3
          }
        },
        {
          notMood: {
            notTense: 3
          }
        }
      ]
    };
    axios.get.mockImplementationOnce(() => Promise.resolve(expectedResults));

    const results = await ResultsService.getAllResults();

    expect(results[0].isTense).toBeUndefined();
    expect(results[1].isTense).toBeUndefined();
  });

  it('calculates the happiness rating', async () => {
    const expectedHappinessValue = 3;
    const expectedResults = {
      data: [
        {
          mood: {
            happy: expectedHappinessValue
          }
        }
      ]
    };
    axios.get.mockImplementationOnce(() => Promise.resolve(expectedResults));

    const results = await ResultsService.getAllResults();

    expect(results[0].happinessRating).toEqual(expectedHappinessValue);
  });

  it('categorizes the activity as competent if the skill level is greater than 0 and equal to the challenge', async () => {
    const expectedResults = {
      data: [
        {
          feels: {
            challenge: 0,
            skill: 0
          }
        },

        {
          feels: {
            challenge: 1,
            skill: 1
          }
        }
      ]
    };
    axios.get.mockImplementationOnce(() => Promise.resolve(expectedResults));

    const results = await ResultsService.getAllResults();

    expect(results[0].competence).toBeUndefined();
    expect(results[1].competence).toEqual('flow');
  });

  it('categorizes the activity as boring if the skill level is greater than the challenge', async () => {
    const expectedResults = {
      data: [
        {
          feels: {
            challenge: 0,
            skill: 2
          }
        }
      ]
    };
    axios.get.mockImplementationOnce(() => Promise.resolve(expectedResults));

    const results = await ResultsService.getAllResults();

    expect(results[0].competence).toEqual('boredom');
  });

  it('categorizes the activity as anxiety producing if the skill level is less than the challenge', async () => {
    const expectedResults = {
      data: [
        {
          feels: {
            challenge: 1,
            skill: 0
          }
        }
      ]
    };
    axios.get.mockImplementationOnce(() => Promise.resolve(expectedResults));

    const results = await ResultsService.getAllResults();

    expect(results[0].competence).toEqual('anxiety');
  });

  it('omits confidence if skill or challenge does not exist', async () => {
    const expectedResults = {
      data: [
        {
          feels: {
            notChallenge: 1,
            notSkill: 0
          }
        }
      ]
    };
    axios.get.mockImplementationOnce(() => Promise.resolve(expectedResults));

    const results = await ResultsService.getAllResults();

    expect(results[0].competence).toBeUndefined();
  });
});
