import SectionTitle from "@/components/common/SectionTitle";
import { Button } from "@/components/ui/button";
import RequestDemo from "@/components/common/RequestDemo";

interface HeroProps {
  badge_text?: string;
  heading?: {text_in_black?: string; text_in_primary?: string};
  description?: string;
  disableCTA?: boolean;

  show_badge?: boolean;
  show_contact_button?: boolean;
  show_extension_button?: boolean;
  show_download_button?: boolean;
  show_book_a_demo_button?: boolean;
}

export default function Hero({
  badge_text,
  heading,
  description,

  show_badge,
  show_contact_button,
  show_extension_button,
  show_download_button,
  show_book_a_demo_button,
}: HeroProps) {
  return (
    <div className="w-full py-20 text-center bg-linear-to-t from-white to-transparent px-4 xl:px-0 mb-0">
      <SectionTitle
        badgeTitle={badge_text ? badge_text : 'No Badge Provided'}
        description={description ? description : 'No Description Provided'}
        badgeIcon={show_badge}
      >
        <span className="text-black">{heading?.text_in_black}</span><br/>
        <span className="text-primary"> {heading?.text_in_primary}</span>
      </SectionTitle>
      <div className="mt-6 flex justify-center gap-4 mx-auto">
        {(show_book_a_demo_button !== false) && ( 
        <div className="w-fit">
          <RequestDemo />
        </div>)}
        {show_contact_button && (<a href="/contact">
            <Button variant="default" size="lg" className="w-[150px]">
              Contact Us
              <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M16.175 13H5q-.425 0-.712-.288T4 12t.288-.712T5 11h11.175l-4.9-4.9q-.3-.3-.288-.7t.313-.7q.3-.275.7-.288t.7.288l6.6 6.6q.15.15.213.325t.062.375t-.062.375t-.213.325l-6.6 6.6q-.275.275-.687.275T11.3 19.3q-.3-.3-.3-.712t.3-.713z"
              />
            </svg>
            </Button>
          </a>)}
        {show_extension_button ? (
          <a href="/extension">
            <Button variant="outline" size="lg" className="w-[150px]">
              Get Extension
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
          show_download_button && (
            <a href="/download">
              <Button variant="outline" size="lg" className="w-[150px]">
                Download
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
