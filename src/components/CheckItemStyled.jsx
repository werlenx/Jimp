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
        width: 100px;
        height: 50px;
    }
    h3{
        padding: 0;
        margin: 0;
    }
    p{
        padding: 0;
        margin: 0;
    }
`
export {CheckItemStyled}