import { HeadStyled } from "./HeadStyled";
import { Link } from "react-router-dom";


export default function Head(){
    return(
        <HeadStyled>
            <div className="container">
                <Link to="/"><img className="logo" src="logo-ifp.png" alt="" /></Link>
                
                <div className="title">
                    <h1>JIMP</h1>
                    <p>Jogos Interno IFP</p>
                </div>
            </div>
            <img className="adm" src="config.png" alt="" />
            
        </HeadStyled>
    )
}