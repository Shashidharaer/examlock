import SectionTitle from '@/components/common/SectionTitle';

interface WhyPaperProps {
    title?: string;
    description?: string;
}

export default function WhyPaper({ title, description }: WhyPaperProps) {
    return (
        <section className="my-10 w-full px-4 md:my-20">
            <div className='max-w-7xl mx-auto'>
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
            </div>
        </section>
    );
}
