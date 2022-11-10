import { Container } from "@chakra-ui/react";
import { Layout } from "components/Layout";
import { StreamerList } from "components/StreamerList";
import { GetStaticProps } from "next";
import { Streamer } from "lib/types";

export default function Streams({ streamers }: { streamers: Streamer[] }) {
  return (
    <Layout
      pageHeader
      pageHeaderWithCTAProps={{
        title: "Our Streamers",
        highlightQuery: "Our",
        description:
          "From high-end PvE content to casual PvP, we have it all. Check out our streamers below.",
      }}
    >
      <Container centerContent></Container>
      <StreamerList title="Riptide Streamers" streamers={streamers} />
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const streamers: Streamer[] = [
    {
      name: "Jayk34",
      twitchUsername: "jayk34",
      avatarSrc:
        "/images/6c4f8978-cdd7-4c91-9cbd-ece7d30f6f65-profile_image-70x70.png",
    },
    {
      name: "silverfox_nl",
      twitchUsername: "silverfox_nl",
      avatarSrc:
        "/images/331205b6-219c-4219-95cf-cfdf5e180409-profile_image-70x70.png",
    },
    {
      name: "Aleinyy",
      twitchUsername: "aleinyy",
      avatarSrc:
        "/images/e0ee7dd3-4ca2-4dd7-8e6a-3d91b636242c-profile_image-70x70.png",
    },
  ];
  return {
    props: {
      streamers,
    },
  };
};
