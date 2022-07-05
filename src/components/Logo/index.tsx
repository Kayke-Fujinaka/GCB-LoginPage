import Image from "next/image";

export interface LogoProps {
  src: string;
  alt: string;
  width: number;
  height?: number;
}

export const Logo = (props: LogoProps) => {
  return (
    <div>
      <Image
        src={props.src}
        alt={props.alt}
        width={props.width}
        height={props.height}
      />
    </div>
  );
};
