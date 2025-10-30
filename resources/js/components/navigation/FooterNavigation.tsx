import { Icon } from '@iconify/react';
import { usePage } from '@inertiajs/react';

export default function Footer() {
  const { branding } = usePage().props as {
    branding?: { logo?: { url?: string; alt?: string } };
  };

  const logoUrl = branding?.logo?.url;
  const logoAlt = branding?.logo?.alt || 'Logo';

  return (
    <footer className="mt-10 pb-8 md:mt-20">
      <div className="container mx-auto max-w-7xl px-4 xl:px-0">
        <div className="flex flex-wrap justify-between gap-8">
          {/* Logo and Description */}
          <div className="lg:col-span-1">
            <div className="mb-4 flex items-center gap-3">
              <img src={logoUrl} alt={logoAlt} />
            </div>
            <p className="mb-6 max-w-xs text-sm font-light leading-relaxed text-gray-600 md:text-base">
              ExamLock was created to meet the security demands of
              online testing and maintaining test integrity for
              our clients. With a multitude of security measures
              and checks, ExamLock has designed features and
              algorithms to detect and deter cheating and item
              theft.
            </p>
            {/* Social Media Icons */}
            <div className="flex gap-3 text-2xl text-gray-400">
              <Icon icon="mdi:facebook" />
              <Icon icon="ri:twitter-x-fill" />
              <Icon icon="mdi:instagram" />
              <Icon icon="mdi:youtube" />
              <Icon icon="mdi:linkedin" />
            </div>
          </div>

          {/* Pages Column */}
          <div>
            <h3 className="text-prime mb-4 text-[2rem] font-[600] max-sm:text-2xl">
              Pages
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="/about"
                  className="hover:text-primary text-sm font-light text-gray-600 transition-colors md:text-base"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="/docs"
                  className="hover:text-primary text-sm font-light text-gray-600 transition-colors md:text-base"
                >
                  Docs
                </a>
              </li>
              <li>
                <a
                  href="/raise-ticket"
                  className="hover:text-primary text-sm font-light text-gray-600 transition-colors md:text-base"
                >
                  Raise a ticket
                </a>
              </li>
              <li>
                <a
                  href="/announcements"
                  className="hover:text-primary text-sm font-light text-gray-600 transition-colors md:text-base"
                >
                  Announcements
                </a>
              </li>
              <li>
                <a
                  href="/status"
                  className="hover:text-primary text-sm font-light text-gray-600 transition-colors md:text-base"
                >
                  Status Page
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  className="hover:text-primary text-sm font-light text-gray-600 transition-colors md:text-base"
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Privacy Column */}
          <div>
            <h3 className="text-prime mb-4 text-[2rem] font-[600] max-sm:text-2xl">
              Privacy
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="/privacy-policy"
                  className="hover:text-primary text-sm font-light text-gray-600 transition-colors md:text-base"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="/accessibility-statement"
                  className="hover:text-primary text-sm font-light text-gray-600 transition-colors md:text-base"
                >
                  Accessibility Statement
                </a>
              </li>
              <li>
                <a
                  href="/cookies-policy"
                  className="hover:text-primary text-sm font-light text-gray-600 transition-colors md:text-base"
                >
                  Cookies Policy
                </a>
              </li>
              <li>
                <a
                  href="/data-privacy"
                  className="hover:text-primary text-sm font-light text-gray-600 transition-colors md:text-base"
                >
                  Data Privacy
                </a>
              </li>
              <li>
                <a
                  href="/ferpa"
                  className="hover:text-primary text-sm font-light text-gray-600 transition-colors md:text-base"
                >
                  FERPA
                </a>
              </li>
              <li>
                <a
                  href="/gdpr"
                  className="hover:text-primary text-sm font-light text-gray-600 transition-colors md:text-base"
                >
                  GDPR
                </a>
              </li>
              <li>
                <a
                  href="/compliance"
                  className="hover:text-primary text-sm font-light text-gray-600 transition-colors md:text-base"
                >
                  Compliance
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter Subscription */}
          <div className="bg-background flex max-w-sm flex-col justify-between rounded-xl border border-[#E9E9E9] px-6 py-6 lg:w-[24rem]">
            <div>
              <h3 className="mb-4 text-[1.5rem] font-[600] text-gray-900">
                Subscribe Our Weekly Newsletter
              </h3>
              <p className="mb-4 text-sm font-light text-gray-600">
                Regular updates ensure that readers have access
                to fresh perspectives, making Poster a
                must-read.
              </p>
            </div>

            <div className="relative rounded-full bg-white shadow-lg">
              <input
                type="email"
                placeholder="Email address"
                className="focus:ring-accent w-full rounded-full border border-gray-300 px-4 py-3 pr-24 text-sm focus:border-transparent focus:outline-none focus:ring-2"
              />
              <button className="bg-primary absolute bottom-1 right-1 top-1 rounded-full px-4 text-sm text-white transition-colors hover:bg-[#004a87]">
                Subscribe{' '}
                <Icon
                  icon="mdi:arrow-right"
                  className="ml-1 inline-block"
                />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="container mt-12 flex flex-col items-center justify-between border-t border-gray-200 pt-8 md:flex-row">
          <p className="text-sm text-gray-600">
            © 2014-2025 ExamLock. All rights reserved.
          </p>
          <div className="mt-4 flex items-center gap-2 md:mt-0">
            <span className="text-sm text-gray-600">
              Powered by
            </span>
            <img src="/storage/examroom.svg" alt="examroom logo" />
          </div>
        </div>
      </div>
    </footer>
  );
}
