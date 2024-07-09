import { HeadStyled } from "./HeadStyled";



export default function Head(){
    return(
        <HeadStyled>
            <div className="container">
                <img className="logo" src="logo-ifp.png" alt="" />
                <div className="title">
                    <h1>JIMP</h1>
                    <p>Jogos Interno IFP</p>
                </div>
            </div>
            <img className="adm" src="config.png" alt="" />
            
        </HeadStyled>
    )
}