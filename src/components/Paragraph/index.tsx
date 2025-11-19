import clsx from "clsx";

type ParagraphProps = {
  text:string;
  className?:string;
}

export function Paragraph({text, className}:ParagraphProps) {
  return <p className={clsx('text-sm opacity-80', className)}>{text}</p>
}
