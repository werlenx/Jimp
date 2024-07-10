import styled from "styled-components";

const CheckItemStyled = styled.div`
    background-color: rgba(219, 219, 219, 0.2);
    
    height: 25vw;
    display: flex;
    flex-direction: row;
    align-items: center;
    
    margin: 10px 0;
    border-radius: 10px;
    box-sizing: border-box;

    .in{
        margin: 10px;
        padding: 10px;
        width: 50px;
        height: 30px;
    }
    h3{
        padding: 0;
        margin: 0;
        color: #e0e40c;
    }
    p{
        padding: 0;
        margin: 0;
        color: #d4d4d4;
    }
`
export {CheckItemStyled}