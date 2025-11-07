import { Icon } from '@iconify/react';
import { usePage, Link } from '@inertiajs/react';
import { useFooterNavigation } from '@/components/NavigationProvider';

export default function Footer() {
  const { branding } = usePage().props as {
    branding?: { logo?: { url?: string; alt?: string } };
  };

  const footerNav = useFooterNavigation();
  const logoUrl = branding?.logo?.url;
  const logoAlt = branding?.logo?.alt || 'Logo';

  // Categorize navigation items
  const pagesItems = footerNav?.tree?.filter((item: any) => {
    const title = item.title?.toLowerCase() || '';
    return ['about', 'docs', 'raise', 'announcements', 'status', 'contact'].some(keyword => 
      title.includes(keyword)
    );
  }) || [];

  const privacyItems = footerNav?.tree?.filter((item: any) => {
    const title = item.title?.toLowerCase() || '';
    return ['privacy', 'accessibility', 'cookies', 'data', 'ferpa', 'gdpr', 'compliance'].some(keyword => 
      title.includes(keyword)
    );
  }) || [];

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
              {pagesItems.map((item: any) => {
                const isExternal = item.url?.startsWith('http');
                const Component = isExternal ? 'a' : Link;
                const linkProps = isExternal 
                  ? { target: '_blank', rel: 'noopener noreferrer' }
                  : {};

                return (
                  <li key={item.id}>
                    <Component
                      href={item.url || '#'}
                      {...linkProps}
                      className="hover:text-primary text-sm font-light text-gray-600 transition-colors md:text-base"
                    >
                      {item.title}
                    </Component>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Privacy Column */}
          <div>
            <h3 className="text-prime mb-4 text-[2rem] font-[600] max-sm:text-2xl">
              Privacy
            </h3>
            <ul className="space-y-3">
              {privacyItems.map((item: any) => {
                const isExternal = item.url?.startsWith('http');
                const Component = isExternal ? 'a' : Link;
                const linkProps = isExternal 
                  ? { target: '_blank', rel: 'noopener noreferrer' }
                  : {};

                return (
                  <li key={item.id}>
                    <Component
                      href={item.url || '#'}
                      {...linkProps}
                      className="hover:text-primary text-sm font-light text-gray-600 transition-colors md:text-base"
                    >
                      {item.title}
                    </Component>
                  </li>
                );
              })}
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
            © 2014-{new Date().getFullYear()} ExamLock. All rights reserved.
          </p>
          <div className="mt-4 flex items-center gap-2 md:mt-0">
            <span className="text-sm text-gray-600">
              Powered by
            </span>
            <a href="https://examroom.ai" target="_blank" rel="noopener noreferrer">
              <img src="/storage/examroom.svg" alt="examroom logo" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
