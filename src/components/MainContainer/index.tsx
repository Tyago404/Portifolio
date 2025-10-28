type MainContainerProps = {
  children: React.ReactNode;
}

export function MainContainer({ children }: MainContainerProps) {
  return(
    <div className="max-w-[1200px] p-12 mx-22 flex flex-col ">
      {children}
    </div>
  )
}
