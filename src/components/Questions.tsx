import React from "react";
import { useParams } from "react-router-dom";
import { fetchQuizQuestions } from "../API";

const Questions: React.FC = () => {
  const { number, id, dificulty, type } = useParams();
  console.log(number, id, dificulty, type);
  console.log(fetchQuizQuestions(number, Number(id), dificulty, type));

  return <div>Question</div>;
};

export default Questions;
