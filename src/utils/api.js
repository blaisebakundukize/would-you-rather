import { _getUsers, _getQuestions, _saveQuestion } from "./_DATA";

export const getInitialData = () => {
  return Promise.all([_getUsers(), _getQuestions()]).then(
    ([users, questions]) => ({
      users,
      questions,
    })
  );
};

export const saveQuestion = (question) => _saveQuestion(question);

export const getUsers = () => _getUsers();
