export default function TrustedCompaniesSection() {
  return (
    <section className="flex flex-col items-center container mx-auto px-4 xl:px-0 my-10 md:my-20 overflow-hidden">
      <div className="text-center mb-8">
        <p className="text-sm text-gray-600 font-medium">
          Trusted by 100+ high-growth startups
        </p>
      </div>

      <div className="relative w-full max-w-7xl overflow-hidden">
        <div className="flex animate-marquee whitespace-nowrap gap-8 opacity-60">
          {/* Duplicate list so it loops */}
          {[...Array(2)].map((_, i) => (
            <div key={i} className="flex items-center gap-8">
              <div className="flex items-center gap-2 text-gray-500">
                <div className="w-6 h-6 bg-gray-300 rounded"></div>
                <span className="font-medium text-sm">Primework</span>
              </div>
              <div className="flex items-center gap-2 text-gray-500">
                <div className="w-6 h-6 bg-gray-300 rounded-full"></div>
                <span className="font-medium text-sm">Logicroom</span>
              </div>
              <div className="flex items-center gap-2 text-gray-500">
                <div className="w-6 h-6 bg-gray-300 rounded"></div>
                <span className="font-medium text-sm">Designpoint</span>
              </div>
              <div className="flex items-center gap-2 text-gray-500">
                <div className="w-6 h-6 bg-gray-300 rounded"></div>
                <span className="font-medium text-sm">Logicbase</span>
              </div>
              <div className="flex items-center gap-2 text-gray-500">
                <div className="w-6 h-6 bg-gray-300 rounded"></div>
                <span className="font-medium text-sm">Graphicraft</span>
              </div>
              <div className="flex items-center gap-2 text-gray-500">
                <div className="w-6 h-6 bg-gray-300 rounded"></div>
                <span className="font-medium text-sm">Auraloom</span>
              </div>
              <div className="flex items-center gap-2 text-gray-500">
                <div className="w-6 h-6 bg-gray-300 rounded"></div>
                <span className="font-medium text-sm">Nexmark</span>
              </div>
              <div className="flex items-center gap-2 text-gray-500">
                <div className="w-6 h-6 bg-gray-300 rounded"></div>
                <span className="font-medium text-sm">Logicbase</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
