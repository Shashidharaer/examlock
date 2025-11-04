import { Icon } from "@iconify/react";

export default function Footer() {
  return (
    <footer className="mt-10 md:mt-20 pb-8">
      <div className="container mx-auto px-4 xl:px-0 max-w-7xl">
        <div className="flex justify-between gap-8 flex-wrap">
          {/* Logo and Description */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <img src="/examlock.svg" alt="examlock logo" />
            </div>
            <p className="text-gray-600 text-sm md:text-base mb-6 font-light leading-relaxed max-w-xs">
              ExamLock was created to meet the security demands of online
              testing and maintaining test integrity for our clients. With a
              multitude of security measures and checks, ExamLock has designed
              features and algorithms to detect and deter cheating and item
              theft.
            </p>
            {/* Social Media Icons */}
            <div className="flex gap-3 text-gray-400 text-2xl">
              <Icon icon="mdi:facebook" />
              <Icon icon="ri:twitter-x-fill" />
              <Icon icon="mdi:instagram" />
              <Icon icon="mdi:youtube" />
              <Icon icon="mdi:linkedin" />
            </div>
          </div>

          {/* Pages Column */}
          <div>
            <h3 className="max-sm:text-2xl text-[2rem] font-[600] text-prime mb-4">
              Pages
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="/about"
                  className="text-sm md:text-base font-light text-gray-600 hover:text-primary transition-colors"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="/docs"
                  className="text-sm md:text-base font-light text-gray-600 hover:text-primary transition-colors"
                >
                  Docs
                </a>
              </li>
              <li>
                <a
                  href="/raise-ticket"
                  className="text-sm md:text-base font-light text-gray-600 hover:text-primary transition-colors"
                >
                  Raise a ticket
                </a>
              </li>
              <li>
                <a
                  href="/announcements"
                  className="text-sm md:text-base font-light text-gray-600 hover:text-primary transition-colors"
                >
                  Announcements
                </a>
              </li>
              <li>
                <a
                  href="/status"
                  className="text-sm md:text-base font-light text-gray-600 hover:text-primary transition-colors"
                >
                  Status Page
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  className="text-sm md:text-base font-light text-gray-600 hover:text-primary transition-colors"
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Privacy Column */}
          <div>
            <h3 className="max-sm:text-2xl text-[2rem] font-[600] text-prime mb-4">
              Privacy
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="/privacy-policy"
                  className="text-sm md:text-base font-light text-gray-600 hover:text-primary transition-colors"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="/accessibility-statement"
                  className="text-sm md:text-base font-light text-gray-600 hover:text-primary transition-colors"
                >
                  Accessibility Statement
                </a>
              </li>
              <li>
                <a
                  href="/cookies-policy"
                  className="text-sm md:text-base font-light text-gray-600 hover:text-primary transition-colors"
                >
                  Cookies Policy
                </a>
              </li>
              <li>
                <a
                  href="/data-privacy"
                  className="text-sm md:text-base font-light text-gray-600 hover:text-primary transition-colors"
                >
                  Data Privacy
                </a>
              </li>
              <li>
                <a
                  href="/ferpa"
                  className="text-sm md:text-base font-light text-gray-600 hover:text-primary transition-colors"
                >
                  FERPA
                </a>
              </li>
              <li>
                <a
                  href="/gdpr"
                  className="text-sm md:text-base font-light text-gray-600 hover:text-primary transition-colors"
                >
                  GDPR
                </a>
              </li>
              <li>
                <a
                  href="/compliance"
                  className="text-sm md:text-base font-light text-gray-600 hover:text-primary transition-colors"
                >
                  Compliance
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter Subscription */}
          <div className="flex flex-col justify-between bg-background border border-[#E9E9E9] px-6 py-6 rounded-xl max-w-sm lg:w-[24rem]">
            <div>
              <h3 className="text-[1.5rem] font-[600] text-gray-900 mb-4">
                Subscribe Our Weekly Newsletter
              </h3>
              <p className="text-gray-600 text-sm mb-4 font-light">
                Regular updates ensure that readers have access to fresh
                perspectives, making Poster a must-read.
              </p>
            </div>

            <div className="bg-white relative shadow-lg rounded-full">
              <input
                type="email"
                placeholder="Email address"
                className="w-full px-4 py-3 pr-24 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent text-sm"
              />
              <button className="absolute right-1 top-1 bottom-1 bg-primary hover:bg-[#004a87] text-white px-4 rounded-full text-sm transition-colors">
                Subscribe{" "}
                <Icon icon="mdi:arrow-right" className="inline-block ml-1" />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="container border-t border-gray-200 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-600 text-sm">
            © 2014-2025 ExamLock. All rights reserved.
          </p>
          <div className="flex items-center gap-2 mt-4 md:mt-0">
            <span className="text-gray-600 text-sm">Powered by</span>
            <img src="/examroom.svg" alt="examroom logo" />
          </div>
        </div>
      </div>
    </footer>
  );
}
