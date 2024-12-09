export default function HelpFooter() {
    const links = ['FAQ', 'Term & Condition', 'Reporting', 'Documentation', 'Support Policy', 'Privacy'];
  
    return (
      <div className="w-full max-w-xs lg:max-w-sm mx-auto">
        <h3 className="text-lg md:text-xl font-bold mb-6 text-center lg:text-left">
          Help?
        </h3>
        <ul className="text-sm md:text-base leading-6 flex flex-col gap-3 lg:gap-4">
          {links.map((link) => (
            <li key={link} className="mb-2">
              <a
                href="../FAQ"
                className="hover:text-[#FF9F0D] transition duration-300 text-center lg:text-left"
              >
                {link}
              </a>
            </li>
          ))}
        </ul>
      </div>
    );
  }
  