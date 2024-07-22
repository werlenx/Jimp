import styled from "styled-components";

export const InStyled = styled.input`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 30px;
  font-size: 16px;
  width: 100%;
  box-sizing: border-box;

  &:focus {
    border-color: #8c00ff;
    outline: none;
  }
`;
