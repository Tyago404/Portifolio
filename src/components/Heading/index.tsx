type HeadingProps = {
  text: string;
};

export function Heading({ text }: HeadingProps) {
  return (
    <h1 className="text-4xl  font-bold -tracking-[2px] brightness-90">
      {text}
    </h1>
  );
}
