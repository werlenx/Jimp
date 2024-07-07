import styled from "styled-components"

const HomeStyled = styled.div`
    display: flex;
    flex-direction: column;
    width: 100vw;
    height: 100vh;
    background-image: url('Background.jpg');
    background-size: cover;
    font-size: 1rem;
    
    .glass{
        background-color: rgba(11, 57, 175, 0.5);
        width: 100vw;
        height: 100vh;
        padding: 20px;
        box-sizing: border-box;
    }

    h1{
        margin: 0;
        padding: 0;
        font-size: 8rem;
        font-weight: bolder;
        
    }
    h3{
        font-size: 2.5rem;
        margin: 0;
    }
    p{
        font-size: 1.5rem;
        
        margin: 0;
    }
    .botoes{
        display: flex;
        justify-content: center;
        gap: 20px;
        margin: 40px 0;
        button{
            width: 35vw;
            background-color: rgba(224, 224, 224, 0.2);
        }
    }
    .evento{
        text-align: center;
        p{
            
        };
    }
    .inscricoes{
        span{
            background-color: red;
            padding: 5px 1px;
        }
        margin-top: 10vh;
    }

`
export {HomeStyled}