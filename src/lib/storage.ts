const SURVEY_KEY = 'qazaq_history_survey_completed';

export const hasSurveyCompleted = (): boolean => {
  try {
    return localStorage.getItem(SURVEY_KEY) === 'true';
  } catch {
    return false;
  }
};

export const markSurveyCompleted = (): void => {
  try {
    localStorage.setItem(SURVEY_KEY, 'true');
  } catch {
    // ignore
  }
};
