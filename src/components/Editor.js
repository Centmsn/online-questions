import "codemirror/lib/codemirror.css";
import "codemirror/theme/material.css";
import "codemirror/mode/javascript/javascript";
import { Controlled } from "react-codemirror2";
import styled from "styled-components";

const Editor = ({ onChange, value }) => {
  return (
    <Wrapper>
      <EditField
        onBeforeChange={onChange}
        value={value}
        className="editor-container__wrapper"
        options={{
          lineWrapping: true,
          lint: true,
          mode: "javascript",
          lineNumbers: true,
          theme: "material",
        }}
      />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  flex-basis: 60%;
`;

const EditField = styled(Controlled)`
  border: 2px solid ${({ theme }) => theme.colors.lightGray};
  font-size: 1.35rem;
`;

export default Editor;
