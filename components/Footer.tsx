import {
  ButtonGroup,
  Container,
  Divider,
  IconButton,
  Stack,
  Text,
} from "@chakra-ui/react";
import * as React from "react";
import { Logo } from "./Logo";
import { RaiderIOIcon } from "./RaiderIOIcon";
import { FaGithub, FaYoutube, FaDiscord } from "react-icons/fa";

export const Footer: React.FC<{}> = () => (
  <Container as="footer" role="contentinfo" pb={{ base: "12", md: "16" }}>
    <Divider />
    <Stack spacing={{ base: "4", md: "5" }} pt={{ base: "12", md: "16" }}>
      <Stack justify="space-between" direction="row" align="center">
        <Logo />
        <ButtonGroup variant="ghost">
          <IconButton
            as="a"
            target="_blank"
            href="https://discord.gg/9ceDtmbyRY"
            aria-label="Discord"
            icon={<FaDiscord fontSize="1.25rem" />}
          />
          <IconButton
            as="a"
            target="_blank"
            href="https://www.youtube.com/channel/UC8pgogboUGDP92khOqJQ_zA"
            aria-label="Youtube"
            icon={<FaYoutube fontSize="1.25rem" />}
          />
          <IconButton
            as="a"
            target="_blank"
            href="https://github.com/alainfonhof/riptide"
            aria-label="GitHub"
            icon={<FaGithub fontSize="1.25rem" />}
          />
          <IconButton
            as="a"
            target="_blank"
            href="https://raider.io/guilds/eu/draenor/Riptide"
            aria-label="Raider.io"
            icon={<RaiderIOIcon />}
          />
        </ButtonGroup>
      </Stack>
      <Text fontSize="sm" color="subtle">
        &copy; {new Date().getFullYear()} Riptide. All rights reserved.
      </Text>
    </Stack>
  </Container>
);
