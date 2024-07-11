import { CardRanckStyled } from "./CardRankStyled";

export default function (props) {
  return (
    <CardRanckStyled>
      <div className="position">
        <p>{props.position}</p>
      </div>
      <div className="logo">
        <img src={props.pathImg} alt="" />
      </div>
      <div className="info">
        <h2>{props.name}</h2>
        <p>{props.class}</p>
        <p className="pontos">{props.point} pts</p>
      </div>
    </CardRanckStyled>
  );
}
