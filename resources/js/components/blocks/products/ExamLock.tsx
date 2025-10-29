
import Hero from "@/components/layout/PageHero";
import SectionTitle from "@/components/common/SectionTitle";
import { Card, CardDescription, CardHeader } from "@/components/ui/card";
import { Icon } from "@iconify/react";
import InfoCard from "@/components/layout/info-card";
import { Button } from "@/components/ui/button";
import Certification from "@/components/layout/Certification";
import Letter from "@/components/layout/Letter";

const SystemLockdownFeatures: { title: string; description: string }[] = [
  {
    title: "System Restrictions",
    description:
      "Disables system commands, keyboard shortcuts, and right-click menus to prevent unauthorized actions.",
  },
  {
    title: "Browser Control",
    description:
      "Runs in full-screen mode without navigation bars. Configure it to block or allow specific URLs and resources.",
  },
  {
    title: "Spell Checking Control",
    description:
      "Disables spell check and dictionary lookup to prevent unfair advantages, optional if needed.",
  },
  {
    title: "Third-Party Application Integration",
    description:
      "Allows approved tools like Excel, Eclipse, or R to run alongside the secure exam for specialized assessments.",
  },
  {
    title: "Virtual Machine Detection",
    description:
      "Detects virtual machines and jailbroken devices, can block exams in unsecure environments.",
  },
  {
    title: "URL Filtering & Certificate Pinning",
    description:
      "Restricts web access to authorized resources only and secures server communication with certificate pinning.",
  },
  {
    title: "Cross-Platform Compatibility",
    description:
      "Works across Windows, macOS, and iOS, customized to leverage each system’s security capabilities.",
  },
  {
    title: "Regular Updates",
    description:
      "Frequently enhanced to improve compatibility, patch vulnerabilities, and defend against new threats (e.g., AI detection tools).",
  },
];

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
export default function Examlock() {
  return (
    <div>
      <Hero
        badgeTitle="ExamLock"
        title="Total Security. Zero Compromise."
        description="ExamLock is a secure browser-based solution built to protect high-stakes
          assessments in any environment, online, offline, or hybrid. From intelligent
          monitoring to complete system lockdown, ExamLock delivers everything
          needed to maintain academic integrity and testing compliance."
      />
      <section className="mx-auto w-full max-w-7xl my-10 md:my-20 px-4 xl:px-0">
        <SectionTitle
          title="Exam Ready, Even When Offline"
          badgeIcon
          badgeTitle="Compatibility"
          className="flex flex-col text-center items-center mb-0 mt-4"
        />
        <div className="flex flex-col md:flex-row gap-6 w-full max-w-7xl mx-auto">
          <div className="w-full md:w-1/2">
            <Card className="max-w-lg md:max-w-none mx-auto md:mx-0 mt-4 md:mt-8 shadow-sm">
              <CardHeader className="flex flex-col gap-3">
                Offline Exam Mode
                <CardDescription>
                  Exams run without an internet connection, with all data
                  securely stored and automatically submitted once reconnected.
                  Our platform supports offline test delivery across all
                  modalities.
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="max-w-lg md:max-w-none mx-auto md:mx-0 mt-6 md:mt-8 shadow-sm">
              <CardHeader className="flex flex-col gap-3">
                ADA-Compliant Design
                <CardDescription>
                  Exams run without an internet connection, with all data
                  securely stored and automatically submitted once reconnected.
                  Our platform supports offline test delivery across all
                  modalities.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>

          <div className="bg-white p-4 sm:p-6 w-full md:w-1/2 md:mt-8 rounded-lg shadow-sm text-center text-gray-700 font-medium flex justify-center items-center">
            <div className="px-6 sm:px-10 md:px-12 lg:px-14 py-6 sm:py-8 border-1 border-primary/10 rounded-4xl">
              <div className="px-6 sm:px-8 md:px-10 py-4 sm:py-6 border-1 border-primary/30 rounded-3xl">
                <div className="p-4 sm:p-6 border-1 border-primary/40 rounded-3xl">
                  <div className="bg-[#F3F3F3] px-6 sm:px-8 py-3 sm:py-4 border-1 border-primary/50 w-fit mx-auto rounded-xl">
                    Offline Sync
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
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
      <section className="mx-auto w-full max-w-7xl my-10 md:my-20 px-4 xl:px-0">
        <SectionTitle
          title="System Lockdown features"
          badgeIcon={
            <Icon icon="gg:loadbar-doc" className="w-4 h-4 text-white" />
          }
          badgeTitle="features"
          className="flex flex-col text-center items-center mb-0 mt-4"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-2 md:mt-8">
          {SystemLockdownFeatures.map((features) => {
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
      <Certification />
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
      <section className="mx-auto w-full max-w-7xl my-10 md:my-20 px-4 xl:px-0">
        <Letter
          title="Secure Your Assessment with ExamLock"
          description="With ExamLock, you're not just securing assessments, you're future-proofing your testing environment."
        />
      </section>
    </div>
  );
}
