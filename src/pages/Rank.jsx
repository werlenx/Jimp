import Head from "../components/head/Head";
import { RankStyled } from "./RankStyled";
import CardRank from "../components/cardRank/CardRank";
import Button from "../components/Button";
import fs from "fs";
const teams = [
  {
    id: "1",
    name: "Sobreviventes",
    pathImg: "./logos/23adm02_sobreviventes.jpeg",
    points: 50,
    class: "23ADM02",
  },
  {
    id: "2",
    name: "Alcateia",
    pathImg: "./logos/23adm04_alcateia.jpeg",
    points: 50,
    class: "23ADM04",
  },
  {
    id: "3",
    name: "Tropa de Elite",
    pathImg: "./logos/23adm05_tropa_de_elite.jpeg",
    points: 50,
    class: "23ADM05",
  },
  {
    id: "4",
    name: "Ford",
    pathImg: "./logos/23adm06_ford.jpeg",
    points: 50,
    class: "23ADM06",
  },
  {
    id: "5",
    name: "Scorpions",
    pathImg: "./logos/23adm06_scorpions.jpeg",
    points: 50,
    class: "23ADM06",
  },
  {
    id: "6",
    name: "Os Corujões",
    pathImg: "./logos/23adm07_os_corujoes.jpeg",
    points: 50,
    class: "23ADM07",
  },
  {
    id: "7",
    name: "Águias",
    pathImg: "./logos/23adm08_aguia.jpeg",
    points: 50,
    class: "23ADM08",
  },
  {
    id: "8",
    name: "Fox",
    pathImg: "./logos/23adm08_fox.jpg",
    points: 50,
    class: "23ADM08",
  },
  {
    id: "9",
    name: "Furacão Azul",
    pathImg: "./logos/23adm09_furacao_azul.jpeg",
    points: 50,
    class: "23ADM09",
  },
  {
    id: "10",
    name: "Spartan",
    pathImg: "./logos/23adm09_spartan.jpeg",
    points: 50,
    class: "23ADM09",
  },
  {
    id: "11",
    name: "Lobos da Amazônia",
    pathImg: "./logos/23adm10_lobos_da_amazonia.jpeg",
    points: 50,
    class: "23ADM10",
  },
  {
    id: "12",
    name: "Fênix Fire",
    pathImg: "./logos/23adm11_fenix_fire.jpeg",
    points: 50,
    class: "23ADM11",
  },
  {
    id: "13",
    name: "Titas",
    pathImg: "./logos/23adm12_titas.jpeg",
    points: 50,
    class: "23ADM12",
  },
  {
    id: "14",
    name: "Raio de Fogo",
    pathImg: "./logos/23adm13_raio_de_fogo.jpeg",
    points: 50,
    class: "23ADM13",
  },
  {
    id: "15",
    name: "Lions",
    pathImg: "./logos/23adm15_lions.jpeg",
    points: 50,
    class: "23ADM15",
  },
  {
    id: "16",
    name: "Destemidos",
    pathImg: "./logos/23adm16_destemidos.jpeg",
    points: 50,
    class: "23ADM16",
  },
  {
    id: "17",
    name: "Alfa",
    pathImg: "./logos/23adm17_alfa.jpeg",
    points: 50,
    class: "23ADM17",
  },
  {
    id: "18",
    name: "Delta",
    pathImg: "./logos/23adm18_delta.jpeg",
    points: 50,
    class: "23ADM18",
  },
  {
    id: "19",
    name: "Dopaminerigicos",
    pathImg: "./logos/23fma07_dopaminergicos.jpeg",
    points: 50,
    class: "23FMA07",
  },
  {
    id: "20",
    name: "Artemis",
    pathImg: "./logos/24adm01_artemis.jpeg",
    points: 50,
    class: "24ADM01",
  },
  {
    id: "21",
    name: "WD",
    pathImg: "./logos/24adm02_wd.jpeg",
    points: 50,
    class: "24ADM02",
  },
  {
    id: "22",
    name: "Wakanda",
    pathImg: "./logos/24adm03_wakanda.jpeg",
    points: 50,
    class: "24ADM03",
  },
  {
    id: "23",
    name: "Black Office",
    pathImg: "./logos/24adm04_black_office.jpeg",
    points: 50,
    class: "24ADM04",
  },
  {
    id: "24",
    name: "Falcoes",
    pathImg: "./logos/24adm05_falcoes.jpeg",
    points: 50,
    class: "24ADM05",
  },
  {
    id: "25",
    name: "Águias de Fogo",
    pathImg: "./logos/24adm07_aguias_de_fogo.jpeg",
    points: 50,
    class: "24ADM07",
  },
  {
    id: "26",
    name: "Farmaforte",
    pathImg: "./logos/24fma01_farmaforte.jpeg",
    points: 50,
    class: "24FMA01",
  },
  {
    id: "27",
    name: "Atenolol",
    pathImg: "./logos/24fma03_atenolol.jpeg",
    points: 50,
    class: "24FMA03",
  },
  {
    id: "28",
    name: "Tarja Preta",
    pathImg: "./logos/24fma04_tarja_preta.jpeg",
    points: 50,
    class: "24FMA04",
  },
  {
    id: "29",
    name: "Farma SOS",
    pathImg: "./logos/24fma05_farma_sos.jpeg",
    points: 50,
    class: "24FMA05",
  },
  {
    id: "30",
    name: "Pramil",
    pathImg: "./logos/24fma06_pramil.jpeg",
    points: 50,
    class: "24FMA06",
  },
  {
    id: "31",
    name: "Só Vem Mermão",
    pathImg: "./logos/24fma06_pramil.",
    points: 0,
    class: "23ADM14",
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
