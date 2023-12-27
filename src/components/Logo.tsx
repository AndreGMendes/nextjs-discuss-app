import Image from "next/image";
import LogoImage from "@/images/Traca Logo.png"

const Logo = () => {
  return (
    <div className="pr-4">
      <Image
        src={LogoImage}
        alt="Logo Image"
        width={40}
        height={30}
      ></Image>
    </div>
  );
};

export default Logo;
