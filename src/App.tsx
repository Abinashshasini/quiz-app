import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
//Components
import QuestionCard from "./components/QuestinCard/QuestionCard";
import { GlobalStyle } from "./GlobalStyle";
import Questions from "./components/Questions";
import Header from "./components/Header/Header";
import Home from "./components/Home";
import Select from "./components/Select";
import { fetchQuizQuestions } from "./API";

const App: React.FC = () => {
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
    //
    //   <button className="next" onClick={nextQuestion}>
    //     Next Question
    //   </button>
    // </div>

    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:id" element={<Select />} />
        <Route
          path="/:amount/:category/:dificulty/:type"
          element={<Questions />}
        />
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
