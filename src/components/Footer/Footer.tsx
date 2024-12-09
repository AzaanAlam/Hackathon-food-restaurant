import AboutUsSection from "./AboutFooter";
import HelpSection from "./HelpFooter";
import NewsletterSection from "./NewsLetterFooter";
import RecentPostsSection from "./RecentPostFooter";
import SocialIcons from "./SocialMediaFooter";
import UsefulLinksSection from "./UseFullLinksFooter";

export default function Footer() {
  return (
    <footer className="bg-[#0D0D0D] text-white">
      {/* Newsletter Section */}
      <div className="container mx-auto px-4 py-16">
        <NewsletterSection />
        <div className="border-t border-[#FF9F0D] my-8"></div>

        {/* Content Sections */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-[56px]">
          <AboutUsSection />
          <UsefulLinksSection />
          <HelpSection />
          <RecentPostsSection />
        </div>
      </div>

      {/* Bottom Section */}
      <div className="bg-[#4F4F4F] py-8">
        <div className="container mx-auto px-4 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-[16px] leading-6 text-center sm:text-left">
            Copyright © 2022 by Azaan Alam. All Rights Reserved.
          </p>
          <SocialIcons />
        </div>
      </div>
    </footer>
  );
}

