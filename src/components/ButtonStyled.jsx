import styled from "styled-components";

const ButtonStyled = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    gap: 20px;
    position: fixed;
    bottom: 25px;
    
    button{
        color: #f9f9f9;
        width: 35vw;
        background-color: rgba(71, 71, 71, 0.5);
        border-radius: 8px;
        border: 1px solid #f9f9f9;
        padding: 0.6em 1.2em;
        font-size: 1em;
        font-weight: 500;
        font-family: inherit;
        cursor: pointer;
    }
`;
export { ButtonStyled };
