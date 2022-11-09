import Image from "next/image";

export const RaiderIOIcon: React.FC<{}> = () => (
  <Image
    // Route of the image file
    src="/images/raiderio_Icon_WhiteOnBlack.svg"
    // Desired size with correct aspect ratio
    height={20}
    // Desired size with correct aspect ratio
    width={20}
    alt="Raider.io logo"
  />
);
