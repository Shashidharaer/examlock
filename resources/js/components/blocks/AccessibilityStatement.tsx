import Hero from "@/components/layout/Hero";

export default function AccessibilityStatement() {
  return (
    <div>
      <Hero badgeTitle="Accessibility Statement" disableCTA>
        Accessibility Statement
      </Hero>
      <section className="mx-auto w-full max-w-7xl px-4 xl:px-0">
        <div className="container text-sm md:text-base mx-auto px-4 max-w-7xl bg-white p-8 md:p-16 rounded-md shadow-sm mb-16 mt-0.5 text-center">
          <p className="md:text-md text-gray-700 max-w-5xl mx-auto font-light">
            ExamLock is committed to providing an accessible website to all of
            our users and clients, regardless of technology or ability. We are
            constantly working to increase the accessibility of our website and
            observe to standards and guidelines to maintain accessibility.{" "}
            <br />
            We adhere to and follow the guidelines put in place by the Web
            Content Accessibility Guidelines 2.0 put in place by the World Wide
            Web Consortium (W3C). These guidelines explain how to make web
            access and content more accessible for people with disabilities.{" "}
            <br />
            ExamLock is accessible on all browsers and will continue to be
            accessible with new releases and updates. While we do our utmost to
            follow the W3G guidelines, it may not be possible to do so in all
            sections of the website. If you should experience issues with any
            section of the ExamLock website, please contact us at{" "}
            <a
              href="mailto:support@ExamLock.io"
              className="underline text-primary"
            >
              support@ExamLock.io
            </a>{" "}
            and we will do our best to remedy the issue in a timely manner.{" "}
            <br />
            ExamLock's mission is to enhance and streamline test security on all
            levels. While some areas may have issues, we strive to maintain
            accessibility and usability for all visitors of the site and we
            appreciate your patience and service.
          </p>
          {/* Add more documentation content here */}
        </div>
      </section>
    </div>
  );
}
