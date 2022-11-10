import { Divider, Flex } from "@chakra-ui/react";
import * as React from "react";
import { Footer } from "./Footer";
import { Main } from "./Main";
import { Navbar } from "./Navbar";
import { HeroWithImageBackground } from "./HeroWithImageBackground";
import Head from "next/head";
import { PageHeaderWithCTA } from "./PageHeaderWithCTA";

type LayoutProps = {
  children: React.ReactNode;
  heroImage?: boolean;
  pageHeader?: boolean;
};

export const Layout: React.FC<LayoutProps> = ({
  children,
  heroImage,
  pageHeader,
}) => {
  return (
    <Flex direction="column" flex="1">
      <Head>
        <title>Riptide | Nederlandse WoW guild</title>
        <meta
          name="description"
          content="De beste Nederlandse WoW guild. Speel jij op Draenor, kom je uit Nederland of België en ben je op zoek naar een toffe mythic raiding guild? Join dan Riptide!"
        />
        <link rel="icon" href="/images/favicon-16x16.png" />
      </Head>
      <Navbar />
      {heroImage ? (
        <HeroWithImageBackground />
      ) : pageHeader ? (
        <PageHeaderWithCTA />
      ) : (
        <></>
      )}

      <Main>{children}</Main>
      <Footer />
    </Flex>
  );
};
