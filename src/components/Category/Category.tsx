import React, { useState } from "react";
import { Link } from "react-router-dom";
//Imagess
import GeneralKnowledge from "../../images/open-book.png";
import Science from "../../images/atom.png";
import Book from "../../images/book.png";
import Music from "../../images/buttons.png";
import Computer from "../../images/desktop-computer.png";
import Politics from "../../images/politics.png";
import Sports from "../../images/trophy.png";
import Movies from "../../images/video.png";
//Styles
import { Wrapper, Headings, Grid } from "./Category.styles";

const Category: React.FC = () => {
  return (
    <Wrapper>
      <Headings>
        <h2>Choose questions category:</h2>
      </Headings>
      <Grid>
        <Link to={`/9`}>
          <div className="Item" key="9">
            <img src={GeneralKnowledge} alt="category " />
            <p>General Knowledge</p>
          </div>
        </Link>

        <Link to={`/17`}>
          <div className="Item" key="17">
            <img src={Science} alt="category " />
            <p>Science</p>
          </div>
        </Link>

        <Link to={`/10`}>
          <div className="Item" key="10">
            <img src={Book} alt="category " />
            <p>Books</p>
          </div>
        </Link>

        <Link to={`/12`}>
          <div className="Item" key="12">
            <img src={Music} alt="category " />
            <p>Music</p>
          </div>
        </Link>

        <Link to={`/18`}>
          <div className="Item" key="18">
            <img src={Computer} alt="category " />
            <p>Computer Science</p>
          </div>
        </Link>

        <Link to={`/24`}>
          <div className="Item" key="24">
            <img src={Politics} alt="category " />
            <p>Politics</p>
          </div>
        </Link>

        <Link to={`/21`}>
          <div className="Item" key="21">
            <img src={Sports} alt="category " />
            <p>Sports</p>
          </div>
        </Link>

        <Link to={`/11`}>
          <div className="Item" key="11">
            <img src={Movies} alt="category" />
            <p>Movies</p>
          </div>
        </Link>
      </Grid>
    </Wrapper>
  );
};

export default Category;
