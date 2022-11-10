import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Highlight,
  Stack,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";
import Image from "next/image";

export const PageHeaderWithCTA: React.FC<{}> = () => (
  <Box as="section" py={{ base: "16", md: "24" }} position="relative">
    <Flex
      id="image-wrapper"
      position="absolute"
      insetX="0"
      insetY="0"
      w="full"
      h="full"
      overflow="hidden"
      align="center"
      zIndex={-1}
    >
      <Box position="relative" w="full" h="full">
        <Image
          src={"/images/page-banner-waves-crashing-16-9.png"}
          alt="Crashing waves page header"
          fill
          style={{
            maxWidth: "100%",
            objectFit: "cover",
            objectPosition: "50% 50%",
          }}
        />
        <Box position="absolute" w="full" h="full" bg="blackAlpha.600" />
      </Box>
    </Flex>
    <Container>
      <Stack spacing={{ base: "8", md: "10" }}>
        <Stack spacing={{ base: "4", md: "6" }}>
          <Stack spacing="3">
            <Heading
              size={useBreakpointValue({ base: "md", md: "lg" })}
              fontWeight="semibold"
              textTransform={"uppercase"}
              color="white"
            >
              <Highlight query="Meet" styles={{ px: "15px", bg: "blue.100" }}>
                Meet the team
              </Highlight>
            </Heading>
          </Stack>
          <Text fontSize={{ base: "lg", md: "xl" }} maxW="3xl" color="white">
            If you want to join any of the teams then join our Discord.
          </Text>
        </Stack>
      </Stack>
    </Container>
  </Box>
);
