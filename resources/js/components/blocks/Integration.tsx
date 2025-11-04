import Hero from "@/components/layout/Hero";
import SectionTitle from "@/components/common/SectionTitle";
import useEmblaCarousel from "embla-carousel-react";
import {
  NextButton,
  PrevButton,
  usePrevNextButtons,
} from "@/components/ui/EmblaCarouselArrowButtons";
import Letter from "@/components/layout/Letter";
import InfoCard from "@/components/layout/info-card";

const carouselContent = [
  {
    title: "SAML 2.0",
    description:
      "Seamlessly exchange authentication data with any identity provider using the secure and widely adopted SAML 2.0 protocol. Simplify web-based user authentication across your organization.",
  },
  {
    title: "NTLM",
    description:
      "Supports NTLM-based Single Sign-On (SSO) for stand-alone Windows systems that do not utilize the more modern and secure Microsoft Kerberos authentication.",
  },
  {
    title: "Custom Plugin",
    description:
      "Leverage our open-source JavaScript SDK to extend platform functionality and build custom integrations.",
  },
  {
    title: "LTI 1.3",
    description:
      "Leverage our open-source JavaScript SDK to extend platform functionality and build custom integrations.",
  },
  {
    title: "Domain API",
    description:
      "Leverage our open-source JavaScript SDK to extend platform functionality and build custom integrations.",
  },
];

