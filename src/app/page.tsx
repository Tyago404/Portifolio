import { About } from "@/components/About";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Languages } from "@/components/Languages";
import { MainContainer } from "@/components/MainContainer";
import { MyProjects } from "@/components/MyProjects";
import { Skills } from "@/components/Skills";

export default function Home() {
  return (
    <>
      <video
        className="brightness-25 w-full object-cover fixed -z-10"
        src="/videos/headerVideo.mov"
        autoPlay
        loop
        muted
      ></video>
      <MainContainer>
        <Header />
        <Languages />
        <Skills />
        <MyProjects />
        <About />
        <Footer />
      </MainContainer>
    </>
  );
}
