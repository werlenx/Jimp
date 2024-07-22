import { InStyled } from "./InputStyled";

export default function In (props) {
    return (
        <InStyled
            type={props.type || "text"}  // Define o tipo de input, por padrão é "text"
            name={props.name}            // Define o nome do input
            value={props.value}          // Define o valor do input
            onChange={props.onChange}    // Define o evento onChange
            placeholder={props.placeholder}  // Define o placeholder
        />
    );
}
