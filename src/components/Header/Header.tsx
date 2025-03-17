interface PageHeaderProps {
  image: string;
  title: string;
  quote: string;
}

const PageHeader: React.FC<PageHeaderProps> = ({ image, title, quote }) => {
  return (
    <div className="relative w-full h-[300px] sm:h-[400px] lg:h-[500px] mb-15">
      {/* Background Image */}
      <img
        src={image}
        alt={title}
        className="w-full h-[90%] object-cover" 
      />

      {/* Overlay Box */}
      <div className="absolute bottom-[-6%] left-1/2 -translate-x-1/2 w-[90%] sm:w-[80%] md:w-[70%] bg-primaryBlue text-white py-6 sm:py-8 px-6 sm:px-10 rounded-lg ">
        <div className="flex items-center">
          {/* Title */}
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold">
            {title}
          </h2>
          {/* Bar on the Right */}
          <div className="w-12 sm:w-16 md:w-20 h-1 bg-accentOrange ml-4"></div>
        </div>

        {/* Quote */}
        <p className="text-sm sm:text-lg mt-2 sm:mt-4 font-light italic">
          "{quote}"
        </p>
      </div>
    </div>
  );
};

export default PageHeader;
