import Image from "next/image";
import styles from "styles/Home.module.css";
import { Layout } from "components/Layout";
import { Text, Container, Heading, Stack, Box } from "@chakra-ui/react";
import { RaidRoster } from "components/RaidRoster";
import { GetStaticProps } from "next";
import { Player, WoWClass } from "lib/types";
import { RaidProgression, Raid, BossStatus } from "components/RaidProgression";

export default function Home({
  tanks,
  healers,
  dpsers,
  raids,
}: {
  tanks: Player[];
  healers: Player[];
  dpsers: Player[];
  raids: Raid[];
}) {
  return (
    <Layout heroImage>
      <Container centerContent>
        <Box>
          <Stack spacing={2} pb={70}>
            <Heading textAlign={"center"}>
              Riptide, #1 Nederlandse WoW guild
            </Heading>
            <Text color={"muted"}>
              Bij Riptide staat de community centraal. Daarom zetten we ons in
              om samen te streven naar beter. Met deze aanpak willen wij spelers
              in staat stellen om op het hoogste niveau te presteren,
              uitzonderlijke entertainmentervaringen te bieden en de grenzen van
              de NL WoW scene te verleggen. Wij zijn een guild met leden uit
              Nederland en België. Naast mythic raiding zijn wij actief in
              mythic+ dungeons en hebben wij meerdere ervaren PvP spelers die
              arena's en battlegrounds doen. Wij spelen op de Draenor (EU)
              realm.
            </Text>

            <Text color={"muted"}>
              Naast World of Warcraft spelen we ook geregeld andere spellen, op
              deze manier proberen we ons voltallig Nederlandse/Belgische
              community zo actief en gezellig mogelijk te houden. Buiten het
              gamen om organiseren we BBQ's en borrels, wat altijd een groot
              succes is! Kortom: kom je uit Nederland of België en ben je
              geïnteresseerd om ons team te versterken? Ga dan naar het
              application formulier en laat een apply achter! Na het invullen
              van het formulier zullen we contact met je opnemen voor een
              gesprek op Discord.
            </Text>
          </Stack>
          <RaidRoster
            title="Raid Team"
            tanks={tanks}
            healers={healers}
            dpsers={dpsers}
          />
          <RaidProgression title="Raid Progression" raids={raids} />
        </Box>
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
  ];
  const raids: Raid[] = [
    {
      title: "Castle Nathria",
      bosses: [],
      slug: "castle-nathria",
      backgroundImageSrc: "",
    },
    {
      title: "Sanctum of Domination",
      bosses: [],
      slug: "sanctum-of-domination",
      backgroundImageSrc: "",
    },
    {
      title: "Vault of the Incarnates",
      bosses: [
        {
          title: "Eranog",
          status: BossStatus.NotStarted,
          slug: "eranog",
          imageSrc: "/images/raids/vault-of-the-incarnates/Eranog.png",
        },
        {
          title: "Terros",
          status: BossStatus.NotStarted,
          slug: "terros",
          imageSrc: "/images/raids/vault-of-the-incarnates/Terros.png",
        },
        {
          title: "The Primal Council",
          status: BossStatus.NotStarted,
          slug: "the-primal-council",
          imageSrc: "/images/raids/vault-of-the-incarnates/Primal-Council.png",
        },
        {
          title: "Sennarth, The Cold Breath",
          status: BossStatus.NotStarted,
          slug: "sennarth-the-cold-breath",
          imageSrc: "/images/raids/vault-of-the-incarnates/Sennarth.png",
        },
        {
          title: "Dathea, Ascended",
          status: BossStatus.NotStarted,
          slug: "dathea-ascended",
          imageSrc: "/images/raids/vault-of-the-incarnates/Dathea-Ascended.png",
        },
        {
          title: "Kurog Grimtotem",
          status: BossStatus.NotStarted,
          slug: "kurog-grimtotem",
          imageSrc: "/images/raids/vault-of-the-incarnates/Kurog-Grimtotem.png",
        },
        {
          title: "Broodkeeper Diurna",
          status: BossStatus.NotStarted,
          slug: "broodkeeper-diurna",
          imageSrc:
            "/images/raids/vault-of-the-incarnates/Broodkeeper-Diurna.png",
        },
        {
          title: "Raszageth the Storm-Keeper",
          status: BossStatus.NotStarted,
          slug: "raszageth-the-storm-keeper",
          imageSrc: "/images/raids/vault-of-the-incarnates/Raszageth.png",
        },
      ],
      slug: "vault-of-the-incarnates",
      backgroundImageSrc:
        "/images/raids/vault-of-the-incarnates/loadscreen_vaultoftheincarnates.webp",
      isCurrent: true,
    },
  ];
  return {
    props: {
      tanks,
      healers,
      dpsers,
      raids,
    },
  };
};
