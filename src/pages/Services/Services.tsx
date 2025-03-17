import PageHeader from "@/components/Header/Header";
import OurCommitment from "@/components/OurCommitment/OurCommitment";
import OurServices from "@/components/OurServices/OurServices";

const Services = () => {
  return (
    <div>
      <PageHeader
        image="images/header4.jpg"
        title="Our Services"
        quote="Our comprehensive range of services designed to meet your dental and ENT imaging needs."
      />
      {/*Our Services*/}
      <OurServices />

      {/*Our Commitment*/}
      <OurCommitment />
    </div>
  );
};

export default Services;
