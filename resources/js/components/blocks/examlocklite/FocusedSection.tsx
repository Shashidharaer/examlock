import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

interface FocusedSectionProps {
  title?: string;
}

const cardDetails: { title: string; description: string; image: string }[] = [
  {
    title: "No Distractions Allowed",
    description:
      "ExamLock Lite automatically restricts opening of additional tabs during assessments, ensuring candidates stay focused on the test.",
    image: "/storage/products/no_distraction.svg",
  },
  {
    title: "No Cheating Shortcuts",
    description:
      "Key combinations like copy, paste, print screen, and other shortcuts are smartly detected and blocked in real-time.",
    image: "/storage/products/no_cheating.svg",
  },
  {
    title: "Full-Screen Mode Only",
    description:
      "Once the test starts, the browser switches to non-resizable full-screen mode, users cannot minimize, switch windows, or multitask.",
    image: "/storage/products/full-screen.webp",
  },
];


export default function FocusedSection({ title }: FocusedSectionProps) {
  return (
    <section className="my-10 w-full px-4 md:my-20 text-center">
      <div className="mx-auto max-w-7xl">
        <h4 className="text-prime text-3xl sm:text-4xl md:text-5xl font-medium md:my-4 md:pb-4">
          {title}
        </h4>
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {cardDetails.map((items) => {
            return (
              <Card
                key={items.title}
                className="flex h-full w-full flex-col mt-0 shadow-sm py-2"
              >
                <CardHeader className="w-full px-2">
                  <img
                    className="w-full h-full object-contain rounded-lg"
                    src={items.image}
                    alt={items.title}
                  />
                  <div className="mt-4 px-4 pb-4">
                    <CardTitle className="text-left mb-3 md:text-md sm:text-xl font-light text-prime">
                      {items.title}
                    </CardTitle>
                    <CardDescription className="text-left">
                      {items.description}
                    </CardDescription>
                  </div>
                </CardHeader>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  )
}
