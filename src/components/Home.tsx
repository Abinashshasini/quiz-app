import React from "react";
//components
import Welcome from "../components/Welcome/Welcome";
import Category from "../components/Category/Category";

const Home: React.FC = () => {
  return (
    <>
      <Welcome />
      <Category />
    </>
  );
};

export default Home;
