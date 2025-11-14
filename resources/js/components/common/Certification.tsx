import SectionTitle from "./SectionTitle";

interface CertificateionProps {
  title?: string;
  description?: string;
}

export default function Certification({
  title,
  description,
}: CertificateionProps) {
  const badges = [
    { label: "GDPR", src: "/storage/products/GDPR.svg" },
    { label: "COPPA", src: "/storage/products/COPPA.svg" },
    { label: "FERPA", src: "/storage/products/FERPA.svg" },
    { label: "ISO 9001:2015", src: "/storage/products/iso-9001_2015.svg" },
    { label: "ISO 27001:2022", src: "/storage/products/iso-27001_2022.svg" },
    { label: "ISO 27701:2019", src: "/storage/products/iso-27701_2019.svg" },
    { label: "PCI DSS", src: "/storage/products/pci-dss.svg" },
    { label: "SOC 2 II", src: "/storage/products/soc2-ii.svg" },
  ];

  return (
    <section className="px-4 my-8">
      <div className="mx-auto max-w-7xl">
        <SectionTitle
          title={title || "Scale with security."}
          description={
            description ||
            "ExamLock is audited and certified by industry-leading third party standards."
          }
        />

        <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-6 sm:gap-8 lg:gap-10 place-items-center">
          {badges.map(({ label, src }) => (
            <div
              key={label}
              className="flex flex-col gap-3 sm:gap-4 justify-center items-center"
            >
              <span className="p-4 sm:p-5 lg:p-6 border bg-white rounded-full">
                <img
                  src={src}
                  alt={label}
                  className="size-6 sm:size-7 lg:size-8"
                  loading="lazy"
                />
              </span>
              <p className="text-center text-xs sm:text-sm text-neutral-500 font-light">
                {label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
