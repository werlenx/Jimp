import styled from "styled-components";

const CardRanckStyled = styled.div`
    background-color: rgba(1, 5, 15, 0.3);
    border: 2px solid #f1f1f1;
    height: 15vh;
    border-radius: 15px;
    display: flex;
    flex-direction: row;
    align-items: center;
    overflow: hidden;
    justify-content: space-between;
    margin: 10px;
    padding: 10px 0;
    .position{
        /* background-color: coral; */
        width: 20%;
        height: 100%;
        font-size: 2.5rem;
        font-weight: 900;
        display: flex;
        justify-content: center;
        align-items: center;
        p{
            margin: 0;
            color: white;
        }

    }
    .logo {
        /* background-color: royalblue; */
        width: 30%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        overflow: hidden; /* para cortar a imagem que exceder a área do círculo */
    }

    .logo img {

        width: 100px;
        height: 100px;
        object-fit: cover;
        border-radius: 50%; /* para tornar a imagem redonda */
    }

    
    .info{
        display: flex;
        flex-direction: column;
        justify-content: center;
        width: 50%;
        height: 100%;
        padding-left: 20px;
        h2{ 
            font-size: 1.3rem;
            margin: 0;
            color: white;
        }
        p{
            margin: 0;
            color: white;
        }
        .pontos{
            
            font-size: 1.5rem;
            font-weight: bold;
            margin: 0;
            color: yellow;
        }
    }
`
export {CardRanckStyled}