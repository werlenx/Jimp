import Head from "../components/head/Head";
import { RankStyled } from "./RankStyled";
import CardRank from "../components/cardRank/CardRank";

export default function Rank() {
  return (
    <>
        <Head title="Rank Page" />
        <RankStyled>
      
            <CardRank></CardRank>
        </RankStyled>
    </>
  );
    
    
}
