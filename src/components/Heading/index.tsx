import clsx from "clsx";

type HeadingProps = {
  text: string;
  as: 'h1'|'h2'|'h3';
};

export function Heading({text, as:Tag  = "h1"}:HeadingProps) {
  const commonclasses = 'font-bold brightness-90 m-6'

  const headingStyles = {
    h1:`text-4xl  ${commonclasses}`,
    h2:`text-2xl ${commonclasses}`,
    h3:"font-[300]",
  }


  return <Tag className={clsx(headingStyles[Tag])}>{text}</Tag>
}
