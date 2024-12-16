export default function NewsletterSection() {
    return (
      <div className="w-full max-w-7xl mx-auto text-center mb-12 px-4 flex flex-col lg:flex-row items-center gap-6 lg:gap-16">
        {/* Text Section */}
        <div className="mb-6 lg:mb-0 max-w-xs md:max-w-md">
          <h2 className="text-lg md:text-xl lg:text-2xl font-bold mb-4">
            <span className="text-[#FF9F0D]">Still</span> You Need Our Support?
          </h2>
          <p className="text-xs md:text-sm lg:text-base">
            Dont wait make a smart & logical quote here. Its pretty easy.
          </p>
        </div>
  
        {/* Form Section */}
        <form className="w-full max-w-xs md:max-w-sm flex flex-col sm:flex-row">
          <input
            type="email"
            placeholder="Enter Your Email"
            className="flex-grow bg-[#FF9F0D] text-white placeholder-white placeholder-opacity-60 px-4 py-2 rounded-t-md sm:rounded-t-none sm:rounded-l-md focus:outline-none text-xs md:text-sm"
          />
          <button
            type="submit"
            className="bg-white text-[#FF9F0D] px-4 py-2 rounded-b-md sm:rounded-b-none sm:rounded-r-md font-semibold hover:bg-[#FF9F0D] hover:text-white transition duration-300 text-xs md:text-sm"
          >
            Subscribe
          </button>
        </form>
      </div>
    );
  }
  
  
  