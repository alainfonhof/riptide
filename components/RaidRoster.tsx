import { Box, Heading, SimpleGrid } from "@chakra-ui/react";
import * as React from "react";
import { Player } from "lib/types";
import { PlayerList } from "./PlayerList";

type RaidRosterProps = {
  title?: string;
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
  <Box w="100%" py={70}>
    {title ? (
      <Heading textAlign={"center"} marginBottom={30}>
        {title}
      </Heading>
    ) : null}
    <SimpleGrid minChildWidth={330} spacing={15}>
      <PlayerList
        title="Tanks"
        players={tanks}
        imageProps={{
          src: "/images/tank.png",
          alt: "tank-icon",
        }}
        boxProps={{ maxW: 345 }}
      />
      <PlayerList
        title="Healers"
        imageProps={{ src: "/images/healer.png", alt: "heal-icon" }}
        players={healers}
        boxProps={{ maxW: 345 }}
      />
      <PlayerList
        title="DPS"
        imageProps={{ src: "/images/dps.png", alt: "dps-icon" }}
        players={dpsers}
        boxProps={{ maxW: 345 }}
      />
    </SimpleGrid>
  </Box>
);
