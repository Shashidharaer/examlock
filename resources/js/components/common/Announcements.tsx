import SectionTitle from '@/components/common/SectionTitle';
import AnnouncementCard from '@/components/common/AnnoucementCard';

interface AnnouncementCardProps {
    annoucement_card?: [
        {
            date?: string;
            title?: string;
            description?: string;
            link: string;
            tags: string[];
            linkText: string;
            featured?: boolean;
        },
    ];
}

export default function Announcements({ annoucement_card }: AnnouncementCardProps) {
    return (
        <div className="bg-linear-to-t from-white to-transparent pb-2">
            <section className="mx-auto my-20 w-full max-w-7xl px-4 text-center">
                <SectionTitle
                    badgeTitle="What's New"
                    title="Announcements"
                    badgeIcon
                    description="Discover what's new with ExamLock and our suite of products. This is where we announce new releases, feature upgrades, and important platform updates. Our goal is to keep you informed and ahead — with continuous improvements that make testing more secure, reliable, and efficient."
                />
                <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                    {annoucement_card?.map((release, index) => (
                        <AnnouncementCard
                            key={index}
                            date={release.date || ''}
                            title={release.title || ''}
                            description={release.description || ''}
                            link={release.link}
                            tags={release.tags}
                            linkText={release.linkText}
                            featured={release.featured}
                        />
                    ))}
                </div>
            </section>
        </div>
    );
}
