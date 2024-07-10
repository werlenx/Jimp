
import Head from "../components/head/Head";
import Button from "../components/Button";
import { AgendaStyled } from "./AgendaStyled";
import CheckItem from "../components/CheckItem";

export default function Agenda() {
  return (
    <>
      <Head />
      
      <AgendaStyled>
      <h2>Cronograma do evento</h2>
        <CheckItem 
          title="Desafio 1: Criação do brasão da equipe"
          date = "de 06 a 11 de Julho"
        />
        <CheckItem 
          title="Desafio 2: grito de guerra"
          date = "de 13 a 18 de Julho"
        />
        <CheckItem 
          title="Desafio 3: Criar um produto sustentável"
          date = "de 20 a 25 de Julho"
        />
        <CheckItem 
          title="Desafio 4: Criação do brasão da equipe"
          date = "de 27 de Julho a 10 de Agosto"
        />
        <CheckItem 
          title="Desafio 5: Entrega das latas de Leite Ninho"
          date = "de 10 a 15 de Agosto"
        />
        <Button />
      </AgendaStyled>
      
    </>
  );
}
