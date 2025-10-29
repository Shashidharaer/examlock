import SectionTitle from "../common/SectionTitle";

export default function IntegrationsSection() {
  return (
    <section className="container mx-auto px-4 xl:px-0 my-10 md:my-20 max-w-7xl">
      <SectionTitle
        desClassName="md:max-w-7xl text-sm md:text-xl text-gray-600 font-light"
        badgeIcon
        badgeTitle="Integrations"
        title="Integrations with your favourite tools"
        description="Flexibility of LTI to further streamline the integration process with all LMS platforms and learning applications. The LTI standard provides a single framework for administrators and developers to integrate their LMS with the proctoring and security features."
      />

      {/* Clients Integration Image */}
      <div className="flex justify-center h-10/12 mx-2">
        <img
          src="/images/integration.svg"
          alt="Integration with favourite tools - ExamLock connects with various LMS platforms and learning applications"
          className="w-full max-md:max-w-4xl h-auto mt-8"
        />
      </div>
    </section>
  );
}
