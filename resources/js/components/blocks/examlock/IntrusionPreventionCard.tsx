import InfoCard from '@/components/layout/info-card';


export default function IntrusionPreventionCard() {
  return (
     <section className="mx-auto w-full max-w-7xl my-8 md:my-20 px-4 xl:px-0">
        <InfoCard
          badgeTitle="Intrusion Prevention"
          title="Hardware Intrusion Prevention"
          reverse
          imageSrc="/products/hardware.svg"
          centered
        >
          <div className="flex flex-col gap-4 md:gap-6 mt-6 md:mt-8">
            <div>
              <h6 className="text-lg md:text-xl text-prime mb-1 md:mb-2">
                USB / HDMI / VGA Detection
              </h6>
              <p className="text-sm md:text-base text-gray-600 font-light">
                Blocks unauthorized external devices.
              </p>
            </div>
            <div>
              <h6 className="text-lg md:text-xl text-prime mb-1 md:mb-2">
                Dual Monitor Detection
              </h6>
              <p className="text-sm md:text-base text-gray-600 font-light">
                Automatically prevents multiple-screen setups.
              </p>
            </div>
            <div>
              <h6 className="text-lg md:text-xl text-prime mb-1 md:mb-2">
                Virtual Machine Alerts
              </h6>
              <p className="text-sm md:text-base text-gray-600 font-light">
                Flags emulated or sandboxed environments.
              </p>
            </div>
            <div>
              <h6 className="text-lg md:text-xl text-prime mb-1 md:mb-2">
                Bluetooth & WiFi Tethering Block
              </h6>
              <p className="text-sm md:text-base text-gray-600 font-light">
                Prevents wireless data-sharing during exams.
              </p>
            </div>
          </div>
        </InfoCard>
      </section>
  )
}
