interface WhatMakeCardProps {
  icon: string;
  title: string;
  description: string;
  imageSrc: string;
}

export default function WhatMakeCard({
  icon,
  title,
  description,
  imageSrc,
}: WhatMakeCardProps) {
  return (
    <div className="flex flex-col justify-between bg-background rounded-2xl p-6 shadow-sm relative overflow-hidden">
      <div>
        <span className="absolute md:w-85 md:-right-15 -top-2">
          <img
            src="storage/images/dashboard_overlay.webp"
            alt="card element"
            className="w-full"
          />
        </span>
        <div className="z-10 relative w-12 h-12 p-3 bg-white rounded-full flex items-center justify-center mb-6 shadow-sm inset-shadow-md">
          <img src={icon} alt={`icon of ${title}`} />
        </div>
        <h3 className="text-xl font-[600] text-neutral-900 mb-4">{title}</h3>
        <p className="text-sm md:text-basetext-neutral-800 mb-6 font-light">
          {description}
        </p>
      </div>

      <div>
        <img
          src={imageSrc}
          alt={`illustration of ${title}`}
          className="w-full h-auto drop-shadow-2xl/4"
        />
      </div>
    </div>
  );
}
