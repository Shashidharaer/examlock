import { Button } from "@/components/ui/button";
import RequestDemo from "../common/RequestDemo";

interface HeroSectionProps {
  heading?: {text_in_black?: string, text_in_primary?: string};
  description?: string;
  buttons?: {primary_btn: string, secondary_btn: string; secondary_btn_link: string};
}

export default function HeroSection({ heading, description, buttons }: HeroSectionProps) {
  return (
    <section className="container mx-auto px-4 my-8 md:my-12 text-center">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-[600] text-gray-900 mb-6 text-balance">
          {heading?.text_in_black}
          <br className="hidden sm:block" />
          <span className="text-primary">{heading?.text_in_primary}</span>
        </h1>
        <p className="text-lg md:text-xl text-neutral-800 mb-8 max-w-2xl mx-auto text-pretty font-light">
          {description}
        </p>
        <div className="flex gap-4 justify-center">
          <RequestDemo />
          <a href={buttons?.secondary_btn_link} rel="noopener noreferrer">
            <Button
              size="lg"
              variant="outline"
              className="w-[150px]"
            >
              {buttons?.secondary_btn}
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
}
