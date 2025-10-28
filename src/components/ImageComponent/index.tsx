import Image from "next/image";

type ImageComponentProps = {
  alt:string,
  src:string,
  width?:number,
  height?:number
}

export function ImageComponent({alt, src, width=135, height=150}:ImageComponentProps) {
  const fullSrc = `/images/${src}`
  return  <Image alt={alt} src={fullSrc} width={width} height={height} />

}
