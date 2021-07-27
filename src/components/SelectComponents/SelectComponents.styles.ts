import styled from "styled-components";

export const Wrapper = styled.div`
  max-width: var(--maxWidth);
  margin: auto;

  h2 {
    letter-spacing: 1px;
    color: black;
    font-size: 1.3rem;
    margin: 10px;
  }
`;

export const Content = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
  flex-direction: column;
  background: white;
  padding: 20px 0px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  width: 97%;
  margin: 10px auto;
  border-radius: 7px;

  .formControl {
    min-width: 720px;
    margin: 10px;

    @media screen and (max-width: 500px) {
      min-width: 90%;
    }
  }

  Link {
    text-decoration: none;
  }
`;
