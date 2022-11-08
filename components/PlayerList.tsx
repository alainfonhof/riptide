import { Box, Heading, HStack } from "@chakra-ui/react";
import { PlayerCard } from "./PlayerCard";
import Image from "next/image";
import { ImageProps } from "next/image";
import { Player } from "lib/types";

type PlayerListProps = {
  title: string;
  players?: Player[];
  imageProps: ImageProps;
};

export const PlayerList: React.FC<PlayerListProps> = ({
  title,
  players = [],
  imageProps,
}) => (
  <Box>
    <Heading size="sm" textAlign={"center"} marginBottom={15}>
      {title}
      <Image
        {...imageProps}
        width={24}
        height={24}
        style={{ display: "inline", marginLeft: "5px" }}
      />
    </Heading>
    <HStack spacing={15}>
      {players.map((player) => (
        <PlayerCard name={player.name} wowClass={player.wowClass} />
      ))}
    </HStack>
  </Box>
);
