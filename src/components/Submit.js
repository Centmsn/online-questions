import styled from "styled-components";

const Submit = ({ onSubmit, id }) => {
  return (
    <Wrapper>
      <StyledButton onClick={() => onSubmit(id)}>Sprawdź</StyledButton>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  flex-basis: 100%;
`;

const StyledButton = styled.button`
  margin-top: 10px;
  width: 100%;

  border: 2px solid ${({ theme }) => theme.colors.darkGray};

  font-size: 2rem;
  font-family: ${({ theme }) => theme.fonts.main};

  background-color: ${({ theme }) => theme.colors.lightGray};

  cursor: pointer;
  transition: 300ms;

  &:hover {
    background-color: ${({ theme }) => theme.colors.darkGray};
    color: ${({ theme }) => theme.colors.lightGray};
  }
`;

export default Submit;
