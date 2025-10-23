import { Header } from "@/components/Header";
import { MainContainer } from "@/components/MainContainer";

export default function Home() {
  return (
    <>
      <video
        className="brightness-50 w-full h-170 object-cover fixed -z-10"
        src="/videos/headerVideo.mov"
        autoPlay
        loop
        muted
      ></video>
      <MainContainer>
        <Header />
      </MainContainer>
    </>
  );
}
