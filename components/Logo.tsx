import Image from "next/image";

const ASPECT = 3612 / 567;

interface Props {
  variant?: "light" | "dark";
  className?: string;
}

export default function Logo({ variant = "light", className = "h-7 w-auto" }: Props) {
  const src = variant === "dark" ? "/logo-dark.png" : "/logo-light.png";
  return (
    <Image
      src={src}
      alt="Auriga Ventures"
      width={Math.round(60 * ASPECT)}
      height={60}
      className={className}
      priority
    />
  );
}
