import { ImageComponent } from "../ImageComponent";

export function Languages() {
  return(
     <div className="flex py-10 brightness-150 items-center">
      <ImageComponent alt="JavaScript" src="javascript.png" />
      <ImageComponent alt="JavaScript" src="typescript.png" />
      <ImageComponent alt="React" src="react.png" />
      <ImageComponent alt="Node" src="node.png" />
      <ImageComponent alt="nextjs" src="nextjs.png" />
      <ImageComponent alt="tailwindcss" src="tailwindcss.png" />
     </div>
  )
}
