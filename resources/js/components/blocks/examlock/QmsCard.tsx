import InfoCard from '@/components/layout/info-card';

export default function QmsCard() {
  return (
    <section className="mx-auto w-full max-w-7xl my-8 md:my-20 px-4 xl:px-0">
        <InfoCard
          badgeTitle="QMS"
          title="Built for Institutions That Care About Quality"
          imageSrc="/products/qms.svg"
          centered
        >
          <div className="flex flex-col gap-4 md:gap-6 mt-6 md:mt-8">
            <div>
              <h6 className="text-lg md:text-xl text-prime mb-1 md:mb-2">
                QMS Integration
              </h6>
              <p className="text-sm md:text-base text-gray-600 font-light">
                Audit, track, and manage exam performance with a centralized
                Quality Management System.
              </p>
            </div>
            <div>
              <h6 className="text-lg md:text-xl text-prime mb-1 md:mb-2">
                Quantum Test Security
              </h6>
              <p className="text-sm md:text-base text-gray-600 font-light">
                Leverages predictive threat detection and layered protection to
                proactively stop compromising Item Harvesting.
              </p>
            </div>
          </div>
        </InfoCard>
      </section>
  )
}
