import SectionTitle from "../common/SectionTitle";

interface IntegrationsSectionProps {
  badge_icon_text?: string;
  title?: string;
  description?: string;
}

export default function IntegrationsSection({ badge_icon_text, title, description }: IntegrationsSectionProps) {
  return (
    <section className="container mx-auto px-4 xl:px-0 my-10 md:my-20 max-w-7xl">
      <SectionTitle
        desClassName="md:max-w-7xl text-sm md:text-xl text-gray-600 font-light"
        badgeIcon
        badgeTitle={badge_icon_text}
        title={title}
        description={description}
      />

      {/* Clients Integration Image */}
      <div className="flex justify-center h-10/12 mx-2">
        <img
          src="storage/images/integration.webp"
          alt="Integration with favourite tools - ExamLock connects with various LMS platforms and learning applications"
          className="w-full max-md:max-w-4xl h-auto mt-8"
        />
      </div>
    </section>
  );
}
