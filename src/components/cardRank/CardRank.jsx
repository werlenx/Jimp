import { CardRanckStyled } from "./CardRankStyled";

export default function () {
  return (
    <CardRanckStyled>
      <div className="position">
        <p>1</p>
      </div>
      <div className="logo">
        <img src="./logos/logo-os-corujoes.jpeg" alt="" />
      </div>
      <div className="info">
        <h2>Os Corujões</h2>
        <p>23ADM12</p>
        <p className="pontos">150 pts</p>
      </div>
    </CardRanckStyled>
  );
}
