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

export type PageHeaderWithCTAProps = {
  title?: string;
  description?: string;
  highlightQuery?: string;
};

export const PageHeaderWithCTA: React.FC<PageHeaderWithCTAProps> = ({
  title,
  description,
  highlightQuery,
}) => (
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
            {title ? (
              <Heading
                size={useBreakpointValue({ base: "md", md: "lg" })}
                fontWeight="semibold"
                textTransform={"uppercase"}
                color="white"
              >
                <Highlight
                  query={highlightQuery}
                  styles={{ px: "15px", bg: "blue.100" }}
                >
                  {title}
                </Highlight>
              </Heading>
            ) : null}
          </Stack>
          {description ? (
            <Text fontSize={{ base: "lg", md: "xl" }} maxW="3xl" color="white">
              {description}
            </Text>
          ) : null}
        </Stack>
      </Stack>
    </Container>
  </Box>
);
