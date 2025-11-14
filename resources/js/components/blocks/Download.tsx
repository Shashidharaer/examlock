import { Button } from "@/components/ui/button";
import { Icon } from "@iconify/react";
import { Link } from "@inertiajs/react";
import { useState } from "react";
import { QRCodeSVG } from 'qrcode.react';

export default function Download() {
  const [showQRModal, setShowQRModal] = useState(false);
  const [selectedPlatform, setSelectedPlatform] = useState<'iOS' | 'Android' | null>(null);

  const handleMobileDownload = (platform: 'iOS' | 'Android') => {
    setSelectedPlatform(platform);
    setShowQRModal(true);
  };

  const closeModal = () => {
    setShowQRModal(false);
    setSelectedPlatform(null);
  };

  // Download URLs for QR codes
  const getDownloadUrl = () => {
    if (selectedPlatform === 'iOS') {
      return 'https://apps.apple.com/app/examlock';
    }
    return 'https://play.google.com/store/apps/details?id=com.examlock';
  };

  return (
    <div className="bg-pattern">
      {/* Responsive, fixed header */}
      <div className="fixed top-0 left-0 w-full h-14 sm:h-16 md:h-20 bg-white/70 backdrop-blur-md z-10 shadow-sm">
        <div className="mx-auto max-w-7xl h-full flex items-center justify-between px-4 sm:px-6 md:px-8">
          <Link href="/">
            <img
              src="storage/examlock.svg"
              alt="Examlock Logo"
              className="h-8 sm:h-9 md:h-10 w-auto"
            />
          </Link>
          <a href="https://examroom.atlassian.net/servicedesk/customer/portals" target="_blank" rel="noopener noreferrer">
            <Button
              variant="outline"
              className="shadow-none text-xs sm:text-sm md:text-base px-2 sm:px-3 md:px-4 py-1 sm:py-1.5 md:py-2"
            >
              Contact Support
            </Button>
          </a>
        </div>
      </div>

      {/* Add top padding to clear the fixed header */}
      <div className="flex flex-col justify-center items-center min-h-screen pt-14 sm:pt-16 md:pt-20 px-4 py-8">
        <img
          className="mb-6 mt-4 w-16 sm:w-20 md:w-24 h-auto"
          src="storage/examlock-no-text.svg"
          alt="Examlock Logo"
        />
        <h1 className="text-3xl sm:text-4xl md:text-5xl text-center font-semibold">
          Download <span className="text-primary">Examlock</span>
        </h1>
        <p className="font-light text-center text-neutral-700 mt-3 text-sm sm:text-base md:text-lg">
          Available for macOS, Windows, iOS and Android.
        </p>
        <Button
          size="lg"
          className="mt-6 bg-primary text-white px-4 sm:px-6 py-2 sm:py-3 text-sm sm:text-base md:text-md font-medium items-center gap-2 transition-colors"
        >
          <Icon icon="mdi:download" className="size-4 sm:size-5" />
          Download for{" "}
          {navigator.platform.includes("Mac") ? "macOS" : "Windows"}
        </Button>
        <span className="font-light text-neutral-500 mt-3 text-xs sm:text-sm">
          Version 16.4
        </span>
        <p className="font-light text-neutral-500 mt-3 text-xs sm:text-sm">
          Or download the version you want:
        </p>
        <div className="flex flex-wrap justify-center items-center gap-3 sm:gap-4 mt-4">
          {!navigator.platform.includes("Mac") && (
            <a href="#">
              <Button
                variant="outline"
                className="text-neutral-800 border-neutral-300 rounded-lg shadow-none text-xs sm:text-sm px-3 sm:px-4 py-1.5"
              >
                macOS
              </Button>
            </a>
          )}
          {!navigator.platform.includes("Win") && (
            <a href="#">
              <Button
                variant="outline"
                className="text-neutral-800 border-neutral-300 rounded-lg shadow-none text-xs sm:text-sm px-3 sm:px-4 py-1.5"
              >
                Windows
              </Button>
            </a>
          )}
          {!/iPhone|iPad|iPod/.test(navigator.platform) && (
            <Button
              variant="outline"
              onClick={() => handleMobileDownload('iOS')}
              className="text-neutral-800 border-neutral-300 rounded-lg shadow-none text-xs sm:text-sm px-3 sm:px-4 py-1.5 cursor-pointer"
            >
              iOS
            </Button>
          )}
          {!navigator.platform.includes("Android") && (
            <Button
              variant="outline"
              onClick={() => handleMobileDownload('Android')}
              className="text-neutral-800 border-neutral-300 rounded-lg shadow-none text-xs sm:text-sm px-3 sm:px-4 py-1.5 cursor-pointer"
            >
              Android
            </Button>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mt-16 max-w-7xl p-1.5 border-1 border-primary/50 rounded-xl bg-[#f9f9f9] shadow-md items-center md:p-4">
          <div className="border-1 border-primary rounded-lg flex justify-center items-center overflow-hidden">
            <img src="storage/images/download.png" alt="Examlock Screenshot" className="object-cover w-full h-full"/>
          </div>
          <div className="flex flex-col gap-2 max-sm:p-4">
            <span className="text-primary py-1 px-2 text-xs sm:text-sm bg-accent/50 rounded-full w-fit">
              Sep 26, 2025
            </span>
            <h4 className="text-lg sm:text-xl md:text-2xl text-prime font-semibold">
              Version 16.4 is here!
            </h4>
            <p className="font-light text-neutral-700 my-4 text-sm sm:text-base">
              With our latest update, ExamLock now features SmartSync, ensuring
              exam data remains safe even during internet interruptions.
              Students can continue their tests offline, and once reconnected,
              SmartSync securely uploads all progress and responses. This
              guarantees exam integrity and a seamless experience—no
              disruptions, no lost work.
            </p>
            {/* <Button variant="outline" className="w-fit text-sm sm:text-base">
              Explore
            </Button> */}
          </div>
        </div>
      </div>

      {/* QR Code Modal */}
      {showQRModal && selectedPlatform && (
        <div 
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={closeModal}
        >
          <div 
            className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-6 sm:p-8 relative animate-in fade-in zoom-in duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
            >
              <Icon icon="mdi:close" className="size-6" />
            </button>

            {/* Content */}
            <div className="text-center">
              <div className="mb-4">
                <Icon 
                  icon={selectedPlatform === 'iOS' ? 'mdi:apple' : 'mdi:android'} 
                  className="size-12 mx-auto text-primary"
                />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-2">
                Download for {selectedPlatform}
              </h3>
              <p className="text-sm text-gray-600 mb-6">
                Scan this QR code with your {selectedPlatform} device to download the app
              </p>

              {/* QR Code */}
              <div className="bg-gray-100 rounded-xl p-6 mb-6">
                <div className="bg-white p-4 rounded-lg inline-block shadow-sm">
                  <QRCodeSVG 
                    value={getDownloadUrl()} 
                    size={192}
                    level="H"
                    includeMargin={false}
                  />
                </div>
              </div>

              {/* Store Badges */}
              <div className="flex flex-col gap-3">
                <p className="text-xs text-gray-500">Or download directly from:</p>
                <a 
                  href={getDownloadUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-gray-900 text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors"
                >
                  <Icon 
                    icon={selectedPlatform === 'iOS' ? 'mdi:apple' : 'mdi:google-play'} 
                    className="size-5"
                  />
                  <span className="text-sm font-medium">
                    {selectedPlatform === 'iOS' ? 'App Store' : 'Google Play'}
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
