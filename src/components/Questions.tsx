import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchQuizQuestions, QuestionState } from "../API";
import QuestionCard from "./QuestinCard/QuestionCard";

export type AnswerObject = {
  question: string;
  answer: string;
  correct: boolean;
  correctAnswer: string;
};

const Questions: React.FC = () => {
  const { amount, category, dificulty, type } = useParams();

  const [loading, setLoading] = useState(false);
  const [questions, setQuestions] = useState<QuestionState[]>([]);
  const [number, setNumber] = useState(0);
  const [userAnswers, setUserAnswers] = useState<AnswerObject[]>([]);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(true);
  const [error, setError] = useState(false);

  console.log(questions);

  const fetchQuestion = async () => {
    try {
      setError(false);
      setLoading(true);
      setGameOver(false);
      const newQuestions: any = await fetchQuizQuestions(
        Number(amount),
        category,
        dificulty,
        type
      );

      setQuestions(newQuestions);
      setScore(0);
      setUserAnswers([]);
      setNumber(0);
      setLoading(false);
    } catch (error) {
      setError(true);
    }
  };

  useEffect(() => {
    fetchQuestion();
  }, []);
  const checkAnswers = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!gameOver) {
      const answer = e.currentTarget.value;
      const correct = questions[number].correct_answer === answer;
      if (correct) setScore((prev) => prev + 1);
      const answerObject = {
        question: questions[number].question,
        answer,
        correct,
        correctAnswer: questions[number].correct_answer,
      };
      setUserAnswers((prev) => [...prev, answerObject]);
    }
  };

  const nextQuestion = () => {
    const nextQuestion = number + 1;

    if (nextQuestion === Number(amount)) {
      setGameOver(true);
    } else {
      setNumber(nextQuestion);
    }
  };
  if (error) <div>Eooro ocoured</div>;
  return (
    <div>
      {!gameOver ? <p className="score">Score: {score}</p> : null}
      {loading && <p>Loading Question...</p>}
      {!loading && !gameOver && (
        <QuestionCard
          questionNumber={number + 1}
          totalQuestion={Number(amount)}
          question={questions[number].question}
          answers={questions[number].answers}
          userAnswer={userAnswers ? userAnswers[number] : undefined}
          callback={checkAnswers}
        />
      )}

      {!gameOver &&
      !loading &&
      userAnswers.length === number + 1 &&
      number !== Number(amount) - 1 ? (
        <button onClick={nextQuestion} className="next">
          Next Question
        </button>
      ) : null}
      {gameOver && userAnswers.length === number ? (
        <button>start</button>
      ) : null}
    </div>
  );
};

export default Questions;