export default function Integration() {
  const [emblaRef, emblaApi] = useEmblaCarousel();
  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);

  return (
    <div>
      <Hero
        badgeTitle="Integrations"
        description="Connect securely and scale easily with our SDKs, APIs, and flexible plugin support."
      >
        <span className="text-primary">Seamless Integration</span> with ExamLock
      </Hero>
      <div className="mt-16 mb-16 md:mb-24 px-4 xl:px-0">
        <SectionTitle
          title="Integrations & Standards"
          description="Our platform is built for flexibility and compatibility, supporting a wide range of authentication protocols, learning standards, and payment gateways to suit your business needs."
        />
      </div>
      {/* carousel section */}
      <div className="embla" ref={emblaRef}>
        <div className="embla__container max-xl:mx-4">
          {carouselContent.map((item) => (
            <div className="embla__slide">
              <h4 className="text-[1rem] font-medium mb-2">{item.title}</h4>
              <p className="text-sm md:text-base font-light">
                {item.description}
              </p>
            </div>
          ))}
        </div>
        <div className="flex justify-end gap-4 my-4 mx-2 max-xl:mx-4">
          <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
          <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
        </div>
      </div>

      {/* Cards section */}
      <section className="mx-auto w-full max-w-7xl my-10 md:my-20 px-4 xl:px-0">
        <InfoCard
          badgeTitle="LTI Integration"
          title="LTI Integration"
          imageSrc="/products/integration.png"
          centered
        >
          <div className="text-sm md:text-base font-light">
            <p>
              Developed by the IMS Global Learning Consortium, LTI is a standard
              used to integrate external learning applications and tools into a
              central LMS.
            </p>
            <p className="mt-4">
              <span className="text-primary font-medium">
                Seamless integration:
              </span>{" "}
              LTI allows different educational tools to work together easily.
              For instance, an instructor can link to a third-party quiz or
              simulation from within their LMS, with a seamless single sign-on
              (SSO) experience for the user.
            </p>
            <p className="mt-4">
              <span className="text-primary font-medium">
                Extends functionality:
              </span>{" "}
              While it does not track learning progress in the same way as SCORM
              or xAPI, it allows platforms to integrate specialized external
              content to enrich the learning experience.
            </p>
          </div>
        </InfoCard>
      </section>
      <section className="mx-auto w-full max-w-7xl my-10 md:my-20 px-4 xl:px-0">
        <InfoCard
          reverse
          badgeTitle="xAPI (Experience API)"
          title="xAPI (Experience API)"
          imageSrc="/integration/xapi.svg"
          centered
        >
          <div className="text-sm md:text-base font-light">
            <p>
              xAPI, also known as Tin Can API, is the most common successor to
              SCORM. It focuses on gathering data on a wider range of learning
              experiences beyond traditional online courses.
            </p>
            <p className="mt-4">
              <span className="text-primary font-medium">Ease of use:</span>{" "}
              Unlike SCORM, which only tracks courses launched within a Learning
              Management System (LMS), xAPI can track learning activities that
              occur anywhere, including offline events, on mobile apps, or in
              simulations and games.
            </p>
            <p className="mt-4">
              <span className="text-primary font-medium">Wider tracking:</span>{" "}
              H5P is not limited to closed file formats like SCORM and gives
              designers more creative freedom.
            </p>
            <p className="mt-4">
              <span className="text-primary font-medium">Richer data:</span>{" "}
              xAPI records detailed data using simple "actor-verb-object"
              statements (e.g., "John completed sales training"). This offers
              more granular insights into a learner's behavior, which can be
              stored in a Learning Record Store (LRS).
            </p>
            <p className="mt-4">
              <span className="text-primary font-medium">Future-proofing:</span>{" "}
              xAPI is more mobile-friendly and adaptable to newer technologies
              like augmented and virtual reality. It allows for more
              personalized and data-driven learning programs.
            </p>
          </div>
        </InfoCard>
      </section>
      <section className="mx-auto w-full max-w-7xl my-10 md:my-20 px-4 xl:px-0">
        <InfoCard
          badgeTitle="SCORM"
          centered
          title="SCORM"
          imageSrc="/integration/scorm.svg"
        >
          <div className="text-sm md:text-base font-light">
            <p>
              e-learning standard include the Experience API (xAPI), cmi5, and
              Learning Tools Interoperability (LTI). While SCORM is still widely
              supported, these newer standards offer more robust tracking,
              support for mobile learning, and greater flexibility for modern
              e-learning.
            </p>
          </div>
        </InfoCard>
      </section>
      <section className="mx-auto w-full max-w-7xl my-10 md:my-20 px-4 xl:px-0">
        <InfoCard
          badgeTitle="cmi5"
          title="CMI5"
          imageSrc="/integration/xapi.svg"
          centered
        >
          <div className="text-sm md:text-base font-light">
            <p>
              cmi5 is an xAPI-based specification that bridges the gap between
              SCORM and xAPI, providing a modern update that retains some of
              SCORM's familiar functionality. It is especially useful for
              organizations that need more than SCORM's basic tracking but
              aren't ready for a full transition to xAPI.
            </p>
            <p className="mt-4">
              <span className="text-primary font-medium">Structured xAPI:</span>{" "}
              It provides a specific profile for how an LMS and xAPI-enabled
              content communicate, defining rules for launching, reporting, and
              course structure.
            </p>
            <p className="mt-4">
              <span className="text-primary font-medium">
                Improved security:
              </span>{" "}
              cmi5 handles secure authentication and data exchange more
              effectively than SCORM.
            </p>
            <p className="mt-4">
              <span className="text-primary font-medium">
                Mobile and offline learning:{" "}
              </span>{" "}
              It provides better support for mobile and offline learning while
              still working within the traditional LMS framework.
            </p>
          </div>
        </InfoCard>
      </section>
      <section className="mx-auto w-full max-w-7xl my-10 md:my-20 px-4 xl:px-0">
        <InfoCard
          reverse
          badgeTitle="H5P (HTML5 Package)"
          title="H5P (HTML5 Package)"
          imageSrc="/integration/h5p.svg"
          centered
        >
          <div className="text-sm md:text-base font-light">
            <p>
              H5P is an open-source framework used to create and share
              interactive HTML5 content, such as quizzes, interactive videos,
              and branching scenarios.
            </p>
            <p className="mt-4">
              <span className="text-primary font-medium">Ease of use:</span>{" "}
              Ease of use: It is easy to use, even for non-programmers, and
              integrates with platforms like Moodle and WordPress.
            </p>
            <p className="mt-4">
              <span className="text-primary font-medium">Flexibility:</span> H5P
              is not limited to closed file formats like SCORM and gives
              designers more creative freedom.
            </p>
            <p className="mt-4">
              <span className="text-primary font-medium">Open source:</span>{" "}
              Because it is open source, H5P does not have licensing fees and
              offers more flexibility for long-term development.
            </p>
            <p className="mt-4">
              <span className="text-primary font-medium">
                For rich data and advanced tracking:
              </span>{" "}
              if your priority is detailed analytics from informal, mobile, or
              experiential learning, xAPI is the best choice.
            </p>
            <p className="mt-4">
              <span className="text-primary font-medium">
                For modern tracking with a familiar structure:
              </span>{" "}
              If you want the benefits of xAPI's detailed tracking but with a
              course structure similar to SCORM, cmi5 is the ideal middle
              ground.
            </p>
            <p className="mt-4">
              <span className="text-primary font-medium">
                For quick, external tool integration:
              </span>{" "}
              If you primarily need to connect third-party learning applications
              to your existing LMS, LTI is the right solution.
            </p>
            <p className="mt-4">
              <span className="text-primary font-medium">
                For interactive, open-source content:
              </span>{" "}
              If you want to create highly interactive HTML5 content without
              being tied to a specific system, H5P is a flexible and affordable
              option.
            </p>
          </div>
        </InfoCard>
      </section>

      <section className="mx-auto w-full max-w-7xl my-10 md:my-20 px-4 xl:px-0">
        <Letter
          title="Connect Securely and Scale Easily"
          description="With ExamLock, you're not just securing assessments, you're future-proofing your testing environment."
        />
      </section>
    </div>
  );
}
