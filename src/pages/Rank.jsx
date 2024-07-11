import Head from "../components/head/Head";
import { RankStyled } from "./RankStyled";
import CardRank from "../components/cardRank/CardRank";
import Button from "../components/Button";
import fs from "fs";
const teams = [
  {
    id: "1",
    name: "Farmaforte",
    pathImg: "./logos/24fma01_farmaforte.jpeg",
    points: 0,
    class: "23FMA01",
  },
  {
    id: "2",
    name: "espartanos",
    pathImg: "./logos/logo-os-corujoes.jpeg",
    points: 3,
    class: "23ADM13",
  },
  {
    id: "3",
    name: "Curujões",
    pathImg: "c",
    points: "2",
    class: "23ADM13",
  },
];

export default function Rank() {
  teams.sort((a, b) => b.points - a.points); //ordena o array
  return (
    <>
      <Head />
      <RankStyled>
        <h2 className="rank">Rank</h2>
        <div>
          {teams.map((team, index) => (
            <CardRank
              key={team.id}
              position={index + 1}
              pathImg={team.pathImg}
              name={team.name}
              class={team.class}
              point={team.points}
            />
          ))}
        </div>
      </RankStyled>
      <Button />
    </>
  );
}
