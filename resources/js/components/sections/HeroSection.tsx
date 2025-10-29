import { Button } from "@/components/ui/button";
import RequestDemo from "../common/RequestDemo";

export default function HeroSection() {
  return (
    <section className="container mx-auto px-4 my-8 md:my-12 text-center">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-[600] text-gray-900 mb-6 text-balance">
          Safe, Secure and
          <br className="hidden sm:block" />
          <span className="text-primary"> Advanced</span>
        </h1>
        <p className="text-lg md:text-xl text-neutral-800 mb-8 max-w-2xl mx-auto text-pretty font-light">
          No matter the level of the test, ExamLock secures and protects your
          investment, time, and integrity.
        </p>
        <div className="flex gap-4 justify-center">
          <RequestDemo />
          <a href="/contact">
            <Button
              size="lg"
              variant="outline"
              className="w-[150px]"
            >
              Contact Us
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
}
