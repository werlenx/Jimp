import { redirect } from "react-router-dom";
import styled from "styled-components";

const MyEventStyled = styled.div`
    background-color: #04286D;
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    input{
        width: 80vw;
        margin: 10px auto;
        padding: 10px;
        font-size: 1.2rem;
        border: none;
        border-radius: 25px;
        transition: background-color 0.3s ease;
    }
`

export {MyEventStyled}