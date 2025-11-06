import { Icon } from '@iconify/react';
import React from 'react';

// Types matching the provided JSON structure
interface StandardsInfoItem {
  id?: string;
  title?: string;
  listing?: string[];
  type?: string;
  enabled?: boolean;
}

interface StandardsSectionProps {
  id?: string;
  type?: string;
  enabled?: boolean;
  badge_text?: string;
  title?: string;
  description?: string;
  info?: StandardsInfoItem[];
}

export default function StandardsCard({ badge_text, title, description, info }: StandardsSectionProps) {
  const visibleInfo = (info ?? []).filter((i) => i?.enabled !== false);

  return (
    <section className="mx-auto w-full max-w-7xl my-10 md:my-20 px-4 xl:px-0">
      <div className="bg-white rounded-2xl py-4 md:py-8 sm:py-12 px-4 sm:p-8 lg:p-16">
        <div className="flex flex-col items-center text-center">
          <div className="flex items-center gap-2 border border-gray-200 bg-white rounded-full w-max p-1 pr-3 shadow-sm/4 inset-shadow-md">
            <div className="w-6 h-6 rounded-full flex items-center justify-center bg-shine">
              <Icon icon="gg:loadbar-doc" className="w-4 h-4 text-white" />
            </div>
            <span className="text-sm text-gray-600">{badge_text ?? 'Standards'}</span>
          </div>

          <h3 className="text-2xl sm:text-3xl font-medium text-prime mt-4 mb-3">
            {title ?? 'Standards-Aligned by Design'}
          </h3>
          <p className="max-w-3xl text-sm sm:text-base">{description ?? 'Easily tag questions with national, state, or custom standards—including Common Core, NGSS, AP, ACT, and more.'}</p>
        </div>

        <div className="mt-8 sm:mt-10 grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-10 items-start">
          <div className="space-y-6 sm:space-y-8">
            {visibleInfo.length > 0 ? (
              visibleInfo.map((item) => (
                <div key={item.id ?? item.title} className="p-4 sm:p-5 bg-white rounded-lg w-full border-1">
                  <h6 className="text-prime md:text-md sm:text-xl">{item.title}</h6>
                  {item.listing && item.listing.length > 0 && (
                    <ul className="text-sm md:text-base font-light list-disc list-outside pl-5 sm:pl-6 mt-3 sm:mt-4 space-y-2">
                      {item.listing.map((li, idx) => (
                        <li key={idx}>{li}</li>
                      ))}
                    </ul>
                  )}
                </div>
              ))
            ) : (
              // Fallback content if no info provided
              <>
                No standards information available.
              </>
            )}
          </div>

          <div className="bg-[#F9FAFB] rounded-lg border-1 p-4 sm:p-6 flex items-center justify-center">
            <img src="/storage/products/standards.webp" alt="Standards Aligned" className="w-full max-w-[520px] h-auto object-contain" />
          </div>
        </div>
      </div>
    </section>
  );
}
