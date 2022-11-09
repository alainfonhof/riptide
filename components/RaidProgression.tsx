import {
  Box,
  Button,
  Heading,
  Progress,
  SimpleGrid,
  Text,
  Colors,
  useBreakpointValue,
  Center,
} from "@chakra-ui/react";
import Image from "next/image";

export type Raid = {
  title: string;
  slug: string;
  bosses: Boss[];
  cuttingEdgeAchiImageSrc?: string;
  backgroundImageSrc: string;
  isCurrent?: boolean;
};

export type Boss = {
  title: string;
  slug: string;
  imageSrc: string;
  status: BossStatus;
};

export enum BossStatus {
  NotStarted = "NotStarted",
  NormalCompleted = "NormalCompleted",
  HeroicCompleted = "HeroicCompleted",
  MythicCompleted = "MythicCompleted",
}

type RaidProgressionProps = {
  title?: string;
  description?: boolean;
  raids: Raid[];
};

export const RaidProgression: React.FC<RaidProgressionProps> = ({
  title,
  description,
  raids = [],
}) => {
  const currentRaid = raids.find((raid) => raid.isCurrent);

  return (
    <Box w="100%" py={70} textAlign={"center"}>
      {title ? (
        <Heading
          marginBottom={30}
          size={useBreakpointValue({ base: "sm", md: "md" })}
        >
          {title}
        </Heading>
      ) : null}
      <Center>
        {description ? (
          <Text
            color="muted"
            fontSize={{ base: "lg", md: "xl" }}
            maxW="3xl"
            mb={30}
          >
            {description}
          </Text>
        ) : (
          <Text
            color="muted"
            fontSize={{ base: "lg", md: "xl" }}
            maxW="3xl"
            mb={30}
          >
            Bekijk onze raid geschiedenis{" "}
            <Button
              as="a"
              href="/raid-history"
              colorScheme="blue"
              px="8"
              size="lg"
              fontSize="md"
              fontWeight="bold"
              textTransform="uppercase"
            >
              Raid History
            </Button>
          </Text>
        )}
      </Center>

      {currentRaid ? (
        <SimpleGrid minChildWidth={320} spacing={15}>
          {currentRaid.bosses.map((boss) => (
            <Box>
              <Box
                position={"relative"}
                borderRadius={8}
                overflow={"hidden"}
                _hover={{
                  filter: "saturate(1.5)",
                  transition: "filter 0.4s ease-out",
                  cursor: "pointer",
                }}
                boxShadow={"dark-lg"}
              >
                <Image
                  src={currentRaid.backgroundImageSrc}
                  alt={currentRaid.title}
                  fill
                />
                <Image
                  src={boss.imageSrc}
                  alt={boss.title}
                  width={320}
                  height={180}
                  style={{
                    margin: "auto",
                    paddingTop: "15px",
                    position: "relative",
                    filter: "drop-shadow(0 0 6px rgba(255,255,255,.3))",
                  }}
                />
                <Heading
                  as="h3"
                  size="xs"
                  color={"white"}
                  position="relative"
                  textTransform={"uppercase"}
                  textAlign={"center"}
                  backgroundColor={"rgba(0,0,0,0.5)"}
                  boxShadow="1px 0 5px 8px rgb(0 0 0 / 50%)"
                  p={4}
                  mb={30}
                  overflow="hidden"
                  whiteSpace={"nowrap"}
                  textOverflow={"ellipsis"}
                >
                  {boss.title}
                </Heading>
              </Box>
              <SimpleGrid
                columns={3}
                textAlign={"center"}
                py={15}
                fontWeight={"bold"}
              >
                <Text>Normal</Text>
                <Text>Heroic</Text>
                <Text>Mythic</Text>
              </SimpleGrid>
              <Progress
                value={
                  boss.status === BossStatus.NormalCompleted
                    ? 33
                    : boss.status === BossStatus.HeroicCompleted
                    ? 66
                    : boss.status === BossStatus.MythicCompleted
                    ? 100
                    : 3
                }
                colorScheme={
                  boss.status === BossStatus.MythicCompleted ? "green" : "blue"
                }
                hasStripe={
                  boss.status === BossStatus.MythicCompleted ? false : true
                }
                isAnimated={
                  boss.status === BossStatus.MythicCompleted ? false : true
                }
              />
            </Box>
          ))}
        </SimpleGrid>
      ) : null}
    </Box>
  );
};
