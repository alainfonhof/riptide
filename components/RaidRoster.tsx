import { Box, Heading, SimpleGrid } from "@chakra-ui/react";
import * as React from "react";
import { Player } from "lib/types";
import { PlayerList } from "./PlayerList";

type RaidRosterProps = {
  title: string;
  tanks?: Player[];
  healers?: Player[];
  dpsers?: Player[];
};

export const RaidRoster: React.FC<RaidRosterProps> = ({
  title,
  tanks = [],
  healers = [],
  dpsers = [],
}) => (
  <Box w="100%">
    <Heading textAlign={"center"} marginBottom={30}>
      {title}
    </Heading>
    <SimpleGrid minChildWidth={"360px"} spacing={15}>
      <PlayerList
        title="Tanks"
        players={tanks}
        imageProps={{
          src: "/images/tank.png",
          alt: "tank-icon",
        }}
      />
      <PlayerList
        title="Healers"
        imageProps={{ src: "/images/healer.png", alt: "heal-icon" }}
        players={healers}
      />
      <PlayerList
        title="DPS"
        imageProps={{ src: "/images/dps.png", alt: "dps-icon" }}
        players={dpsers}
      />
    </SimpleGrid>
  </Box>
);
