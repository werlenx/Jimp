import styled from "styled-components"

const HeadStyled = styled.nav`
    margin: 0;
    background-color: #2B2A2A;
    width: 100%;
    height: 10vh;
    box-sizing: border-box;
    padding: 10px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    .container{
        display: flex;
        flex-direction: row;
        gap: 20px;
        height: 80%;
    }
    .title{
        display: flex;
        flex-direction: column;
        span{
            font-size: 1rem;
        }
        h1{
            padding: 0;
            margin: 0;
            line-height: 25px;
        }
        p{
            padding: 0;
            margin: 0;
        }
    }
    
    .logo{
        height: 100%;
        object-fit: cover;
        border-radius: 25%;
    }
    .adm{
        width: 40px;
        height: 40px;
    }
    
`

export {HeadStyled} 