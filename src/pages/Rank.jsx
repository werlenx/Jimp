import Head from "../components/head/Head";
import { RankStyled } from "./RankStyled";
import CardRank from "../components/cardRank/CardRank";
import Button from "../components/Button";

export default function Rank() {
  return (
    <>
        <Head/>
        
        <RankStyled>
        <h2 className="rank">Rank</h2>
            <CardRank></CardRank>
            <Button/>
        </RankStyled>
        
    </>
  );
    
    
}
