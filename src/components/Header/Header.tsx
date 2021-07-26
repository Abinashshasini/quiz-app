import React from "react";
//styles
import { Wrapper, Content } from "./Header.styles";
//Material Ui
import AppsIcon from "@material-ui/icons/Apps";
import { Link } from "react-router-dom";

const Header: React.FC = () => (
  <Wrapper>
    <Content>
      <Link to="/">
        <AppsIcon className="icon" />
      </Link>
      <h2>Quiz App</h2>
    </Content>
  </Wrapper>
);

export default Header;
