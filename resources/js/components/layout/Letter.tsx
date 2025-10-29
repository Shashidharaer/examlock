import RequestDemo from "@/components/common/RequestDemo";

interface LetterProps {
  title: string;
  description: string | React.ReactNode;
}

export default function Letter({ title, description }: LetterProps) {
  return (
    <div className="flex flex-col items-center gap-6 bg-[linear-gradient(rgba(255,255,255,0.5),rgba(255,255,255,0.5)),url('/images/card-bg.png')] bg-cover bg-center bg-no-repeat p-12 rounded-lg w-full max-w-7xl border-1 border-primary mx-auto">
      <h4 className="text-prime text-center text-2xl md:text-3xl font-medium max-w-2xl">
        {title}
      </h4>
      <p className="text-sm md:text-base font-light text-center max-w-2xl">
        {description}
      </p>
      <RequestDemo />
    </div>
  );
}
