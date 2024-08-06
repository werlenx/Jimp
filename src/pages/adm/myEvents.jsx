import Head from "../../components/head/Head";
import { MyEventStyled } from "./myEventStyled";
import { RankStyled } from "../RankStyled";

export default function MyEvent() {
  return (
    <MyEventStyled>
      <Head></Head>
      <input type="text" placeholder="Pesquisar..." />

      <h2>Resultados da pesquisa</h2>
      
    </MyEventStyled>
  );
}
