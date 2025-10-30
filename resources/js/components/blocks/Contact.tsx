import Hero from "@/components/layout/Hero";
import InfoCard from "../../components/layout/info-card";
import { Card, CardHeader, CardDescription } from "@/components/ui/card";
import Letter from "@/components/layout/Letter";
import { Button } from "@/components/ui/button";

export default function ContactUs() {
  return (
    <div>
      <Hero
        badgeTitle="Contact Us"
        description="We're here to help! Whether you have questions about our assessment solutions, need support, or are interested in partnering with us, feel free to reach out."
      >
        Get in touch with <span className="text-primary">ExamLock</span>
      </Hero>
      <section className="mx-auto w-full max-w-7xl my-10 md:my-20 px-4 xl:px-0">
        <InfoCard
          badgeTitle="Get In Touch"
          imageSrc="/images/contact-us.svg"
          reverse
        >
          <h3 className="text-2xl sm:text-3xl lg:text-4xl mb-2 text-prime leading-tight">
            We're Here to Assist You
          </h3>
          <p className="font-light text-base sm:text-lg">
            Please fill out the form for additional information.
          </p>
          <form className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="tel"
                placeholder="Phone"
                className="border p-2 rounded text-sm md:text-base"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="border p-2 rounded text-sm md:text-base"
              />
            </div>
            <textarea
              placeholder="Your Address"
              className="border p-2 rounded mt-4 w-full text-sm md:text-base"
              rows={4}
            />
            <Button
              type="submit"
              variant="default"
              className="mt-4 text-sm md:text-base"
            >
              Send Message
            </Button>
          </form>
        </InfoCard>
      </section>

      <section className="mx-auto w-full max-w-7xl my-10 md:my-20 px-4 text-center">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl mb-4 text-prime font-medium leading-tight">
          Candidate Support
        </h2>
        <p className="font-light max-w-4xl mx-auto mt-6 text-base sm:text-lg lg:text-xl leading-relaxed">
          If you are a candidate taking a test, please call our toll-free number
          at +1 877-848-3926, chat with us by going to ExamRoom.AI or email us
          at support@examlock.io for additional support.
        </p>
      </section>

      <section className="mx-auto w-full max-w-7xl my-10 md:my-20 px-4 text-center">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl mb-4 text-prime font-medium leading-tight">
          Our Office
        </h2>
        <div className="mt-8 flex flex-col md:flex-row gap-8 justify-center max-w-4xl mx-auto">
          <Card className="w-full text-left gap-2">
            <CardHeader className="text-lg sm:text-xl md:text-2xl font-medium text-prime">
              Global Headquarters
            </CardHeader>
            <CardDescription className="mx-6 text-sm sm:text-base leading-relaxed font-light">
              1025 Greenwood Boulevard Suite 401 Lake Mary, Florida 32746,
              United States
            </CardDescription>
          </Card>
          <Card className="w-full text-left gap-2">
            <CardHeader className="text-lg sm:text-xl md:text-2xl font-medium text-prime">
              Other Office
            </CardHeader>
            <CardDescription className="mx-6 text-sm sm:text-base leading-relaxed font-light">
              Ground Floor, Venkatadari Building, 291- 92/1A, Konappana
              Agrahara, Electronic City, Bengaluru, Karnataka 560100, India
            </CardDescription>
          </Card>
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl my-10 md:my-20 px-4 xl:px-0">
        <Letter
          title="REQUEST A DEMO"
          description={
            <>
              Want a detailed walkthrough or live demo?
              <br />
              Click BOOK A DEMO below. <br />
              If you're a test-taker, contact us via Chat, call +1 877-848-3926,
              or email support@examroom.ai for assistance.
            </>
          }
        />
      </section>
    </div>
  );
}
