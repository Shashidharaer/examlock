import { Button } from '@/components/ui/button';
import CountryCodeSelector from '@/components/ui/country-code-selector';
import { Icon } from '@iconify/react';
import { Form, usePage } from '@inertiajs/react';
import { useEffect, useRef, useState } from 'react';

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
    const sectionRef = useRef<HTMLElement>(null);
    const page = usePage<any>();
    const successMessage = page.props.success as string | undefined;
    const [countryCode, setCountryCode] = useState('+1');
    const [selectedCountry, setSelectedCountry] = useState('US');
    const [phoneNumber, setPhoneNumber] = useState('');

    const handleCountryChange = (dialCode: string, countryCode: string) => {
        setCountryCode(dialCode);
        setSelectedCountry(countryCode);
    };

    // Debug: log to see what we're getting
    useEffect(() => {
        console.log('Page props:', page.props);
        console.log('Success message:', successMessage);
    }, [page.props, successMessage]);

    // Preserve scroll position on form submission
    useEffect(() => {
        const handleStart = () => {
            if (sectionRef.current) {
                sessionStorage.setItem(
                    'contactFormScrollY',
                    window.scrollY.toString(),
                );
            }
        };

        const handleFinish = () => {
            const savedScroll = sessionStorage.getItem('contactFormScrollY');
            if (savedScroll) {
                // Use setTimeout to ensure DOM has updated
                setTimeout(() => {
                    window.scrollTo(0, parseInt(savedScroll, 10));
                    sessionStorage.removeItem('contactFormScrollY');
                }, 0);
            }
        };

        document.addEventListener('inertia:start', handleStart);
        document.addEventListener('inertia:finish', handleFinish);

        return () => {
            document.removeEventListener('inertia:start', handleStart);
            document.removeEventListener('inertia:finish', handleFinish);
        };
    }, []);

    return (
        <section ref={sectionRef} className="my-10 w-full px-4 md:my-20">
            <div className="mx-auto flex max-w-7xl flex-col-reverse items-center gap-8 rounded-2xl bg-white p-6 lg:flex-row-reverse md:gap-12 md:p-10 lg:p-14">
                <img
                    src={card_image ? `/storage/${card_image}` : ''}
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
                    <Form action="/contact" method="post" className="mt-6">
                        {({ processing, errors }) => (
                            <>
                                {successMessage ? (
                                    <div className="mt-6 rounded-md bg-green-50 p-4 text-green-700">
                                        Thank you for your message! We'll be in
                                        touch soon.
                                    </div>
                                ) : (
                                    <>
                                        <div className="flex flex-col gap-2">
                                            <div>
                                                <div className="flex">
                                                    <CountryCodeSelector
                                                        value={countryCode}
                                                        selectedCountryCode={
                                                            selectedCountry
                                                        }
                                                        onChange={
                                                            handleCountryChange
                                                        }
                                                    />
                                                    <input
                                                        type="tel"
                                                        name="phone"
                                                        placeholder="Phone number"
                                                        value={phoneNumber}
                                                        onChange={(e) =>
                                                            setPhoneNumber(
                                                                e.target.value,
                                                            )
                                                        }
                                                        className="flex-1 rounded-r border p-2 text-sm md:text-base"
                                                    />
                                                    <input
                                                        type="hidden"
                                                        name="country_code"
                                                        value={countryCode}
                                                    />
                                                </div>
                                                {errors.phone && (
                                                    <div className="mt-1 text-xs text-red-500">
                                                        {errors.phone}
                                                    </div>
                                                )}
                                            </div>
                                            <div className="flex-1">
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
