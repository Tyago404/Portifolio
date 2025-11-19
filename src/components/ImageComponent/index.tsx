import clsx from "clsx";
import Image from "next/image";

type ImageComponentProps = {
  alt: string;
  src: string;
  width?: number;
  height?: number;
  className?: string;
};

export function ImageComponent({
  alt,
  src,
  width = 180,
  height = 180,
  className,
}: ImageComponentProps) {
  const fullSrc = `/images/${src}`;

  return (
    <Image
      priority
      alt={alt}
      src={fullSrc}
      width={width}
      height={height}
      className={clsx("transition-all duration-300 hover:scale-105", className)}
    />
  );
}
