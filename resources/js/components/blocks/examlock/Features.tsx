import SectionTitle from "@/components/common/SectionTitle";
import { Card, CardDescription, CardHeader } from "@/components/ui/card";
import { Icon } from "@iconify/react";

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

export default function Features() {
  return (
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
  )
}
