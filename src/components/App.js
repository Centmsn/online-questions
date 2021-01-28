import Question from "./Question";
import Theme from "../styled/theme";
import GlobalStyle from "../styled/GlobalStyle";
import { questions } from "../consts/questions";

function App() {
  const renderQuestion = () => {
    return questions.map(({ desc, correct }, index) => (
      <Question desc={desc} index={index} key={index} />
    ));
  };

  return (
    <Theme>
      <GlobalStyle />
      <div className="App">{renderQuestion()}</div>
    </Theme>
  );
}

export default App;
