import {
  BarStat,
  Container,
  Heading,
  StatContainer,
  StatName,
  StatValue,
} from "./StyledComponents";

type Stat = {
  base_stat: number;
  effort: number;
  stat: {
    name: string;
    url: string;
  };
};

interface Props {
  baseStats: Stat[] | undefined;
}

const BaseStats = ({ baseStats }: Props) => {
  return (
    <Container>
      <Heading>Base stats</Heading>
      {baseStats?.map(({ stat, base_stat }) => {
        return (
          <StatContainer key={stat.name}>
            <StatName>{StatsName[stat.name]}</StatName>
            <StatValue>{base_stat}</StatValue>
            <BarStat>
              <div
                style={{
                  height: "7px",
                  width: `${base_stat - base_stat / 2}%`,
                  background: "#dd4b4b",
                  borderRadius: "20px",
                }}
              ></div>
            </BarStat>
          </StatContainer>
        );
      })}
    </Container>
  );
};

const StatsName: Record<string, any> = {
  hp: "HP",
  attack: "Attack",
  defense: "Defense",
  "special-attack": "Sp. Atk",
  "special-defense": "Sp. Def",
  speed: "Speed",
};

export default BaseStats;
