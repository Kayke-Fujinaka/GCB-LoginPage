import Image from "next/image";

export interface LogoProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
}

export const Logo = ({ src, alt, width, height }: LogoProps) => {
  return (
    <div>
      <Image src={src} alt={alt} width={width} height={height} />
    </div>
  );
};
