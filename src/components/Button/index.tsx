import clsx from "clsx";

type ButtonProps = {
  text: string;
  classname?: string;
};

export function Button({ text, classname }: ButtonProps) {
  return (
    <button
      className={clsx(
        "bg-[var(--color-secoundary)] text-black rounded-full p-2 px-4",
        "cursor-pointer hover:brightness-90 hover:scale-102 transition duration-250",
        "text-sm",
        classname
      )}
    >
      {text}
    </button>
  );
}
