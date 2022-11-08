import { Box, BoxProps } from "@chakra-ui/react";
import * as React from "react";

export const Placeholder: React.FC<BoxProps> = (props) => (
  <Box role="presentation" py="3" px="4" color="on-accent" {...props} />
);
