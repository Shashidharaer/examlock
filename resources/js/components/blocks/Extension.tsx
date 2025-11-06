import { Button } from '@/components/ui/button';
import { Icon } from '@iconify/react';

export default function Download() {
    return (
        <div className='bg-pattern'>
            <div className="fixed left-0 top-0 z-10 h-14 w-full bg-white/70 shadow-sm backdrop-blur-md sm:h-16 md:h-20">
                <div className="mx-auto flex h-full max-w-7xl items-center justify-between px-4 sm:px-6 md:px-8">
                    <a href="/">
                        <img
                            src="/storage/examlock-no-text.svg"
                            alt="Examlock Logo"
                            className="h-8 w-auto sm:h-9 md:h-10"
                        />
                    </a>
                    <Button
                        variant="outline"
                        className="px-3 py-1.5 text-sm shadow-none sm:px-4 sm:py-2 sm:text-base"
                    >
                        Contact Support
                    </Button>
                </div>
            </div>

            {/* Main content with padding to clear fixed header */}
            <div className="flex min-h-screen flex-col items-center justify-center px-4 pt-14 sm:px-6 sm:pt-16 md:px-8 md:pt-24">
                <p className="sm:md:text-md mx-auto max-w-3xl text-center text-base md:text-xl">
                    Users have the option to choose from different browsers to
                    download and install the ExamLock Lite Extension. Simply
                    select the below that best fits your needs and follow the
                    steps to get started.
                </p>

                <div className="w-full max-w-4xl">
                    <ul className="mt-6 grid grid-cols-3 place-items-center gap-4 sm:grid-cols-4 sm:gap-6 md:gap-8">
                        <li className="flex flex-col items-center gap-2 text-sm sm:text-base">
                            <img
                                className="h-10 w-10 sm:h-12 sm:w-12 md:h-14 md:w-14"
                                src="/storage/images/chrome.svg"
                                alt="Chrome"
                            />
                            <span>Chrome</span>
                        </li>
                        <li className="flex flex-col items-center gap-2 text-sm sm:text-base">
                            <img
                                className="h-10 w-10 sm:h-12 sm:w-12 md:h-14 md:w-14"
                                src="/storage/images/firefox.svg"
                                alt="Firefox"
                            />
                            <span>Firefox</span>
                        </li>
                        <li className="flex flex-col items-center gap-2 text-sm sm:text-base">
                            <img
                                className="h-10 w-10 sm:h-12 sm:w-12 md:h-14 md:w-14"
                                src="/storage/images/opera.svg"
                                alt="Opera"
                            />
                            <span>Opera</span>
                        </li>
                        <li className="col-span-3 flex flex-col items-center gap-2 text-sm sm:col-span-1 sm:text-base">
                            <img
                                className="h-10 w-10 sm:h-12 sm:w-12 md:h-14 md:w-14"
                                src="/storage/images/brave.svg"
                                alt="Brave"
                            />
                            <span>Brave</span>
                        </li>
                    </ul>
                </div>
                <a href="https://chromewebstore.google.com/detail/examlock-lite/jioikfeafcclikkdbekieliifijogfhd?hl=en-GB&utm_source=ext_sidebar" target="_blank" rel="noopener noreferrer">
                    <Button
                        size="lg"
                        className="bg-primary md:text-md mt-6 w-full items-center gap-2 px-6 py-3 font-medium text-white transition-colors sm:w-auto"
                    >
                        Get Extension
                        <Icon
                            icon="mdi:chevron-double-right"
                            className="size-5"
                        />
                    </Button>
                </a>
                <div className="mt-8 w-full max-w-7xl">
                    <img
                        src="/storage/gifs/chrome_extension.gif"
                        alt="Extension Preview"
                        className="h-auto w-full rounded-lg object-contain shadow-sm"
                    />
                </div>
            </div>
        </div>
    );
}
