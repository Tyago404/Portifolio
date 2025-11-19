import clsx from "clsx";

type HeadingProps = {
  text: string;
  as: "h1" | "h2" | "h3";
  id?: string;
};

export function Heading({ text, as: Tag = "h1", id }: HeadingProps) {
  const commonclasses = "font-bold brightness-90 m-6 text-center md:text-start";

  const headingStyles = {
    h1: `text-4xl  ${commonclasses}`,
    h2: `text-2xl ${commonclasses}`,
    h3: "font-[300] text-white",
  };

  return (
    <Tag id={id} className={clsx(headingStyles[Tag])}>
      {text}
    </Tag>
  );
}
