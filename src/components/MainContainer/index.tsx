import clsx from "clsx";

type MainContainerProps = {
  children: React.ReactNode;
};

export function MainContainer({ children }: MainContainerProps) {
  return (
    <div className={clsx(
      "lg:p-16 mx-auto lg:max-w-[1200px]",
      "flex flex-col"
      )}>{children}</div>
  );
}
