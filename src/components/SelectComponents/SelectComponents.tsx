import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { fetchQuizQuestions } from "../../API";
//styles
import { Wrapper, Content } from "./SelectComponents.styles";
//Material
import TextField from "@material-ui/core/TextField";
import {
  InputLabel,
  MenuItem,
  Select,
  FormControl,
  Button,
} from "@material-ui/core";

const SelectComponents: React.FC = () => {
  const { id } = useParams();

  const dificultyOfQuestion = [
    { id: 1, value: "easy", name: "Easy" },
    { id: 2, value: "medium", name: "Medium" },
    { id: 3, value: "hard", name: "Hard" },
  ];

  const quesetionType = [
    { id: 1, value: "multiple", name: "Multiple Type" },
    { id: 2, value: "boolean", name: "True / False" },
  ];

  const [type, setType] = useState("");
  const [dificulty, setDificulty] = useState("");
  const [number, setNumber] = useState("");

  return (
    <Wrapper>
      <h2>Choose your targets:</h2>
      <Content>
        <TextField
          id="outlined-basic"
          label="Number of Questions"
          variant="outlined"
          className="formControl"
          type="number"
          onChange={(e) => {
            const numberQues = e.target.value;
            setNumber(numberQues);
          }}
          InputProps={{
            inputProps: {
              max: 50,
              min: 10,
            },
          }}
        />

        <FormControl variant="outlined" className="formControl">
          <InputLabel id="demo-simple-select-outlined-label">
            Select Dificulty
          </InputLabel>
          <Select
            labelId="demo-simple-select-outlined-label"
            id="demo-simple-select-outlined"
            value={dificulty}
            onChange={(e: any) => setDificulty(e.target.value)}
            label="Select Dificulty of questions"
          >
            {dificultyOfQuestion.map((element) => (
              <MenuItem value={element.value} key={element.id}>
                {element.name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        <FormControl variant="outlined" className="formControl">
          <InputLabel id="demo-simple-select-outlined-label">
            Select Type
          </InputLabel>
          <Select
            labelId="demo-simple-select-outlined-label"
            id="demo-simple-select-outlined"
            value={type}
            onChange={(e: any) => setType(e.target.value)}
            label="Select Type of question"
          >
            {quesetionType.map((element) => (
              <MenuItem key={element.id} value={element.value}>
                {element.name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <Link to={`/${number}/${id}/${dificulty}/${type}`}>
          <Button variant="contained" color="primary">
            Start Quiz
          </Button>
        </Link>
      </Content>
    </Wrapper>
  );
};

export default SelectComponents;
