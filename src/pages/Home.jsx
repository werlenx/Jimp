import React from "react";
import { HomeStyled } from "./HomeStyled";
import { Link } from "react-router-dom"
import Button from "../components/Button";

export default function Home() {
  return (
    <HomeStyled>
      <div className="glass">
        <h1>JINP</h1>
        <h3>Jogos internos IFP</h3>
        <p>3º Edição 2024</p>
        <div>
          <div className="botoes">
            <Link to="/rank"><button>Ranking dos campeões</button></Link>
            <Link to="/agenda"><button>Agenda do Evento</button></Link>
            
          </div>

          <div className="evento">
            <p>DATA DO EVENTO</p>
            <h3>01 DE JULHO A 18 DE AGOSTO</h3>
          </div>

          <p className="inscricoes">
            <span>Inscrições</span> <br /> Dia 01 a 13 de Julho
          </p>
        </div>
      </div>
    </HomeStyled>
  );
}
