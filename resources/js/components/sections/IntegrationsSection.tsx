import SectionTitle from '../common/SectionTitle';

interface IntegrationsSectionProps {
  badge_icon_text?: string;
  title?: string;
  description?: string;
}

export default function IntegrationsSection({
  badge_icon_text,
  title,
  description,
}: IntegrationsSectionProps) {
  return (
    <section className="container mx-auto my-10 max-w-7xl px-4 md:my-20">
      <div className="mx-auto max-w-7xl">
        <SectionTitle
          desClassName="md:max-w-7xl text-sm md:text-xl text-gray-600 font-light"
          badgeIcon
          badgeTitle={badge_icon_text}
          title={title}
          description={description}
        />

        {/* Clients Integration Image */}
        <div className="h-10/12 mx-2 flex justify-center">
          <img
            src="storage/images/integration.webp"
            alt="Integration with favourite tools - ExamLock connects with various LMS platforms and learning applications"
            className="mt-8 h-auto w-full max-md:max-w-4xl"
          />
        </div>
      </div>
    </section>
  );
}
