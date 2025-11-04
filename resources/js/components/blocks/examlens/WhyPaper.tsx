import SectionTitle from '@/components/common/SectionTitle';

interface WhyPaperProps {
    title?: string;
    description?: string;
}

export default function WhyPaper({ title, description }: WhyPaperProps) {
    return (
        <section className="mx-auto my-10 w-full max-w-7xl px-4 md:my-20 lg:mb-40 xl:px-0">
            <SectionTitle
                title={title}
                description={description}
            />
            <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-8">
                <span className="flex flex-col items-center gap-4 rounded-lg bg-white px-4 py-6 text-center shadow-md">
                    <p>Preserve academic integrity</p>
                </span>
                <span className="flex flex-col items-center gap-4 rounded-lg bg-white px-4 py-6 text-center shadow-md">
                    <p>Avoid tech disruptions</p>
                </span>
                <span className="flex flex-col items-center gap-4 rounded-lg bg-white px-4 py-6 text-center shadow-md">
                    <p>Reduce student screen fatigue</p>
                </span>
            </div>
        </section>
    );
}
