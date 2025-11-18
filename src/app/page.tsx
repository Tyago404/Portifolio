import { About } from "@/components/About";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Gallery } from "@/components/Gallery";
import { MainContainer } from "@/components/MainContainer";
import { MyProjects } from "@/components/MyProjects";
import { NavBar } from "@/components/Navbar";
import { Skills } from "@/components/Skills";

export default function Home() {
  return (
    <>
      <video
        className="fixed inset-0 w-full h-full object-cover object-[10%_20%] brightness-25 -z-10"
        src="/videos/headerVideo.mov"
        autoPlay
        loop
        muted
      ></video>
      <NavBar />
      <MainContainer>
        <Header />
        <Gallery />
        <Skills />
        <MyProjects />
        <About />
         {/*
        <Footer /> */}
      </MainContainer>
    </>
  );
}
