import RequestDemo from '@/components/common/RequestDemo';

interface LetterProps {
    title?: string;
    description?: string | React.ReactNode;
}

export default function Letter({ title, description }: LetterProps) {
    return (
        <section className="my-10 w-full px-4 md:my-20">
            <div className="border-1 border-primary mx-auto flex w-full max-w-7xl flex-col items-center gap-6 rounded-lg bg-[linear-gradient(rgba(255,255,255,0.5),rgba(255,255,255,0.5)),url('/storage/images/card-bg.png')] bg-cover bg-center bg-no-repeat p-12">
                <h4 className="text-prime max-w-2xl text-center text-2xl font-medium md:text-3xl">
                    {title}
                </h4>
                <p className="max-w-2xl text-center text-sm font-light md:text-base">
                    {description}
                </p>
                <RequestDemo />
            </div>
        </section>
    );
}
