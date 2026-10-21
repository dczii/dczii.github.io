import Footer from "@z/components/Footer";
import ProjectList from "@z/components/ProjectList";
import About from "@z/components/site/About";
import Contact from "@z/components/site/Contact";
import Experience from "@z/components/site/Experience";
import Header from "@z/components/site/Header";
import Hero from "@z/components/site/Hero";
import SpaceBackdrop from "@z/components/space/SpaceBackdrop";

export default function Home() {
  return (
    <>
      <SpaceBackdrop />
      <Header />
      <main id='main'>
        <Hero />
        <About />
        <ProjectList />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
