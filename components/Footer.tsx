import { Box, BoxProps, Container } from "@chakra-ui/react";
import * as React from "react";
import { Placeholder } from "./Placeholder";

export const Footer: React.FC<BoxProps> = (props) => (
  <Box as="footer" role="contentinfo" bg="bg-accent" {...props}>
    <Container>
      <Placeholder minH="20">Footer</Placeholder>
    </Container>
  </Box>
);
