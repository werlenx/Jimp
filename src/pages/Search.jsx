import Head from "../components/head/Head";
import { SearchStyled } from "./SearchStyled";
import { RankStyled } from "./RankStyled";

export default function Search() {
  return (
    <SearchStyled>
      <Head></Head>
      <input type="text" placeholder="Pesquisar..." />

      <h2>Resultados da pesquisa</h2>
      
    </SearchStyled>
  );
}
