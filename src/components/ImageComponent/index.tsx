import Image from "next/image";

type ImageComponentProps = {
  alt:string,
  src:string,
  width?:number,
  height?:number
}

export function ImageComponent({alt, src, width=180, height=180}:ImageComponentProps) {
  const fullSrc = `/images/${src}`
  return  <Image priority alt={alt} src={fullSrc} width={width} height={height}  className="w-40 h-auto" />

}
