interface TeamMember {
    image: string;
    name: string;
    position: string;
    education: string;
  }
  
  const teamMembers: TeamMember[] = [
    {
      image: "images/kamakshi.jpg",
      name: "Dr. Kamakshi Raina",
      position: "Chief Radiologist",
      education: "BDS, MDS (Oral Medicine & Radiology), FAGE (Fellow of Academy of General Education)",
    },
    {
      image: "/images/kapilsir.jpeg",
      name: "Dr. Kapil Kishan Raina",
      position: "Senior Consultant",
      education: "BDS, MD (Alt. Med) | Cert in Oral Implantology",
    },
  ];
  
  const OurTeam = () => {
    return (
      <section className="py-12 bg-white align-center justify-center">
        <div className="container mx-auto px-4 sm:px-6 lg:px-12 text-center">
          {/* Heading */}
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
            Our <span className="text-primaryBlue">Team</span>
          </h2>
          <p className="text-lg text-gray-600 mt-2">
            Meet our team of experts dedicated to precise and advanced dental imaging.
          </p>
  
          {/* Team Cards */}
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="bg-primaryBlue text-white p-6 rounded-lg shadow-md flex flex-col items-center"
              >
                {/* Image */}
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-32 h-32 rounded-full object-cover border-4 border-white"
                />
  
                {/* Name & Position */}
                <h3 className="text-xl font-semibold mt-4">{member.name}</h3>
                <p className="text-sm font-light">{member.position}</p>
  
                {/* Orange Bar */}
                <div className="w-16 h-1 bg-accentOrange my-3"></div>
  
                {/* Education */}
                <p className="text-sm text-center">{member.education}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default OurTeam;
  