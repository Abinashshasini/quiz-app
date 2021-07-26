import React from "react";
//Styles
import { Wrapper, Content } from "./Welcome.styles";

const Welcome: React.FC = () => (
  <Wrapper>
    <Content>
      <h1>Welcome user!</h1>
      <h2>To the ultimate quiz app</h2>
    </Content>
  </Wrapper>
);

export default Welcome;
