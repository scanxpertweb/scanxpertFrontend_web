import AboutMain from "@/components/AboutUsMain/AboutMain";
import PageHeader from "@/components/Header/Header";
import MakesUsDifferent from "@/components/MakesUsDifferent/MakesUsDifferent";
import Ourteam from "@/components/OurTeam/Ourteam";
import Testimonials from "@/components/Testimonials/Testimonials";

const AboutUs = () => {
  return (
    <div>
      <PageHeader
        image="images/header3.webp"
        title="About Us"
        quote="Providing exceptional dental imaging services with precision and care."
      />
      {/* About Us Main Section */}
      <AboutMain />
      {/* What makes us different section */}
      <MakesUsDifferent />

      {/* Our Team Section */}
      <Ourteam />

      {/* Customer reviews and feedback section */}
      <Testimonials />
    </div>
  );
};

export default AboutUs;
