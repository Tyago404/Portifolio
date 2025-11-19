import { ImageComponent } from "../ImageComponent";

export function Gallery() {
  const icons = [
    "javascript.png",
    "typescript.png",
    "react.png",
    "node.png",
    "nextjs.png",
    "tailwindcss.png",
  ];

  return (
    <div className="py-10 flex justify-center ">
      <div className="grid grid-cols-2 md:grid-cols-6 gap-2 brightness-150">
        {icons.map((img, index) => (
          <ImageComponent
            key={index}
            alt={img.replace(".png", "")}
            src={img}
            className="w-35 opacity-80 hover:opacity-100"
          />
        ))}
      </div>
    </div>
  );
}
