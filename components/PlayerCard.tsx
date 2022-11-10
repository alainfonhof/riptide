import { Center, Flex, useColorModeValue, WrapItem } from "@chakra-ui/react";
import Link from "next/link";
import * as React from "react";
import styles from "./playercard.module.css";
import { Player } from "lib/types";

export const PlayerCard: React.FC<Player> = ({ name, wowClass }) => (
  <Link href="/profile-page">
    <WrapItem>
      <Center
        h={100}
        w={100}
        borderRadius={4}
        boxShadow="0 3px 6px rgba(0,0,0,0.16),0 3px 6px rgba(0,0,0,0.23)"
        _hover={{
          boxShadow:
            "0 14px 28px rgba(0,0,0,0.25),0 10px 10px rgba(0,0,0,0.22)",
          transition: "all 0.5s",
        }}
        className={styles[wowClass.replaceAll(" ", "")]}
        p={1}
        textShadow="1px 0 0 #000,0 -1px 0 #000,0 1px 0 #000,-1px 0 0 #000"
        textColor={useColorModeValue("white", "white")}
        fontSize={12}
        textTransform="uppercase"
        fontWeight={500}
        wordBreak="break-word"
      >
        {name}
      </Center>
    </WrapItem>
  </Link>
);
