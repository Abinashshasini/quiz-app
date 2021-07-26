import React from "react";
import { useParams } from "react-router-dom";
//Components
import SelectComponents from "./SelectComponents/SelectComponents";

const Select: React.FC = () => {
  const { id } = useParams();
  console.log(id);

  return <SelectComponents />;
};

export default Select;
