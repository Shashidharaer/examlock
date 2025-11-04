import SectionTitle from '@/components/common/SectionTitle';
import { Card, CardDescription, CardHeader } from '@/components/ui/card';

interface CompatibilitySectionProps {
    badge_icon_text?: string;
    title?: string;
    description?: string;
}

export default function CompatibilitySection({
    badge_icon_text,
    title,
    description,
}: CompatibilitySectionProps) {
    return (
        <section className="mx-auto my-10 w-full max-w-7xl px-4 md:my-20 xl:px-0">
            <SectionTitle
                badgeIcon={true}
                badgeTitle={badge_icon_text}
                title={title}
                description={description}
            />
            <div className="mx-auto flex w-full max-w-7xl flex-col gap-6 md:flex-row">
                <div className="w-full md:w-1/2">
                    <Card className="mx-auto mt-4 max-w-lg shadow-sm md:mx-0 md:mt-8 md:max-w-none">
                        <CardHeader className="flex flex-col gap-3">
                            Offline Exam Mode
                            <CardDescription>
                                Exams run without an internet connection, with
                                all data securely stored and automatically
                                submitted once reconnected. Our platform
                                supports offline test delivery across all
                                modalities.
                            </CardDescription>
                        </CardHeader>
                    </Card>
                    <Card className="mx-auto mt-6 max-w-lg shadow-sm md:mx-0 md:mt-8 md:max-w-none">
                        <CardHeader className="flex flex-col gap-3">
                            ADA-Compliant Design
                            <CardDescription>
                                Exams run without an internet connection, with
                                all data securely stored and automatically
                                submitted once reconnected. Our platform
                                supports offline test delivery across all
                                modalities.
                            </CardDescription>
                        </CardHeader>
                    </Card>
                </div>

                <div className="flex w-full items-center justify-center rounded-lg bg-white p-4 text-center font-medium text-gray-700 shadow-sm sm:p-6 md:mt-8 md:w-1/2">
                    <div className="border-1 border-primary/10 rounded-4xl px-6 py-6 sm:px-10 sm:py-8 md:px-12 lg:px-14">
                        <div className="border-1 border-primary/30 rounded-3xl px-6 py-4 sm:px-8 sm:py-6 md:px-10">
                            <div className="border-1 border-primary/40 rounded-3xl p-4 sm:p-6">
                                <div className="border-1 border-primary/50 mx-auto w-fit rounded-xl bg-[#F3F3F3] px-6 py-3 sm:px-8 sm:py-4">
                                    Offline Sync
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
