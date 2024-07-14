import { Link } from "react-router-dom";
import { ButtonStyled } from "./ButtonStyled";

export default function Button() {
  return (
    <ButtonStyled>
      <Link to="/rank">
        <button>Ranking dos campeões</button>
      </Link>
      <Link to="/agenda">
        <button>Agenda do Evento</button>
      </Link>
    </ButtonStyled>
  );
}
