import {
  Box,
  Button,
  ButtonGroup,
  Container,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  HStack,
  Icon,
  IconButton,
  StackDivider,
  useBreakpointValue,
  useColorModeValue,
  useDisclosure,
  VStack,
} from "@chakra-ui/react";
import * as React from "react";
import { Logo } from "./Logo";
import { useNavbar } from "./useNavbar";
import { FiMenu } from "react-icons/fi";
import Link from "next/link";
import { FaDiscord } from "react-icons/fa";
import { MdClose } from "react-icons/md";

const pages: { title: string; href: string }[] = [
  { title: "Teams", href: "/teams" },
  { title: "Streams", href: "/streams" },
  { title: "Raiding", href: "/raiding" },
  { title: "Blog", href: "/blog" },
];

export const Navbar: React.FC<{}> = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const menuButtonRef = React.useRef<HTMLButtonElement>(null);

  const { rootProps } = useNavbar();
  const isDesktop = useBreakpointValue({ base: false, lg: true });
  const MenuIcon = isOpen ? MdClose : FiMenu;
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
                  <Link href={item.href} key={item.href} legacyBehavior>
                    <Button as="a">{item.title}</Button>
                  </Link>
                ))}
              </ButtonGroup>
              <HStack spacing="3">
                <Button
                  variant="ghost"
                  leftIcon={<FaDiscord />}
                  as="a"
                  href="https://discord.gg/9ceDtmbyRY"
                  target={"_blank"}
                >
                  Discord
                </Button>
                <Button variant="primary">Sign in</Button>
              </HStack>
            </Flex>
          ) : (
            // Mobile menu to toggle the Drawer
            <IconButton
              ref={menuButtonRef}
              variant="ghost"
              icon={<Icon as={MenuIcon} fontSize="1.25rem" />}
              aria-label="Open Menu"
              onClick={onOpen}
            />
          )}
        </HStack>
      </Container>
      {/* Drawer for mobile menu */}
      <Drawer
        placement="left"
        initialFocusRef={menuButtonRef}
        isOpen={isOpen}
        onClose={onClose}
        size="full"
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader padding="0">
            <Flex height="16" align="center" justify="space-between" px="5">
              <Logo />
              <IconButton
                ref={menuButtonRef}
                variant="ghost"
                icon={<Icon as={MenuIcon} fontSize="2xl" />}
                aria-label="Close Menu"
                onClick={onClose}
              />
            </Flex>
          </DrawerHeader>
          <DrawerBody>
            <VStack
              divider={<StackDivider borderColor="gray.200" />}
              spacing={4}
              align="stretch"
            >
              {pages.map((item) => (
                <Link href={item.href} key={item.href}>
                  {item.title}
                </Link>
              ))}
            </VStack>

            <HStack mt="6">
              <Button
                flex="1"
                variant="ghost"
                leftIcon={<FaDiscord />}
                as="a"
                href="https://discord.gg/9ceDtmbyRY"
                target={"_blank"}
              >
                Discord
              </Button>
              <Button flex="1" variant="primary">
                Sign in
              </Button>
            </HStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  );
};
