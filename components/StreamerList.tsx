import {
  Avatar,
  Box,
  Heading,
  SimpleGrid,
  Stack,
  Text,
  Icon,
  HStack,
  useBreakpointValue,
  useColorModeValue,
  Center,
} from "@chakra-ui/react";
import { Streamer } from "lib/types";
import Link from "next/link";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

type StreamerListProps = {
  title?: string;
  description?: string;
  streamers?: Streamer[];
};

export const StreamerList: React.FC<StreamerListProps> = ({
  title,
  description,
  streamers = [],
}) => (
  <Box w="100%" py={70}>
    {title ? (
      <Heading textAlign={"center"} marginBottom={30}>
        {title}
      </Heading>
    ) : null}
    {description ? (
      <Center>
        <Text
          color="muted"
          fontSize={{ base: "lg", md: "xl" }}
          maxW="3xl"
          mb={30}
          textAlign={"center"}
        >
          {description}
        </Text>
      </Center>
    ) : null}
    <SimpleGrid
      columns={{ base: 1, md: 2, lg: 3 }}
      columnGap="8"
      rowGap={{ base: "6", md: "8", lg: "16" }}
    >
      {streamers.map((streamer) => (
        <Link href={`https://www.twitch.tv/${streamer.twitchUsername}`}>
          <Box
            key={streamer.name}
            bg="bg-surface"
            p="6"
            boxShadow={useColorModeValue("sm", "sm-dark")}
            borderRadius="md"
          >
            <Stack spacing="4" align="center" textAlign="center">
              <Stack>
                <Stack spacing={{ base: "4", md: "5" }} align="center">
                  <Avatar
                    src={streamer.avatarSrc}
                    boxSize={{ base: "16", md: "20" }}
                  />
                  <Box>
                    <Text fontWeight="medium" fontSize="lg">
                      {streamer.name}
                    </Text>
                    <Text
                      color="blue.500"
                      textTransform={"uppercase"}
                    >{`twitch.tv/${streamer.twitchUsername}`}</Text>
                  </Box>
                </Stack>
              </Stack>
            </Stack>
          </Box>
        </Link>
      ))}
    </SimpleGrid>
  </Box>
);
