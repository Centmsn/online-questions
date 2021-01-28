import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { faTimesCircle } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";

const Result = ({ received, expected, testCase }) => {
  // console.table({ received, expected, testCase });
  let content;

  if (`${JSON.stringify(expected)}` && `${JSON.stringify(received)}`) {
    content = (
      <>
        <p>Otrzymana wartość to:</p>
        <span>{`${JSON.stringify(received)}`}</span>
        <p>Spodziewany wynik:</p>
        <span>{`${JSON.stringify(expected)}`}</span>
        <p>Wartość użyta w teście:</p>
        <span>{JSON.stringify(testCase)}</span>
      </>
    );
  }

  const isCorrect = `${received}` === `${expected}`;

  return (
    <Wrapper>
      <h2>
        Wynik{" "}
        <FontAwesomeIcon
          style={
            isCorrect
              ? { color: "rgb(20,200,20)" }
              : { color: "rgb(200,20,20)" }
          }
          icon={isCorrect ? faCheckCircle : faTimesCircle}
        />
      </h2>
      {content}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  flex-basis: 35%;

  display: flex;
  flex-flow: column;
  justify-content: space-between;

  border: 2px solid ${({ theme }) => theme.colors.darkGray};

  text-align: center;
  font-family: ${({ theme }) => theme.fonts.main};

  background-color: ${({ theme }) => theme.colors.lightGray};

  padding-bottom: 10px;

  overflow-y: auto;
  overflow-x: hidden;

  h2 {
    background-color: ${({ theme }) => theme.colors.darkGray};
    color: ${({ theme }) => theme.colors.lightGray};

    padding-bottom: 5px;
  }

  p {
    background-color: white;
    font-size: 1.25rem;
  }
`;

export default Result;
