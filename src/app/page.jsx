import LeftSidebar from "@/components/LeftSidebar";
import Hero from "@/components/Hero";
import Education from "@/components/Education";
import WorkHistory from "@/components/WorkHistory";
import Blog from "@/components/Blog";
import AboutMe from "@/components/AboutMe";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Map from "@/components/Map";
import TechStack from "@/components/TechStack";
import Footer from "@/components/Footer";
import MobileNav from "@/components/MobileNav";

export default function Home() {
  return (
    <section>
      <div className="flex flex-col lg:flex-row min-h-screen">
        <div className="hidden lg:block sticky top-0 h-screen z-50">
          <LeftSidebar />
        </div>

        <main className="flex-1 p-6 lg:p-12 overflow-y-auto lg:h-screen scroll-smooth pb-24 lg:pb-12">
          <Hero />
          <AboutMe />
          <Projects />
          <TechStack />
          <WorkHistory />
          <Education />
          {/* <Blog /> */}
          <Contact />
          <Map />
          <Footer />
        </main>

        <MobileNav />
      </div>
    </section>
  );
}
