import Image from "next/image";
import styles from "styles/Home.module.css";
import { Layout } from "components/Layout";
import { Text, Container, Heading, Stack, Box } from "@chakra-ui/react";
import { RaidRoster } from "components/RaidRoster";
import { GetStaticProps } from "next";
import { Player, WoWClass } from "lib/types";

export default function Home({
  tanks,
  healers,
  dpsers,
}: {
  tanks: Player[];
  healers: Player[];
  dpsers: Player[];
}) {
  return (
    <Layout heroImage={true}>
      <Container centerContent>
        <Box className={styles.main}>
          <Stack spacing={2}>
            <Heading textAlign={"center"}>
              Riptide, #1 Nederlandse WoW guild
            </Heading>
            <Text>
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

            <Text>
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
        </Box>
        <RaidRoster
          title="Raid Team"
          tanks={tanks}
          healers={healers}
          dpsers={dpsers}
        />
      </Container>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span className={styles.logo}>
            <Image
              src="/vercel.svg"
              alt="Vercel Logo"
              width={72}
              height={16}
              style={{
                maxWidth: "100%",
                height: "auto",
              }}
            />
          </span>
        </a>
      </footer>
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
  return {
    props: {
      tanks,
      healers,
      dpsers,
    },
  };
};
