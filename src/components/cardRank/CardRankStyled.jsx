import styled from "styled-components";

const CardRanckStyled = styled.div`
    background-color: rgba(230, 229, 233, 0.5);
    border: 2px solid #f1f1f1;
    height: 15vh;
    border-radius: 25px;
    display: flex;
    flex-direction: row;
    align-items: center;
    overflow: hidden;
    justify-content: space-between;
    .position{
        /* background-color: blueviolet;, */
        width: 20%;
        font-size: 4rem;
        font-weight: 900;
        display: flex;
        justify-content: center;

    }
    .logo{
        /* background-color: aquamarine; */
        width: 25%;
        display: flex;
        justify-content: center;
        img{
            width: 100%;
            height: 100%;
            object-fit: cover;
            border-radius: 50%;
        }
    }
    
    .info{
        width: 50%;
        /* background-color: gray; */
        padding-left: 20px;
        h2{
            margin: 0;
            color: white;
        }
        p{
            margin: 0;
            color: white;
        }
        .pontos{
            
            font-size: 2rem;
            font-weight: bold;
            margin: 0;
            color: yellow;
        }
    }
`
export {CardRanckStyled}