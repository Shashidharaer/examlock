import { useState, useRef, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Icon } from "@iconify/react";
import { Button } from "./button";
import { Link } from "@inertiajs/react";

const ExamLockPages: { title: string; href: string; description: string }[] = [
  {
    title: "Offline Exam Mode",
    href: "/products/examlock",
    description: "Exams run offline with secure data submission",
  },
  {
    title: "Realtime Activity Tracker",
    href: "/products/examlock",
    description:
      "For sighted users to preview content available behind a link.",
  },
  {
    title: "Supports Mobile Aplication",
    href: "/products/examlock",
    description:
      "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
  },
  {
    title: "Detect USB/HDMI/VGA",
    href: "/products/examlock",
    description: "Visually or semantically separates content.",
  },
  {
    title: "Dual Monitor Detector",
    href: "/products/examlock",
    description:
      "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
  },
  {
    title: "Virtual Machine Detector",
    href: "/products/examlock",
    description:
      "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
  },
  {
    title: "Bluetooth Detector",
    href: "/products/examlock",
    description:
      "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
  },
  {
    title: "Track IP",
    href: "/products/examlock",
    description:
      "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
  },
  {
    title: "Block WiFi Tether",
    href: "/products/examlock",
    description:
      "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
  },
];
const ExamLockLitePages: {
  title: string;
  href: string;
  description: string;
}[] = [
  {
    title: "Browser Extension",
    href: "/products/examlock-lite",
    description:
      "Browser extension offers a secure and controlled environment for online assessments.",
  },
  {
    title: "Full-Screen Mode Only",
    href: "/products/examlock-lite",
    description:
      "Once the test starts, the browser switches to full-screen mode.",
  },
  {
    title: "Randomized Screenshots & Pictures",
    href: "/products/examlock-lite",
    description:
      "ExamLock Lite captures screenshots & pictures at random intervals during the exam.",
  },
];

const ExamLockLensPages: {
  title: string;
  href: string;
  description: string;
}[] = [
  {
    title: "Browser Extension",
    href: "/products/examlock-lite",
    description:
      "Browser extension offers a secure and controlled environment for online assessments.",
  },
  {
    title: "Full-Screen Mode Only",
    href: "/products/examlock-lite",
    description:
      "Once the test starts, the browser switches to full-screen mode.",
  },
  {
    title: "Randomized Screenshots & Pictures",
    href: "/products/examlock-lite",
    description:
      "ExamLock Lite captures screenshots & pictures at random intervals during the exam.",
  },
];

