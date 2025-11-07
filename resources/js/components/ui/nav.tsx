import { useState, useRef, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Icon } from "@iconify/react";
import { Button } from "./button";
import { Link } from "@inertiajs/react";
import { useNavigationByHandle } from "@/components/NavigationProvider";

export default function Navigation() {
  const headerNav = useNavigationByHandle('header');
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

  // Return null if no navigation data
  if (!headerNav || !headerNav.tree) {
    console.error('No header navigation data found:', headerNav);
    return null;
  }
  
  // Debug: Log navigation data
  console.log('Header Navigation:', headerNav);
  console.log('Header Nav Tree:', headerNav.tree);

  // Find navigation items from Statamic by title (not id, since CP uses UUIDs)
  const productsNav = headerNav.tree.find((item) => item.title.toLowerCase() === 'products');
  const productPages = productsNav?.children || [];
  const homeNav = headerNav.tree.find((item) => item.title.toLowerCase() === 'home');
  const integrationNav = headerNav.tree.find((item) => item.title.toLowerCase() === 'integration');
  const docsNav = headerNav.tree.find((item) => item.title.toLowerCase() === 'docs');
  const aboutNav = headerNav.tree.find((item) => item.title.toLowerCase() === 'about us');

  const isProductsActive = selectedPath.startsWith("/products");

  //Get current product and its features
  const currentProduct = productPages[hoveredPageIndex];
  const currentFeatures = currentProduct?.children || [];

  return (
    <div className="hidden lg:flex md:gap-6 md:items-center h-full">
      {homeNav && (
        <Link
          href={homeNav.url}
          onClick={() => setSelectedPath(homeNav.url)}
          className={cn(
            "text-gray-700 hover:text-gray-900 font-medium text-sm transition-colors h-full flex justify-center items-center",
            { active: selectedPath === homeNav.url }
          )}
        >
          {homeNav.title}
        </Link>
      )}
      
      {productsNav && productPages.length > 0 && (
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
          {productsNav.title}
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
            {productPages.map((item, idx) => (
              <Link
                key={item.id}
                href={item.url || '#'}
                onMouseEnter={() => {
                  setHoveredPageIndex(idx);
                }}
                onClick={() => setSelectedPath(item.url || "/")}
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
                {item.title}
              </Link>
            ))}
          </div>
          <div className="border-r-1 py-4 px-8 flex flex-col w-full xl:min-w-[40rem]">
            {currentProduct && (
              <>
                <h3 className="text-2xl text-primary font-medium mb-2">
                  {currentProduct.title}
                </h3>
                <p className="text-[14px] font-light text-[#6B7280] w-min min-w-[28rem]">
                  {currentProduct.data?.nav_description || currentProduct.data?.description || ''}
                </p>
                <div className="my-4 grid lg:grid-cols-2 xl:grid-cols-3 gap-5 cursor-pointer">
                  {currentFeatures.map((feature) => {
                    return (
                      <Link
                        key={feature.id}
                        href={feature.url || '#'}
                        onClick={() => setSelectedPath(feature.url || '#')}
                        className="text-[12px] bg-[#F9FAFB80] border border-[#E5E7EB] rounded-lg p-4 max-w-xs block"
                      >
                        <h4 className="font-medium">{feature.title}</h4>
                        <p className="font-light text-[#6B7280] line-clamp-2 mt-2">
                          {feature.data?.description || ''}
                        </p>
                      </Link>
                    );
                  })}
                </div>
              </>
            )}
          </div>
          <div className="p-4 sm:min-w-[18rem] xl:w/full w-content flex flex-col justify-center items-center gap-2 text-center">
            {currentProduct && (
              <div className="flex flex-col items-center gap-3">
                <div className="w-20 h-20 bg-primary/5 rounded-full p-2 flex items-center justify-center relative">
                  {currentProduct.data?.nav_icon || currentProduct.data?.icon ? (
                    <Icon icon={currentProduct.data?.nav_icon || currentProduct.data?.icon} className="text-4xl text-primary" />
                  ) : (
                    <Icon icon="mdi:package" className="text-4xl text-primary" />
                  )}
                  <span className="absolute w-20 h-20 border-[2px] border-t-transparent border-b-transparent border-primary/60 rounded-full animate-spin-slow"></span>
                </div>
                <h4 className="mt-2">{currentProduct.data?.info_title || currentProduct.title}</h4>
                <p className="text-[14px] font-light text-[#6B7280] lg:max-w-[15rem]">
                  {currentProduct.data?.info_description || currentProduct.data?.description || ''}
                </p>
                {currentProduct.data?.button_url && (
                  <a href={currentProduct.data.button_url}>
                    <Button
                      variant="outline"
                      size="sm"
                      className="border-primary text-primary hover:bg-blue-50 my-4 shadow-none"
                    >
                      {currentProduct.data?.button_text || 'Learn More'}
                      <Icon
                        icon="line-md:chevron-double-right"
                        className="inline-block ml-1"
                      />
                    </Button>
                  </a>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
      )}
      
      {integrationNav && (
        <Link
          href={integrationNav.url}
          onClick={() => setSelectedPath(integrationNav.url)}
          className={cn(
            "text-gray-700 hover:text-gray-900 font-medium text-sm transition-colors h-full flex justify-center items-center",
            { active: selectedPath === integrationNav.url }
          )}
        >
          {integrationNav.title}
        </Link>
      )}
      
      {docsNav && (
        <Link
          href={docsNav.url}
          onClick={() => setSelectedPath(docsNav.url)}
          className={cn(
            "text-gray-700 hover:text-gray-900 font-medium text-sm transition-colors h-full flex justify-center items-center",
            { active: selectedPath === docsNav.url }
          )}
          target={docsNav.data?.target}
        >
          {docsNav.title}
        </Link>
      )}
      
      {aboutNav && (
        <Link
          href={aboutNav.url}
          onClick={() => setSelectedPath(aboutNav.url)}
          className={cn(
            "text-gray-700 hover:text-gray-900 font-medium text-sm transition-colors h-full flex justify-center items-center",
            { active: selectedPath === aboutNav.url }
          )}
        >
          {aboutNav.title}
        </Link>
      )}
    </div>
  );
}
