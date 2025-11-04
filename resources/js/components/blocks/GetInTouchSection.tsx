import { Button } from '@/components/ui/button';
import { Icon } from '@iconify/react';
import { Form } from '@inertiajs/react';

interface GetInTouchSectionProps {
    badge_text?: string;
    card_image?: string;
    title?: string;
    description?: string;
}

export default function GetInTouchSection({
    title,
    card_image,
    badge_text,
    description,
}: GetInTouchSectionProps) {
    return (
        <section className="mx-auto my-10 w-full max-w-7xl px-4 md:my-20 xl:px-0">
            <div className="flex flex-row-reverse items-center gap-8 rounded-2xl bg-white p-6 md:gap-12 md:p-10 lg:p-14">
                <img
                    src={card_image}
                    alt={title}
                    className="h-auto max-h-72 w-full object-contain md:max-h-[420px]"
                    loading="lazy"
                />
                <div className="flex w-full flex-col">
                    <div className="shadow-sm/4 inset-shadow-md flex w-max items-center gap-2 rounded-full border border-gray-200 bg-white p-1 pr-3">
                        <div className="bg-shine flex h-6 w-6 items-center justify-center rounded-full">
                            <Icon
                                icon="gg:loadbar-doc"
                                className="h-4 w-4 text-white"
                            />
                        </div>
                        <span className="text-xs text-gray-600 sm:text-sm">
                            {badge_text}
                        </span>
                    </div>
                    <h3 className="text-prime my-2 text-2xl leading-tight sm:text-3xl lg:text-4xl">
                        {title}
                    </h3>
                    <p className="text-base font-light sm:text-lg">
                        {description}
                    </p>
                    <Form
                        action="/contact"
                        method="post"
                        className="mt-6"
                        resetOnSuccess={true}
                    >
                        {({ processing, errors, wasSuccessful }) => (
                            <>
                                {wasSuccessful ? (
                                    <div className="mt-6 rounded-md bg-green-50 p-4 text-green-700">
                                        Thank you for your message! We'll be in
                                        touch soon.
                                    </div>
                                ) : (
                                    <>
                                        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                                            <div>
                                                <input
                                                    type="tel"
                                                    name="phone"
                                                    placeholder="Phone"
                                                    defaultValue=""
                                                    className="w-full rounded border p-2 text-sm md:text-base"
                                                />
                                                {errors.phone && (
                                                    <div className="mt-1 text-xs text-red-500">
                                                        {errors.phone}
                                                    </div>
                                                )}
                                            </div>
                                            <div>
                                                <input
                                                    type="email"
                                                    name="email"
                                                    placeholder="Your Email"
                                                    defaultValue=""
                                                    className="w-full rounded border p-2 text-sm md:text-base"
                                                />
                                                {errors.email && (
                                                    <div className="mt-1 text-xs text-red-500">
                                                        {errors.email}
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                        <div>
                                            <textarea
                                                name="your_address"
                                                placeholder="Your Address"
                                                defaultValue=""
                                                className="mt-4 w-full rounded border p-2 text-sm md:text-base"
                                                rows={4}
                                            />
                                            {errors.your_address && (
                                                <div className="mt-1 text-xs text-red-500">
                                                    {errors.your_address}
                                                </div>
                                            )}
                                        </div>
                                        {/* Honeypot field for spam protection */}
                                        <input
                                            type="text"
                                            name="honeypot"
                                            className="hidden"
                                            tabIndex={-1}
                                            autoComplete="off"
                                        />
                                        <Button
                                            type="submit"
                                            variant="default"
                                            className="mt-4 text-sm md:text-base"
                                            disabled={processing}
                                        >
                                            {processing
                                                ? 'Sending...'
                                                : 'Send Message'}
                                        </Button>
                                    </>
                                )}
                            </>
                        )}
                    </Form>
                </div>
            </div>
        </section>
    );
}
