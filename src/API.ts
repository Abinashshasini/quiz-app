import { shuffleAray } from "./utils";

export type Question = {
  category: string;
  correct_answer: string;
  incorrect_answers: string[];
  difficulty: string;
  question: string;
  type: string;
};

export type QuestionState = Question & { answers: string[] };

export const fetchQuizQuestions = async (
  amount: number,
  category: string,
  difficulty: string,
  type: string
) => {
  const endPoint = `https://opentdb.com/api.php?amount=${amount}&category=${category}&difficulty=${difficulty}&type=${type}`;

  const data = await (await fetch(endPoint)).json();

  return data.results.map((question: Question) => ({
    ...question,
    answers: shuffleAray([
      ...question.incorrect_answers,
      question.correct_answer,
    ]),
  }));

  console.log(data);
};
