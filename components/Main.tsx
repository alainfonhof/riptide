import { Container, Flex, FlexProps } from "@chakra-ui/react";
import * as React from "react";

export const Main: React.FC<FlexProps> = (props) => (
  <Flex as="main" role="main" direction="column" flex="1" py="16" {...props}>
    <Container flex="1">{props.children}</Container>
  </Flex>
);
