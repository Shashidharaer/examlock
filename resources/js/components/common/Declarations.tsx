import { Icon } from '@iconify/react';

interface DeclarationsProps {
    badge_title?: string;
    title?: string;
    description?: string;
    para?: {heading?: string, text?: string; list_field?: string[]}[];
}

export default function Declarations({ badge_title, title, description, para }: DeclarationsProps) {
    return (
        <section className="mx-auto mb-10 mt-0.5 w-full max-w-7xl px-4 md:mb-20 xl:px-0">
            <div className="flex w-full flex-col items-center gap-8 rounded-lg bg-white px-4 pb-16 pt-8 md:px-20">
                <div className="shadow-sm/4 inset-shadow-md flex w-max items-center gap-2 rounded-full border border-gray-200 bg-white p-1 pr-3">
                    <div className="bg-shine flex h-6 w-6 items-center justify-center rounded-full">
                        <Icon
                            icon="gg:loadbar-doc"
                            className="h-4 w-4 text-white"
                        />
                    </div>
                    <span className="text-sm text-gray-600">{badge_title}</span>
                </div>
                <h4 className="text-prime text-3xl font-medium">{title}</h4>
                <blockquote className="text-center text-sm font-light md:text-base">
                    {description}
                </blockquote>
                {para && para.length > 0 && (
                    <div className="mt-1 md:mt-2 grid w-full max-w-4xl grid-cols-1 gap-8">
                        {para.map((item, index) => (
                            <div key={index} className="text-center font-light">
                                <h6 className="md:text-md text-prime font-medium">
                                    {item.heading}
                                </h6>
                                {item.text && (
                                    <p className="text-sm md:text-base font-light">
                                        {item.text}
                                    </p>
                                )}

                                {item.list_field && item.list_field.length > 0 && (
                                    <ul className="mt-2 mx-auto max-w-prose text-left list-disc list-outside text-sm md:text-base">
                                        {item.list_field.map((li, liIndex) => (
                                            <li key={liIndex}>{li}</li>
                                        ))}
                                    </ul>
                                )}
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </section>
    );
}
