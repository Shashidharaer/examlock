import { Icon } from '@iconify/react';

interface InfoCardProps {
    badge_title?: string;
    card_image?: string;
    title?: string;
    description?: string;
    reverse?: boolean;
    centered?: boolean;
    info?: { title?: string; details?: string; list?: string[] }[];
}

export default function InfoCard({
    badge_title,
    title,
    description,
    reverse,
    card_image,
    centered,
    info,
}: InfoCardProps) {
    return (
        <section className="mx-auto my-10 w-full max-w-7xl px-4 md:my-20 xl:px-0">
            <div
                className={`flex flex-col-reverse rounded-2xl bg-white p-5 sm:p-8 md:p-14 ${reverse ? 'md:flex-row-reverse' : 'md:flex-row'} ${
                    centered
                        ? 'items-center md:items-center'
                        : 'items-start md:items-start'
                } gap-6 md:gap-8`}
            >
                <div className="flex w-full items-center justify-center md:w-1/2">
                    <img
                        src={`${card_image ? `/storage/${card_image}` : ''}`}
                        alt={title ?? 'Info card image'}
                        className="h-auto max-h-72 w-full object-contain md:max-h-[420px]"
                        loading="lazy"
                    />
                </div>

                <div className="mb-2 w-full md:mb-4 md:w-1/2">
                    <div className="shadow-sm/4 inset-shadow-md flex w-max items-center gap-2 rounded-full border border-gray-200 bg-white p-1 pr-3">
                        <div className="bg-shine flex h-6 w-6 items-center justify-center rounded-full">
                            <Icon
                                icon="gg:loadbar-doc"
                                className="h-4 w-4 text-white"
                            />
                        </div>
                        <span className="text-xs text-gray-600 sm:text-sm">
                            {badge_title}
                        </span>
                    </div>

                    <h3 className="text-prime mb-3 mt-4 text-2xl font-medium sm:text-3xl md:mb-4">
                        {title}
                    </h3>

                    <div className="text-sm font-light md:text-base">
                        <p>{description}</p>
                        {info &&
                            info.map((item, index) => (
                                <div key={index} className="mt-4">
                                    <p>
                                        <span className="text-primary font-medium">
                                            {item.title}{' '}
                                        </span>
                                        {item.details}
                                    </p>

                                    {item.list && item.list.length > 0 && (
                                        <ul className="mt-3 list-outside list-disc space-y-2 pl-5 text-sm font-light sm:mt-4 sm:pl-6 md:text-base">
                                            {item.list.map((li, liIdx) => (
                                                <li key={liIdx}>{li}</li>
                                            ))}
                                        </ul>
                                    )}
                                </div>
                            ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
