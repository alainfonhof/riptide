import { Container } from "@chakra-ui/react";
import { Layout } from "components/Layout";
import { RaidRoster } from "components/RaidRoster";
import { GetStaticProps } from "next";
import { Player, WoWClass, MythicPlusTeam } from "lib/types";
import { MythicPlusTeamList } from "components/MythicPlusTeamList";

export default function Teams({
  tanks,
  healers,
  dpsers,
  teams,
}: {
  tanks: Player[];
  healers: Player[];
  dpsers: Player[];
  teams: MythicPlusTeam[];
}) {
  return (
    <Layout
      pageHeader
      pageHeaderWithCTAProps={{
        title: "Meet the team",
        highlightQuery: "Meet",
        description:
          "If you want to join any of the teams then join our Discord.",
      }}
    >
      <Container centerContent>
        <RaidRoster
          title="Raid Team"
          tanks={tanks}
          healers={healers}
          dpsers={dpsers}
        />
        <MythicPlusTeamList title="Mythic+ Teams" teams={teams} />
      </Container>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const tanks: Player[] = [
    { name: "AleinyTank", wowClass: WoWClass.DeathKnight },
    { name: "BorisTank", wowClass: WoWClass.Monk },
  ];
  const healers: Player[] = [
    { name: "AleinyHealer", wowClass: WoWClass.Priest },
    { name: "BorisHealer", wowClass: WoWClass.Paladin },
  ];
  const dpsers: Player[] = [
    { name: "Dps1", wowClass: WoWClass.DemonHunter },
    { name: "Dps2", wowClass: WoWClass.Hunter },
    { name: "Dps3", wowClass: WoWClass.Mage },
    { name: "Dps4", wowClass: WoWClass.Warlock },
    { name: "Dps5", wowClass: WoWClass.Rogue },
    { name: "Dps6", wowClass: WoWClass.Shaman },
    { name: "Dps7", wowClass: WoWClass.Druid },
    { name: "Dps8", wowClass: WoWClass.Warrior },
    { name: "Dps9", wowClass: WoWClass.Evoker },
  ];
  const mythicPlusTeams: MythicPlusTeam[] = [
    {
      name: "Team 1",
      description: "Pepe team met de beste tank healer en dps. KEKW.",
      score: 2000,
      players: [
        { name: "AleinyTank", wowClass: WoWClass.DeathKnight },
        { name: "AleinyHealer", wowClass: WoWClass.Priest },
        { name: "Dps1", wowClass: WoWClass.DemonHunter },
        { name: "Dps2", wowClass: WoWClass.Druid },
        { name: "Dps3", wowClass: WoWClass.Warlock },
      ],
    },
    {
      name: "Team 2",
      description: "Pepe team met de beste tank healer en dps. KEKW.",
      score: 0,
      players: [
        { name: "AleinyTank", wowClass: WoWClass.DeathKnight },
        { name: "AleinyHealer", wowClass: WoWClass.Priest },
        { name: "Dps1", wowClass: WoWClass.DemonHunter },
        { name: "Dps2", wowClass: WoWClass.Druid },
        { name: "Dps3", wowClass: WoWClass.Warlock },
        { name: "Dps4", wowClass: WoWClass.Warrior },
        { name: "Dps5", wowClass: WoWClass.Rogue },
      ],
    },
  ];
  return {
    props: {
      tanks,
      healers,
      dpsers,
      teams: mythicPlusTeams,
    },
  };
};
