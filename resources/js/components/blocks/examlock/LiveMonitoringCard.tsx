import InfoCard from '@/components/layout/info-card';


export default function LiveMonitoringCard() {
  return (
     <section className="mx-auto w-full max-w-7xl my-8 md:my-20 px-4 xl:px-0 max-sm:mt-16">
        <InfoCard
          badgeTitle="Live Monitoring"
          title="Monitor Everything in Real Time"
          imageSrc="/products/live-monitoring.svg"
          centered
        >
          <div className="flex flex-col gap-4 md:gap-6 mt-6 md:mt-8">
            <div>
              <h6 className="text-lg md:text-xl text-prime mb-1 md:mb-2">
                Live Activity Tracker
              </h6>
              <p className="text-sm md:text-base text-gray-600 font-light">
                Monitor and flag student behavior instantly to ensure test
                integrity at every moment.
              </p>
            </div>
            <div>
              <h6 className="text-lg md:text-xl text-prime mb-1 md:mb-2">
                Mobile Application Support
              </h6>
              <p className="text-sm md:text-base text-gray-600 font-light">
                Secure and monitor exams seamlessly on mobile platforms,
                ensuring consistent protection on both Android and iOS devices.
              </p>
            </div>
          </div>
        </InfoCard>
      </section> 
  )
}