const LMSPages: { title: string; href: string; description: string }[] = [
  {
    title: "Browser Extension",
    href: "/products/examlock-lite",
    description:
      "Browser extension offers a secure and controlled environment for online assessments.",
  },
  {
    title: "Full-Screen Mode Only",
    href: "/products/examlock-lite",
    description:
      "Once the test starts, the browser switches to full-screen mode.",
  },
  {
    title: "Randomized Screenshots & Pictures",
    href: "/products/examlock-lite",
    description:
      "ExamLock Lite captures screenshots & pictures at random intervals during the exam.",
  },
];
const pages: {
  pages: { title: string; description: string; href: string };
  info: {
    image: React.ReactNode;
    title: string;
    description: string;
    button: { text: string; href: string };
  };
}[] = [
  {
    pages: {
      title: "ExamLock",
      description: "Secure browser environment for test-taking.",
      href: "/products/examlock",
    },
    info: {
      image: <Icon icon="tdesign:download" className="text-4xl text-primary" />,
      title: "Total Security. Zero Compromise.",
      description:
        "Our platform is built for flexibility and compatibility, supporting a wide range of authentication protocols, learning standards, and payment gateways to suit your business needs.",
      button: {
        text: "Download",
        href: "/download",
      },
    },
  },
  {
    pages: {
      title: "ExamLock Lite",
      description:
        "ExamLock Lite Browser Extension offers a secure and controlled environment for online assessments ensuring academic integrity with every click.",
      href: "/products/examlock-lite",
    },
    info: {
      image: <Icon icon="mdi:puzzle" className="text-4xl text-primary" />,
      title: "Lock Down Exams with Confidence",
      description:
        "ExamLock Lite Browser Extension offers a secure and controlled environment for online assessments ensuring academic integrity with every",
      button: {
        text: "Get Extension",
        href: "/extension",
      },
    },
  },
  {
    pages: {
      title: "ExamLens",
      description:
        "Deliver paper-based assessments, scan answer sheets with any device, and access instant digital insights, all with Gradient's smart scanning technology.",
      href: "/products/examlens",
    },
    info: {
      image: <Icon icon="tdesign:download" className="text-4xl text-primary" />,
      title: "Keep What Works. Enhance What's Possible.",
      description:
        "Deliver paper-based assessments, scan answer sheets with any device, and access instant digital insights, all with Gradient's smart scanning technology.",
      button: {
        text: "Download",
        href: "/download",
      },
    },
  },
  {
    pages: {
      title: "Learning Management System",
      description:
        "Deliver personalized learning experiences at scale. Streamline course management, communication, and ensure academic integrity.",
      href: "/products/lms",
    },
    info: {
      image: <Icon icon="mdi:play" className="text-4xl text-primary" />,
      title: "Smart Learning. Real Results.",
      description:
        "Enhance performance, track progress, and ensure compliance with a Learning Management System built for results. From onboarding to certification, our LMS simplifies course delivery, centralizes assessment management, gives you the visibility to optimize learning and drive measurable outcomes.",
      button: {
        text: "Book a Demo",
        href: "/contact",
      },
    },
  },
];

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hoveredPageIndex, setHoveredPageIndex] = useState<number>(0);
  const [selectedPath, setSelectedPath] = useState<string>("/");
  const timeoutRef = useRef<number | null>(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setSelectedPath(window.location.pathname || "/");
    }
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  // Open/close menu without altering URL on hover
  const handleMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
    setIsMenuOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = window.setTimeout(() => {
      setIsMenuOpen(false);
    }, 200);
  };

  const isProductsActive = selectedPath.startsWith("/products");

  const featureMap: Record<
    string,
    { title: string; href: string; description: string }[]
  > = {
    "/products/examlock": ExamLockPages,
    "/products/examlock-lite": ExamLockLitePages,
    "/products/examlens": ExamLockLensPages,
    "/products/lms": LMSPages,
  };

  const currentFeatures =
    featureMap[pages[hoveredPageIndex]?.pages.href || ""] || [];

  return (
    <div className="hidden lg:flex md:gap-6 md:items-center h-full">
      <Link
        href="/"
        onClick={() => setSelectedPath("/")}
        className={cn(
          "text-gray-700 hover:text-gray-900 font-medium text-sm transition-colors h-full flex justify-center items-center",
          { active: selectedPath === "/" }
        )}
      >
        Home
      </Link>
      {/* <span className="bg-primary h-0.5 w-5 absolute bottom-0"></span> */}
      <div
        className="group h-full"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <Link
          href="#"
          onClick={() => setSelectedPath("/products")}
          className={cn(
            "text-gray-700 hover:text-gray-900 font-medium text-sm transition-colors h-full flex justify-center items-center",
            { active: isProductsActive }
          )}
        >
          Products
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M12 14.975q-.2 0-.375-.062T11.3 14.7l-4.6-4.6q-.275-.275-.275-.7t.275-.7t.7-.275t.7.275l3.9 3.9l3.9-3.9q.275-.275.7-.275t.7.275t.275.7t-.275.7l-4.6 4.6q-.15.15-.325.213t-.375.062"
            />
          </svg>
        </Link>

        <div
          id="products-menu"
          className={cn(
            "hidden absolute justify-start sm:w-full xl:w-7xl h-fit bg-white left-0 top-[4rem] rounded-lg shadow-lg border border-[#E5E7EB] z-50",
            { flex: isMenuOpen }
          )}
        >
          <div className="text-[14px] border-r-1 p-4 flex flex-col gap-2 w-content whitespace-nowrap">
            <h4 className="font-medium uppercase text-[#6B7280] mb-4">
              Products
            </h4>
            {pages.map((item, idx) => (
              <Link
                key={item.pages.title}
                href={item.pages.href}
                onMouseEnter={() => {
                  // only update the hover state; do not change URL
                  setHoveredPageIndex(idx);
                }}
                onClick={() => setSelectedPath(item.pages.href || "/")}
                className={cn(
                  "py-2 px-2 rounded-sm cursor-pointer transition-colors text-sm block",
                  {
                    "bg-primary/5 text-primary": hoveredPageIndex === idx,
                    "hover:bg-accent hover:text-primary":
                      hoveredPageIndex !== idx,
                  }
                )}
                aria-current={hoveredPageIndex === idx ? "true" : undefined}
              >
                {item.pages.title}
              </Link>
            ))}
          </div>
          <div className="border-r-1 py-4 px-8 flex flex-col w-full xl:min-w-[40rem]">
            {pages[hoveredPageIndex] && (
              <>
                <h3 className="text-2xl text-primary font-medium mb-2">
                  {pages[hoveredPageIndex].pages.title}
                </h3>
                <p className="text-[14px] font-light text-[#6B7280] w-min min-w-[28rem]">
                  {pages[hoveredPageIndex].pages.description}
                </p>
                <div className="my-4 grid lg:grid-cols-2 xl:grid-cols-3 gap-5 cursor-pointer">
                  {currentFeatures.map((items) => {
                    return (
                      <Link
                        key={items.title}
                        href={items.href}
                        // do not alter URL on hover
                        onClick={() => setSelectedPath(items.href)}
                        className="text-[12px] bg-[#F9FAFB80] border border-[#E5E7EB] rounded-lg p-4 max-w-xs block"
                      >
                        <h4 className="font-medium">{items.title}</h4>
                        <p className="font-light text-[#6B7280] line-clamp-2 mt-2">
                          {items.description}
                        </p>
                      </Link>
                    );
                  })}
                </div>
              </>
            )}
          </div>
          <div className="p-4 sm:min-w-[18rem] xl:w/full w-content flex flex-col justify-center items-center gap-2 text-center">
            {pages[hoveredPageIndex] && (
              <div className="flex flex-col items-center gap-3">
                <div className="w-20 h-20 bg-primary/5 rounded-full p-2 flex items-center justify-center relative">
                  {typeof pages[hoveredPageIndex].info.image === "string" ? (
                    <img
                      src={pages[hoveredPageIndex].info.image}
                      alt={pages[hoveredPageIndex].info.title}
                      className="max-h-10"
                    />
                  ) : (
                    pages[hoveredPageIndex].info.image
                  )}
                  <span className="absolute w-20 h-20 border-[2px] border-t-transparent border-b-transparent border-primary/60 rounded-full animate-spin-slow"></span>
                </div>
                <h4 className="mt-2">{pages[hoveredPageIndex].info.title}</h4>
                <p className="text-[14px] font-light text-[#6B7280] lg:max-w-[15rem]">
                  {pages[hoveredPageIndex].info.description}
                </p>
                <a href={pages[hoveredPageIndex].info.button.href}>
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-primary text-primary hover:bg-blue-50 my-4 shadow-none"
                  >
                    {pages[hoveredPageIndex].info.button.text}
                    <Icon
                      icon="line-md:chevron-double-right"
                      className="inline-block ml-1"
                    />
                  </Button>
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
      <Link
        href="/integration"
        onClick={() => setSelectedPath("/integration")}
        className={cn(
          "text-gray-700 hover:text-gray-900 font-medium text-sm transition-colors h-full flex justify-center items-center",
          { active: selectedPath === "/integration" }
        )}
      >
        Integration
      </Link>
      <Link
        href="/docs"
        onClick={() => setSelectedPath("/docs")}
        className={cn(
          "text-gray-700 hover:text-gray-900 font-medium text-sm transition-colors h-full flex justify-center items-center",
          { active: selectedPath === "/docs" }
        )}
      >
        Docs
      </Link>
      <Link
        href="/about"
        onClick={() => setSelectedPath("/about")}
        className={cn(
          "text-gray-700 hover:text-gray-900 font-medium text-sm transition-colors h-full flex justify-center items-center",
          { active: selectedPath === "/about" }
        )}
      >
        About Us
      </Link>
    </div>
  );
}
