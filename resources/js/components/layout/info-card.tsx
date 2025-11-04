import { Icon } from "@iconify/react";

interface InfoCardProps {
  badge_title?: string;
  card_image?: string;
  title?: string;
  description?: string;
  reverse?: boolean;
  centered?: boolean;
  info?: {title?: string, details?: string}[];
}

export default function InfoCard({
  badge_title,
  title,
  description,
  reverse,
  card_image,
  centered,
  info
}: InfoCardProps) {
  return (
    <section className="mx-auto w-full max-w-7xl my-10 md:my-20 px-4 xl:px-0">
      <div
        className={`bg-white rounded-2xl p-5 sm:p-8 md:p-14
        flex flex-col-reverse ${reverse ? "md:flex-row-reverse" : "md:flex-row"}
        ${
          centered
            ? "items-center md:items-center"
            : "items-start md:items-start"
        }
        gap-6 md:gap-8`}
      >
        <div className="w-full md:w-1/2 flex justify-center items-center">
          <img
            src={card_image}
            alt={title ?? "Info card image"}
            className="w-full h-auto max-h-72 md:max-h-[420px] object-contain"
            loading="lazy"
          />
        </div>

        <div className="w-full md:w-1/2 mb-2 md:mb-4">
          <div className="flex items-center gap-2 border border-gray-200 bg-white rounded-full w-max p-1 pr-3 shadow-sm/4 inset-shadow-md">
            <div className="w-6 h-6 rounded-full flex items-center justify-center bg-shine">
              <Icon icon="gg:loadbar-doc" className="w-4 h-4 text-white" />
            </div>
            <span className="text-xs sm:text-sm text-gray-600">
              {badge_title}
            </span>
          </div>

          <h3 className="text-2xl sm:text-3xl font-medium text-prime mt-4 mb-3 md:mb-4">
            {title}
          </h3>

          <div className="text-sm md:text-base font-light">
            <p>
              {description}
            </p>
            {info && info.map((item, index) => (
              <p key={index} className="mt-4">
                <span className="text-primary font-medium">{item.title} </span>
                {item.details}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
