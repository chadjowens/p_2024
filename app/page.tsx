// import Image from 'next/image'
import Intro from '@/components/intro';
import SectionDivider from '@/components/section-divider';
import About from '@/components/about';
import Projects from '@/components/projects';
import Skills from '@/components/skills';
import Experience from '@/components/experience';
import Contact from '@/components/contact';
// import Footer from '@/components/footer';
// import Head from 'next/head';


export default function Home() {
  return (
    <>
      {/* <Head>
        <script src="three.r134.min.js"></script>
        <script src="vanta.birds.min.js"></script>
      </Head> */}
      <main className="flex flex-col items-center px-4">
        <Intro />
        <SectionDivider />
        <About />
        <Projects />
        <Skills />
        <Experience />
        <Contact />
        {/* <Footer /> */}

      </main>


    </>
  );
}
