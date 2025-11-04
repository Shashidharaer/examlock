import AnnouncementCard from "@/components/layout/AnnoucementCard";
import SectionTitle from "@/components/common/SectionTitle";

interface AstroRelease {
  month: string;
  year: number;
  title: string;
  description: string;
  linkText: string;
  linkUrl: string;
  tags: string[];
  featured?: boolean;
}

const astroReleases: AstroRelease[] = [
  {
    month: "September",
    year: 2025,
    title: "Run Airflow 3.1 on Astro",
    description:
      "Airflow 3.1 is now GA on Astro bringing improved support for human-in-the-loop AI workflows, synchronous DAG execution, a new plugins interface, and server UI enhancements including native language support.",
    linkText: "Explore Airflow 3.1 on Astro",
    linkUrl: "#",
    tags: ["Astro"],
  },
  {
    month: "September",
    year: 2025,
    title: "Public Preview: Ship DAGs 10x faster with Astro IDE",
    description:
      "Author, test, and release production-ready DAGs from your browser with context-aware AI, zero local setup, and one-click deploys to Astro.",
    linkText: "Get Started with Astro IDE",
    linkUrl: "#",
    tags: ["Astro", "IDE"],
    featured: true,
  },
  {
    month: "April",
    year: 2025,
    title: "Run Airflow 3 on Astro",
    description:
      "Airflow 3 is now GA on Astro with DAG Versioning, Event-driven Scheduling, Remote Execution, and a new executor.",
    linkText: "Explore Airflow 3 on Astro",
    linkUrl: "#",
    tags: ["Astro"],
  },
  {
    month: "March",
    year: 2025,
    title: "Enhanced Alerts Now Support Scalable, Precise Targeting",
    description:
      "Enhanced Alerts let you match DAGs and tasks using patterns like 'contains' and apply rules across many workflows.",
    linkText: "Explore Update",
    linkUrl: "#",
    tags: ["Alerts"],
  },
  {
    month: "March",
    year: 2025,
    title: "Faster Debugging and SLA Monitoring in Observe",
    description:
      "SLA metrics and entity names in the Event Timeline make it easier to monitor and debug DAG performance.",
    linkText: "SLAs on Observe",
    linkUrl: "#",
    tags: ["Observe"],
  },
];

export default function Announcements() {
  return (
    <div>
      <div className="bg-linear-to-t from-white to-transparent pb-2">
        <section className="mx-auto w-full max-w-7xl my-20 px-4 text-center">
          <SectionTitle
            badgeTitle="What's New"
            title="Announcements"
            badgeIcon
            description="Discover what's new with ExamLock and our suite of products. This is where we announce new releases, feature upgrades, and important platform updates. Our goal is to keep you informed and ahead — with continuous improvements that make testing more secure, reliable, and efficient."
          />
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {astroReleases.map((release, index) => (
              <AnnouncementCard
                key={index}
                date={`${release.month} ${release.year}`}
                title={release.title}
                description={release.description}
                link={release.linkUrl}
                tags={release.tags}
                linkText={release.linkText}
                featured={release.featured}
              />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
