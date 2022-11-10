import {
  Box,
  Flex,
  Heading,
  HStack,
  Stack,
  Text,
  useBreakpointValue,
  Wrap,
} from "@chakra-ui/react";
import { MythicPlusTeam } from "lib/types";
import { PlayerCard } from "./PlayerCard";
import { PlayerList } from "./PlayerList";

type MythicPlusTeamProps = {
  team: MythicPlusTeam;
};

export const MythicPlusTeamItem: React.FC<MythicPlusTeamProps> = ({ team }) => (
  <Stack w="100%" direction={{ base: "column", md: "row" }} align="center">
    <Box textAlign="left" flex="1" py={30} w="100%" minWidth={"360px"}>
      <Heading size={useBreakpointValue({ base: "sm", md: "md" })}>
        {team.name}
      </Heading>
      <Text fontSize={{ base: "lg", md: "xl" }} color="muted">
        {team.description}
      </Text>
    </Box>
    <PlayerList players={team.players} boxProps={{ flex: 2 }} />
  </Stack>
);
