import Banner from "@/components/Banner";
import Image from "next/image";

interface PortfolioCompany {
  id: number;
  name: string;
  logo: string;
  description: string;
  website: string;
}

export default function PortfolioPage() {
  const portfolioCompanies: PortfolioCompany[] = [
    {
      id: 1,
      name: "Ritase",
      logo: "/images/ritase-logo.png",
      description:
        "Ritase is a logistics and trucking solution platform that accommodates shippers and transporters needs in a form of SaaS, marketplace, e-commerce, and e-wallet all within one distinguished platform based on lifelong field experience.",
      website: "https://ritase.com/",
    },
    {
      id: 2,
      name: "Miota",
      logo: "/images/miota-logo.png",
      description:
        "Miota pioneered the implementation of IoT in Indonesia. With innovative and solution-oriented approach, Miota became the first company to provide an end-to-end solution through their smart ecosystem. Miota are paving the way for the future of IoT nationwide and international.",
      website: "https://miota.id/",
    },
    {
      id: 3,
      name: "Mioto",
      logo: "/images/mioto-logo.png",
      description:
        "Mioto serves as the future Mobility-as-a-Service platform. Utilizing the latest IoT technology aims to solve the inefficiencies, transparency, and control in transportation & logistics by implementing state-of-the-art devices, analytical research, optimization, and flexibility.",
      website: "https://miota.id/",
    },
    {
      id: 4,
      name: "RentalQ",
      logo: "/images/rentalq-logo.png",
      description:
        "RentalQ is a new online rental platform from Agung Rent and Miota for B2B using Enterprise Fleet Management and OBD2 modules with support from Miota Topology. rentalQ strives to be the next generation rental platform in Indonesia.",
      website: "https://rentalq.co.id/",
    },
    {
      id: 5,
      name: "DTECH-ENGINEERING",
      logo: "/images/dtech-logo.png",
      description:
        "DTECH-ENGINEERING is a global technology company with a core of expertise in novel tech research and development and end-to-end product development. DTECH-ENGINEERING is the first company that invented high technology CNC Milling Machine in Indonesia and our product Supermill became a pioneer of CNC milling machines made in Indonesia.",
      website: "https://dtech-engineering.com/",
    },
    {
      id: 6,
      name: "Rezka Nayatama",
      logo: "/images/rezka-logo.png",
      description:
        "Rezka Nayatama is a company in the hospitality sector that is currently on the implementation of an agro-tourism industry (Konjac plant) as a supplementary development for its future seafront resort in West Lombok.",
      website: "https://companieshouse.id/rezka-nayatama",
    },
    {
      id: 7,
      name: "Rajamobil",
      logo: "/images/rajamobil-logo.png",
      description:
        "Rajamobil provides access to customers and dealers in a single unified platform, managing digital business for car dealerships. Rajamobil strengths lie in their direct access to multiple brands and dealers across Indonesia thatll enhance sales activities.",
      website: "https://www.rajamobil.com/",
    },
  ];

  return (
    <div>
      {/* Banner */}
      <Banner
        backgroundImage="/images/porto.jpg"
        title="It's a mutually beneficial bond"
      />

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="w-24 h-1 bg-gray-800 mx-auto mb-8"></div>
            <p className="text-xl max-w-3xl mx-auto">
              AV combines high-growth companies with sustainable business model
              and effective ecosystem
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
            {portfolioCompanies.map((company) => (
              <div
                key={company.id}
                className="portfolio-card border border-gray-200 p-6 flex flex-col"
              >
                <div className="h-20 flex items-center justify-center mb-6">
                  <Image
                    src={company.logo}
                    alt={company.name}
                    width={150}
                    height={50}
                    className="object-contain max-h-16"
                  />
                </div>

                <p className="text-sm flex-grow mb-6">{company.description}</p>

                <div className="mt-auto">
                  <a
                    href={company.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block px-6 py-2 border border-gray-800 hover:bg-gray-800 hover:text-white transition-colors"
                  >
                    Visit
                  </a>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <p className="text-lg mb-4">
              We invest across all stages and sectors, with a focus on
              enterprise, life and frontier technology.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
