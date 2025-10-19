import clsx from "clsx";

type ParagraphProps = {
  text:string;
  className?:string;
}

export function Paragraph({text, className}:ParagraphProps) {
  return <p className={clsx('text-md ', className)}>{text}</p>
}
