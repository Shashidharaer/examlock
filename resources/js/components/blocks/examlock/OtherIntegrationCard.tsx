import InfoCard from "@/components/layout/info-card"
import { Button } from "@/components/ui/button";

export default function OtherIntegrationCard() {
  return (
    
    <section className="mx-auto w-full max-w-7xl my-10 md:my-20 px-4 xl:px-0">
        <InfoCard
          badgeTitle="Other Integrations"
          title="Other Notable Integration Options"
          imageSrc="/products/other-integration.svg"
          centered
        >
          <div className="text-sm md:text-base gap-6 mt-6 font-light">
            Zoom, Teams, Google meet, Calenderly, Latex, EncodeMagic, Math.js,
            HSP, SCORM, Open Sesame, Udemy, and xAPI(Tincan)
          </div>
          <Button variant="outline" className="mt-4 shadow-sm">
            Learn More
          </Button>
        </InfoCard>
      </section>
  )
}
