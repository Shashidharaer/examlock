import SectionTitle from "@/components/common/SectionTitle";
import { Card, CardDescription, CardHeader } from "@/components/ui/card";
import { Icon } from "@iconify/react";

const AdvancedThreatDetection: { title: string; description: string }[] = [
  {
    title: "IP Address Tracking",
    description:
      "Pinpoints student locations and flags irregularities in real time.",
  },
  {
    title: "Obscuring Text",
    description:
      "Protects sensitive content from being captured or read by external viewers or tools.",
  },
  {
    title: "Screen Recording Detection",
    description:
      "Identifies and blocks all screen recording attempts during the test.",
  },
  {
    title: "Spyware Detection",
    description:
      "Monitors for hidden applications or background tools attempting to breach security.",
  },
  {
    title: "Screencast / Screen Mirroring Block",
    description:
      "Detects and stops screen sharing and mirroring across devices.",
  },
  {
    title: "AI / GPT Extension  Detection",
    description:
      "Flags use of AI writing tools and browser-based GPT extensions during active assessments.",
  },
  {
    title: "Plagiarism Detection",
    description:
      "Compares real-time student responses against extensive databases and web sources, instantly flagging copied or paraphrased content.",
  },
  {
    title: "Web-Scraper Defense",
    description:
      "ExamLock monitors online platforms for test content leaks across Web2 (including the Dark Web) and selectively on Web3 to detect potential content breaches and enable immediate action.",
  },
];

export default function AdvancedFeatures() {
  return (
     <section className="mx-auto w-full max-w-7xl my-10 md:my-20 px-4 xl:px-0">
        <SectionTitle
          title="Advanced Threat Detection"
          badgeIcon={
            <Icon icon="gg:loadbar-doc" className="w-4 h-4 text-white" />
          }
          badgeTitle="Advanced features"
          className="flex flex-col text-center items-center mb-0 mt-4"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-2 md:mt-8">
          {AdvancedThreatDetection.map((features) => {
            return (
              <Card className="max-w-lg mx-auto shadow-sm w-full">
                <CardHeader className="flex flex-col gap-3">
                  {features.title}
                  <CardDescription>{features.description}</CardDescription>
                </CardHeader>
              </Card>
            );
          })}
        </div>
      </section>
  )
}
