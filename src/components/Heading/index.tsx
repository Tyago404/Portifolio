import clsx from "clsx";

type HeadingProps = {
  text: string;
  as: 'h1'|'h2'
};

export function Heading({text, as:Tag  = "h1"}:HeadingProps) {
  const headingStyles = {
    h1:"text-4xl  font-bold brightness-90",
    h2:" font-[300] brightness-80 ",
  }

  return <Tag className={clsx(headingStyles[Tag],)}>{text}</Tag>
}
