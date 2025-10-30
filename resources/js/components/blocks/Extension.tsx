import { Button } from "@/components/ui/button";
import { Icon } from "@iconify/react";

export default function Download() {
  return (
    <div>
      <div className="fixed top-0 left-0 w-full h-14 sm:h-16 md:h-20 bg-white/70 backdrop-blur-md z-10 shadow-sm">
        <div className="mx-auto max-w-7xl h-full flex items-center justify-between px-4 sm:px-6 md:px-8">
          <a href="/">
            <img
              src="examlock.svg"
              alt="Examlock Logo"
              className="h-8 sm:h-9 md:h-10 w-auto"
            />
          </a>
          <Button
            variant="outline"
            className="shadow-none text-sm sm:text-base px-3 sm:px-4 py-1.5 sm:py-2"
          >
            Contact Support
          </Button>
        </div>
      </div>

      {/* Main content with padding to clear fixed header */}
      <div className="flex flex-col justify-center items-center min-h-screen pt-14 sm:pt-16 md:pt-24 px-4 sm:px-6 md:px-8">
        <p className="max-w-3xl text-center text-base sm:md:text-md md:text-xl mx-auto">
          Users have the option to choose from different browsers to download
          and install the ExamLock Lite Extension. Simply select the below that
          best fits your needs and follow the steps to get started.
        </p>

        <div className="w-full max-w-4xl">
          <ul className="grid grid-cols-3 sm:grid-cols-4 gap-4 sm:gap-6 md:gap-8 mt-6 place-items-center">
            <li className="flex flex-col items-center gap-2 text-sm sm:text-base">
              <img
                className="h-10 w-10 sm:h-12 sm:w-12 md:h-14 md:w-14"
                src="/images/chrome.svg"
                alt="Chrome"
              />
              <span>Chrome</span>
            </li>
            <li className="flex flex-col items-center gap-2 text-sm sm:text-base">
              <img
                className="h-10 w-10 sm:h-12 sm:w-12 md:h-14 md:w-14"
                src="/images/firefox.svg"
                alt="Firefox"
              />
              <span>Firefox</span>
            </li>
            <li className="flex flex-col items-center gap-2 text-sm sm:text-base">
              <img
                className="h-10 w-10 sm:h-12 sm:w-12 md:h-14 md:w-14"
                src="/images/opera.svg"
                alt="Opera"
              />
              <span>Opera</span>
            </li>
            <li className="flex flex-col items-center gap-2 text-sm sm:text-base col-span-3 sm:col-span-1">
              <img
                className="h-10 w-10 sm:h-12 sm:w-12 md:h-14 md:w-14"
                src="/images/brave.svg"
                alt="Brave"
              />
              <span>Brave</span>
            </li>
          </ul>
        </div>

        <Button
          size="lg"
          className="mt-6 bg-primary text-white px-6 py-3 md:text-md font-medium items-center gap-2 transition-colors w-full sm:w-auto"
        >
          Get Extension
          <Icon icon="mdi:chevron-double-right" className="size-5" />
        </Button>

        <div className="mt-8 w-full max-w-7xl">
          <img
            src="/images/dashboard.png"
            alt="Extension Preview"
            className="w-full h-auto rounded-lg shadow-sm object-contain"
          />
        </div>
      </div>
    </div>
  );
}
