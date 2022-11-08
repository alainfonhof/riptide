import {
  Box,
  Button,
  Flex,
  Heading,
  HStack,
  Stack,
  Text,
  Img,
} from "@chakra-ui/react";
import * as React from "react";
import Image from "next/image";
import { HiChevronRight } from "react-icons/hi";

export const HeroWithImageBackground: React.FC<{}> = () => (
  <Box bg="gray.800" as="section" minH="140px" position="relative">
    <Box py="32" position="relative" zIndex={1}>
      <Box
        maxW={{ base: "xl", md: "7xl" }}
        mx="auto"
        px={{ base: "6", md: "8" }}
        color="white"
      >
        <Box maxW="xl">
          <Heading as="h1" size="3xl" fontWeight="extrabold">
            Join the Riptide family
          </Heading>
          <Text fontSize={{ md: "2xl" }} mt="4" maxW="lg">
            Founded in 2014, Riptide pushes the Dutch PvE scene. Riptide
            connects players who wants to achieve amazing feats.
          </Text>
          <Stack direction={{ base: "column", md: "row" }} mt="10" spacing="4">
            <Button
              as="a"
              href="#"
              colorScheme="blue"
              px="8"
              rounded="full"
              size="lg"
              fontSize="md"
              fontWeight="bold"
            >
              Apply
            </Button>
            <HStack
              as="a"
              transition="background 0.2s"
              justify={{ base: "center", md: "flex-start" }}
              href="#"
              color="white"
              rounded="full"
              fontWeight="bold"
              px="6"
              py="3"
              _hover={{ bg: "whiteAlpha.300" }}
            >
              <span>Who we are</span>
              <HiChevronRight />
            </HStack>
          </Stack>
        </Box>
      </Box>
    </Box>
    <Flex
      id="image-wrapper"
      position="absolute"
      insetX="0"
      insetY="0"
      w="full"
      h="full"
      overflow="hidden"
      align="center"
    >
      <Box position="relative" w="full" h="full">
        <Image
          src="/images/hero-image.png"
          alt="Dragonflight Hero Image"
          fill={true}
          style={{
            maxWidth: "100%",
            objectFit: "cover",
            objectPosition: "top bottom",
          }}
        />
        <Box position="absolute" w="full" h="full" bg="blackAlpha.600" />
      </Box>
    </Flex>
  </Box>
);
