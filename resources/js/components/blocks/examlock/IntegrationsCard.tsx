import InfoCard from '@/components/layout/info-card';

export default function IntegrationsCard() {
  return (
     <section className="mx-auto w-full max-w-7xl my-8 md:my-20 px-4 xl:px-0">
        <InfoCard
          badgeTitle="Integrations"
          title="Integrations"
          imageSrc="/products/integration.png"
          reverse
          centered
        >
          <div className="gap-6 mt-6 font-light text-sm md:text-base text-gray-600 leading-relaxed">
            ExamLock seamlessly integrates with a wide range of Learning
            Management Systems (LMS) and assessment platforms, ensuring a secure
            and streamlined testing experience. ExamLock supports integration
            with most LMS platforms.
          </div>
        </InfoCard>
      </section>
  )
}
