import Head from "../components/head/Head";
import { RankStyled } from "./RankStyled";
import CardRank from "../components/cardRank/CardRank";
import Button from "../components/Button";

export default function Rank() {
  return (
    <>
      <Head />
      <RankStyled>
        <h2 className="rank">Rank</h2>
        <CardRank
          position="00"
          icoPath="./logos/logo-os-corujoes.jpeg"
          name="Os Corujões Corujões"
          class="23ADM03"
          point="150 pts"
        />
        <CardRank
          position="02"
          icoPath="./logos/logo-os-corujoes.jpeg"
          name="Os Corujões"
          class="23ADM03"
          point="150 pts"
        />
        <CardRank
          position="02"
          icoPath="./logos/logo-os-corujoes.jpeg"
          name="Os Corujões"
          class="23ADM03"
          point="150 pts"
        />
        <CardRank
          position="02"
          icoPath="./logos/logo-os-corujoes.jpeg"
          name="Os Corujões"
          class="23ADM03"
          point="150 pts"
        />
        <CardRank
          position="02"
          icoPath="./logos/logo-os-corujoes.jpeg"
          name="Os Corujões"
          class="23ADM03"
          point="150 pts"
        />
        <CardRank
          position="02"
          icoPath="./logos/logo-os-corujoes.jpeg"
          name="Os Corujões"
          class="23ADM03"
          point="150 pts"
        />
      </RankStyled>
      <Button/>
    </>
  );
}
