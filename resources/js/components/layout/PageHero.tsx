import SectionTitle from "@/components/common/SectionTitle";
import { Button } from "@/components/ui/button";
import RequestDemo from "@/components/common/RequestDemo";

interface HeroProps {
  badgeTitle: string;
  title: string;
  description: string;
  isExtention?: boolean;
  isDownload?: boolean;
}

export default function Hero({
  badgeTitle,
  title,
  description,
  isExtention,
  isDownload = true,
}: HeroProps) {
  return (
    <div className="w-full py-20 text-center bg-linear-to-t from-white to-transparent px-4 xl:px-0">
      <SectionTitle
        badgeTitle={badgeTitle}
        description={description}
        badgeIcon={true}
      >
        {title}
      </SectionTitle>
      <div className="mt-6 flex justify-center gap-4 mx-auto">
        <div className="w-fit">
          <RequestDemo />
        </div>
        {isExtention ? (
          <a href="/extension">
            <Button variant="outline" size="lg" className="w-[150px]">
              Get Extension{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M12.293 5.293a1 1 0 0 1 1.414 0l6 6a1 1 0 0 1 0 1.414l-6 6a1 1 0 0 1-1.414-1.414L17.586 12l-5.293-5.293a1 1 0 0 1 0-1.414m-6 0a1 1 0 0 1 1.414 0l6 6a1 1 0 0 1 0 1.414l-6 6a1 1 0 0 1-1.414-1.414L11.586 12L6.293 6.707a1 1 0 0 1 0-1.414"
                />
              </svg>
            </Button>
          </a>
        ) : (
          isDownload && (
            <a href="/download">
              <Button variant="outline" size="lg" className="w-[150px]">
                Download{" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M12.293 5.293a1 1 0 0 1 1.414 0l6 6a1 1 0 0 1 0 1.414l-6 6a1 1 0 0 1-1.414-1.414L17.586 12l-5.293-5.293a1 1 0 0 1 0-1.414m-6 0a1 1 0 0 1 1.414 0l6 6a1 1 0 0 1 0 1.414l-6 6a1 1 0 0 1-1.414-1.414L11.586 12L6.293 6.707a1 1 0 0 1 0-1.414"
                  />
                </svg>
              </Button>
            </a>
          )
        )}
      </div>
    </div>
  );
}
