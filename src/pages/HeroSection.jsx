import { Helmet } from "react-helmet-async";
import { Typewriter } from "../components/ui/TypeWriter";
import { VelocityScroll } from "../components/ui/VelocitySroll";
import Card from "../components/common/Card";
import FAQ from "../components/common/FAQ";
import ContactForm from "../components/common/ContactForm";
import { ShootingStars } from "../components/ui/ShootingStars";
import { StarsBackground } from "../components/ui/StarsBackground";
import { InteractiveHoverButton } from "../components/ui/InteractiveHoverButton";
import { Link } from "wouter";
import { SparklesText } from "../components/ui/Sparkles";
import { AnimatedTeam } from "../components/ui/Team";
import { MarqueeDemo } from "../components/common/Testimonials";

const team = [
  {
    description:
      "I'm a frontend developer, UI/UX designer, and cybersecurity specialist with a passion for creating visually stunning and functional solutions that communicate effectively.",
    name: "Christian Vergara",
    designation:
      "Frontend Developer, UI/UX Designer & Cybersecurity Specialist",
    src: "/assets/hero/me.webp",
  },
  {
    description:
      "I'm a graphic designer with a passion for creating visually stunning and functional solutions that communicate effectively.",
    name: "Johis Tapia",
    designation: "Graphic Designer",
    src: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    description:
      "I'm a digital marketing specialist with a passion for creating visually stunning and functional solutions that communicate effectively.",
    name: "Sebastian Tapia",
    designation: "Digital Marketing Specialist",
    src: "https://images.unsplash.com/photo-1623582854588-d60de57fa33f?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

const HeroSection = () => {
  return (
    <>
      <Helmet>
        <title>Welcome to LiguaNova | Digital Design & Marketing</title>
        <meta
          name="description"
          content="We create visually stunning and functional design solutions to help brands grow. Explore our work and get in touch!"
        />
        <meta
          name="keywords"
          content="design, marketing, web development, branding, UI/UX, SEO"
        />
        <meta
          property="og:title"
          content="LiguaNova | Digital Design & Marketing"
        />
        <meta
          property="og:description"
          content="Boost your brand with our expert team in web design, marketing, and cybersecurity."
        />
        <meta property="og:image" content="/logos/logo-02-white.svg" />
        <meta property="og:type" content="website" />
        <meta name="robots" content="index, follow" />
      </Helmet>

      <section className="px-4 max-w-7xl mx-auto grid place-items-center gap-8 lg:gap-0 lg:flex lg:justify-between w-full mt-36">
        <div>
          <h1 className="text-white text-center lg:text-start text-5xl md:text-7xl lg:text-8xl font-medium leading-tight">
            HI, WE <br />
            ARE
            <br />
            <Typewriter baseText="LiguaNova" delay={0.5} />
          </h1>
        </div>

        <div className="flex flex-col items-center">
          <img
            src="/logos/logo-02-white.svg"
            alt="LiguaNova Logo"
            className="relative -inset-x-10 w-[300px] h-[300px] lg:w-[500px] lg:h-[500px]"
          />
        </div>
      </section>

      <section className="mt-32 z-10">
        <VelocityScroll className="bg-secondary" />
      </section>

      <section className="px-4 mt-32 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 lg:grid-rows-3 gap-4">
          <div>
            <h1 className="text-6xl">Selected Work.</h1>
            <p className="text-gray-300 mt-4 text-lg">
              Take a look at some of my featured projects where I combine modern
              web technologies with creative design solutions to build engaging
              user experiences.
            </p>
          </div>
          <div className="lg:row-span-2 lg:col-start-1 lg:row-start-2">
            <Card />
          </div>
          <div className="lg:row-span-3 lg:col-start-2 lg:row-start-1">
            <Card />
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-4 mt-4">
          <div>
            <Card />
          </div>
          <div>
            <Card />
          </div>
        </div>

        <div className="flex justify-center mt-8">
          <Link to="/about">
            <InteractiveHoverButton>See More</InteractiveHoverButton>
          </Link>
        </div>
      </section>

      <section className="px-4 mt-32 max-w-7xl mx-auto">
        <h2 className="text-5xl lg:text-6xl mb-6">Our Team</h2>
        <p className="text-3xl lg:text-4xl mb-6 max-w-2xl text-gray-300">
          We are passionate about creating visually stunning and functional
          solutions that communicate effectively.
        </p>
        <AnimatedTeam team={team} />
      </section>

      <section className="px-4 mt-32 max-w-7xl mx-auto">
        <h2 className="text-5xl lg:text-6xl mb-6">Testimonials</h2>
        <p className="text-3xl lg:text-4xl mb-6 max-w-2xl text-gray-300">
          What our clients say about us.
        </p>
        <MarqueeDemo />
      </section>

      <FAQ />

      <section className="px-4 mt-32 bg-secondary text-dark py-20">
        <div className="max-w-7xl mx-auto grid place-items-center gap-8 lg:gap-0 lg:flex lg:justify-between lg:items-center w-full">
          <div>
            <h2 className="font-bold text-5xl lg:text-7xl leading-tight">
              <SparklesText text="LET'S WORK TOGETHER" />
            </h2>
          </div>
          <ContactForm />
        </div>
      </section>

      <ShootingStars />
      <StarsBackground />
    </>
  );
};

export default HeroSection;
