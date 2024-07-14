import { CheckItemStyled } from "./CheckItemStyled";
export default function CheckItem(props) {
  return (
    <CheckItemStyled>
      <input
        className="in"
        type="checkbox"
        value="true"
        checked={props.status}
      />
      <div>
        <h3>{props.title}</h3>
        <p>{props.date}</p>
      </div>
    </CheckItemStyled>
  );
}
