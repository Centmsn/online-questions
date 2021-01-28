import styled from "styled-components";
import { useState } from "react";

import Editor from "./Editor";
import Result from "./Result";
import Submit from "./Submit";
import { testers } from "../helpers/testers";

const Question = ({ desc, index }) => {
  const [value, setValue] = useState("");
  const [correct, setCorrect] = useState(null);
  const [testCase, setTestCase] = useState("");
  const [result, setResult] = useState("");

  const handleChange = (editor, data, value) => {
    setValue(value);
  };

  const handleSubmit = (id) => {
    try {
      // index where function body starts
      const functionStartIndex = value.match(/{/).index;
      // arguments extraction
      const userArgs = value
        .slice(0, functionStartIndex)
        .match(/\([\S*\s]{1,}\)/);

      const argsArray = userArgs[0].slice(1, userArgs[0].length - 1).split(",");

      // providing arugments and function body
      const userFunction = new Function(
        ...argsArray,
        value.slice(functionStartIndex)
      );

      console.log(argsArray);
      const { correct, received, testCase } = testers[id].test(userFunction);

      setCorrect(correct);
      setResult(received);
      setTestCase(testCase);
    } catch (err) {
      if (`${err}` === "TypeError: Cannot read property 'index' of null") {
        setResult("Brak deklaracji funkcji, lub błędna deklaracja.");
      } else {
        setResult(`${err}`);
      }
    }
  };

  return (
    <Wrapper>
      <TaskDescription>
        <Number>{index + 1}.</Number>
        {desc}
      </TaskDescription>
      <Editor onChange={handleChange} value={value} />
      <Result received={result} expected={correct} testCase={testCase} />
      <Submit onSubmit={handleSubmit} id={index} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin: 15px auto;
  width: 75%;

  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;

  border-radius: 5px;

  background-color: rgb(230, 230, 230);
  padding: 15px;
`;

const TaskDescription = styled.div`
  margin-bottom: 15px;
  flex-basis: 100%;
  font-family: ${({ theme }) => theme.fonts.main};
`;
const Number = styled.span`
  float: left;
  margin-right: 10px;

  font-size: 3rem;
  font-family: ${({ theme }) => theme.fonts.main};

  color: ${({ theme }) => theme.colors.darkGray};
`;

export default Question;
