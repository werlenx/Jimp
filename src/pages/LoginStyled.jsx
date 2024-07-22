import styled from "styled-components";

const LoginStyled = styled.div`
  height: 100vh; 
  width: 100vw;
  display: flex;
  flex-direction: column;
  background-color: #04286D;
  box-sizing: border-box;
  align-items: center;
  padding: 20px;



  div{
    padding: 10px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    border: solid 1px #fff;
    border-radius: 15px;
    width: 100%;
  }
  button{
    margin-top: 50px;
    padding: 10px 20px;
    background-color: #fff;
    color: #04286D;
    border: none;
    border-radius: 10px;
    cursor: pointer;
    transition: background-color 0.3s ease-in-out;
  }
`;
export { LoginStyled };
