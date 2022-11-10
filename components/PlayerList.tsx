import { Box, BoxProps, Heading, HStack, Wrap } from "@chakra-ui/react";
import { PlayerCard } from "./PlayerCard";
import Image from "next/image";
import { ImageProps } from "next/image";
import { Player } from "lib/types";

type PlayerListProps = {
  title?: string;
  players?: Player[];
  imageProps?: ImageProps;
  boxProps?: BoxProps;
};

export const PlayerList: React.FC<PlayerListProps> = ({
  title,
  players = [],
  imageProps,
  boxProps,
}) => (
  <Box {...boxProps} w="100%">
    {title ? (
      <Heading size="sm" textAlign={"center"} marginBottom={15}>
        {title}
        {imageProps ? (
          <Image
            {...imageProps}
            width={24}
            height={24}
            style={{ display: "inline", marginLeft: "5px" }}
          />
        ) : null}
      </Heading>
    ) : null}

    <Wrap spacing={15} pb={3}>
      {players.map((player) => (
        <PlayerCard name={player.name} wowClass={player.wowClass} />
      ))}
    </Wrap>
  </Box>
);
