import {
  Box,
  Button,
  ButtonGroup,
  Container,
  Flex,
  HStack,
  IconButton,
  useBreakpointValue,
  useColorModeValue,
} from "@chakra-ui/react";
import * as React from "react";
import { Logo } from "./Logo";
import { useNavbar } from "./useNavbar";
import { FiMenu } from "react-icons/fi";
import Link from "next/link";

const pages: { title: string; url: string }[] = [
  { title: "Teams", url: "/teams" },
  { title: "Streams", url: "/streams" },
  { title: "Raiding", url: "/raiding" },
  { title: "Blog", url: "/blog" },
];

export const Navbar: React.FC<{}> = () => {
  const { rootProps } = useNavbar();
  const isDesktop = useBreakpointValue({ base: false, lg: true });

  return (
    <Box
      as="nav"
      role="navigation"
      position="sticky"
      top="0"
      zIndex="docked"
      bg="bg-surface"
      boxShadow={useColorModeValue("sm", "sm-dark")}
      {...rootProps}
    >
      <Container py={{ base: "4", lg: "5" }}>
        <HStack spacing="10" justify="space-between">
          <Logo />
          {isDesktop ? (
            <Flex justify="space-between" flex="1">
              <ButtonGroup variant="link" spacing="8">
                {pages.map((item) => (
                  <Link href={item.url} key={item.url} legacyBehavior>
                    <Button as="a">{item.title}</Button>
                  </Link>
                ))}
              </ButtonGroup>
              <HStack spacing="3">
                <Button variant="ghost">Sign in</Button>
                <Button variant="primary">Sign up</Button>
              </HStack>
            </Flex>
          ) : (
            <IconButton
              variant="ghost"
              icon={<FiMenu fontSize="1.25rem" />}
              aria-label="Open Menu"
            />
          )}
        </HStack>
      </Container>
    </Box>
  );
};
