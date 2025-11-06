import { Icon } from '@iconify/react';

interface IntelligentMonitoringProps {
    badge_text?: string;
    title?: string;
    details?: [
        { heading?: string; para?: string }
    ];
}

export default function IntelligentMonitoring({ badge_text , title, details }: IntelligentMonitoringProps) {
  return (
    <section className="mx-auto w-full max-w-7xl my-10 md:my-20 px-4 xl:px-0">
        <div className="flex flex-col gap-4 justify-center items-center bg-white font-light p-6 sm:p-8 md:p-11 w-full rounded-3xl shadow-lg/1 max-w-7xl mx-auto my-10 md:my-20">
          <div className="flex items-center gap-2 border border-gray-200 bg-white shadow-lg rounded-full w-max p-1 pr-3 py-1">
            <div className="w-6 h-6 rounded-full flex items-center justify-center bg-shine">
              <Icon icon="gg:loadbar-doc" className="w-4 h-4 text-white" />
            </div>
            <span className="text-sm text-gray-600">
              {badge_text}
            </span>
          </div>
          <h4 className="text-prime font-medium text-2xl sm:text-3xl md:text-4xl mb-2 text-center">
            {title}
          </h4>
          <div className="flex flex-col md:flex-row items-start gap-6 md:gap-8 w-full">
            <img
              className="w-full md:w-1/2 md:max-w-[520px] rounded-2xl border-1 p-4 bg-neutral-100/50 object-contain"
              src="/storage/products/intelligent-monitoring.webp"
              alt="intelligent monitoring"
            />
            <div className="flex flex-col gap-4 w-full md:flex-1">
              {details?.map((item, index) => (
                <div key={index}>
                  <h6 className="text-prime md:text-md mb-2 font-medium">
                    {item.heading}
                  </h6>
                  <p className="text-sm md:text-base text-neutral-600">
                    {item.para}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
  )
}
