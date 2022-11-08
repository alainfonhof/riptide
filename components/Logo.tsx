import Image from "next/image";

export const Logo: React.FC<{}> = () => (
  <Image
    // Route of the image file
    src="/images/riptide-logo-with-text.png"
    // Desired size with correct aspect ratio
    height={40}
    // Desired size with correct aspect ratio
    width={163}
    alt="Riptide logo"
    style={{
      maxWidth: "100%",
      height: "auto",
    }}
  />
);
