import { Clock } from "lucide-react";

export default function AboutFooter() {
  return (
    <div className="w-full max-w-xs sm:max-w-sm lg:max-w-md mx-auto lg:mx-0 px-4">
      {/* About Us Heading */}
      <h3 className="text-lg md:text-xl font-bold mb-4 md:mb-8 text-center lg:text-left">
        About Us.
      </h3>

      {/* About Us Description */}
      <p className="mb-4 md:mb-6 text-sm md:text-base leading-relaxed text-center lg:text-left">
        Corporate clients and leisure travelers have been relying on Groundlink
        for dependable, safe, and professional chauffeured car service in major
        cities across the world.
      </p>

      {/* Opening Hours Section */}
      <div className="flex flex-col lg:flex-row items-center justify-center gap-6">
        {/* Clock Icon */}
        <div className="bg-[#FF9F0D] p-3 rounded mb-4 lg:mb-0 w-16 h-16 flex justify-center items-center">
          <Clock className="text-white w-8 h-8" />
        </div>

        {/* Hours Text */}
        <div className="text-center lg:text-left">
          <h4 className="font-semibold text-base md:text-lg">Opening Hours</h4>
          <p className="text-xs md:text-sm">Mon - Sat (8.00 - 6.00)</p>
          <p className="text-xs md:text-sm">Sunday - Closed</p>
        </div>
      </div>
    </div>
  );
}


