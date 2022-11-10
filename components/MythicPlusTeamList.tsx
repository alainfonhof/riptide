import { Box, Heading, HStack, StackDivider, VStack } from "@chakra-ui/react";
import { PlayerCard } from "./PlayerCard";
import Image from "next/image";
import { ImageProps } from "next/image";
import { Player, MythicPlusTeam } from "lib/types";
import { MythicPlusTeamItem } from "./MythicPlusTeamItem";

type MythicPlusTeamListProps = {
  title: string;
  teams?: MythicPlusTeam[];
};

export const MythicPlusTeamList: React.FC<MythicPlusTeamListProps> = ({
  title,
  teams = [],
}) => (
  <Box w="100%" py={70}>
    {title ? (
      <Heading textAlign={"center"} marginBottom={30}>
        {title}
      </Heading>
    ) : null}
    <VStack
      spacing={30}
      w="100%"
      divider={<StackDivider borderColor="blackAlpha.300" />}
    >
      {teams.map((team) => (
        <MythicPlusTeamItem team={team} />
      ))}
    </VStack>
  </Box>
);
