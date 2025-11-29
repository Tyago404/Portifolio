import { About } from "@/components/About";
import { Footer } from "@/components/Footer";
import { MainHeader } from "@/components/MainHeader";
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
        autoPlay
        loop
        muted
        playsInline
        controls={false}
        disablePictureInPicture
        controlsList="nodownload nofullscreen noplaybackrate noremoteplayback"
      >
        <source src="/videos/headerVideo.mp4" type="video/mp4" />
        <source src="/videos/headerVideo.mov" type="video/quicktime" />
      </video>
      <NavBar />
      <MainContainer>
        <MainHeader />
        <Gallery />
        <Skills />
        <MyProjects />
        <About />
        <Footer />
      </MainContainer>
    </>
  );
}
