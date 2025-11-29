import clsx from "clsx";

type MainContainerProps = {
  children: React.ReactNode;
};

export function MainContainer({ children }: MainContainerProps) {
  return (
    <div className={clsx(
      "max-w-full lg:p-16 mx-auto lg:max-w-[1200px]",
      "p-10",
      "flex flex-col"
      )}>{children}</div>
  );
}
