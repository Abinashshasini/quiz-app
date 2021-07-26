import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
//Components
import QuestionCard from "./components/QuestionCard";
import { GlobalStyle } from "./GlobalStyle";
import Questions from "./components/Questions";
import Header from "./components/Header/Header";
import Home from "./components/Home";
import Select from "./components/Select";
import { fetchQuizQuestions } from "./API";

const App: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [questions, setQuestions] = useState([]);
  const [number, setNumber] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(true);

  const TOTAL_QUESTIONS = 10;
  //console.log(fetchQuizQestions(TOTAL_QUESTIONS, Difficulty.EASY));

  const startTrivas = async () => {};

  const checkAnswers = (e: React.MouseEvent<HTMLButtonElement>) => {};

  const nextQuestion = () => {};

  return (
    // <div className="App">
    //   <h1>REACT QUIZ</h1>
    //   <button className="start" onClick={startTrivas}>
    //     start
    //   </button>
    //   <p className="score">Score:</p>
    //   <p className="score">Questions:</p>
    //   {/* <QuestionCard
    //     questionNumber={number + 1}
    //     totalQuestion={TOTAL_QUESTIONS}
    //     question={questions[number].question}
    //     answers={questions[number].answers}
    //     userAnswer={userAnswers ? userAnswers[number] : undefined}
    //     callback={checkAnswers}
    //   /> */}
    //   <button className="next" onClick={nextQuestion}>
    //     Next Question
    //   </button>
    // </div>

    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:id" element={<Select />} />
        <Route path="/:number/:id/:dificulty/:type" element={<Questions />} />
        {/* <Route
          path="/questioncard"
          element={
            <QuestionCard
              questionNumber={number + 1}
              totalQuestion={TOTAL_QUESTIONS}
              question={questions[number].question}
              answers={questions[number].answers}
              userAnswer={userAnswers ? userAnswers[number] : undefined}
              callback={checkAnswers}
            />
          }
        /> */}
      </Routes>
      <GlobalStyle />
    </Router>
  );
};

export default App;
