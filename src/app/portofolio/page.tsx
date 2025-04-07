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
      name: "Rezka Nayatama",
      logo: "/images/neska.png",
      description:
        "We assisted Rezka with comprehensive financial modeling, valuation, and strategies to enhance management efficiency, enabling them to make informed decisions and improve financial outcomes.",
      website: "https://rezkanayatama.com/id/",
    },
    {
      id: 2,
      name: "LA OMVI",
      logo: "/images/laomvi.png",
      description:
        "We provided valuation services using a market approach, helping La Omvi to accurately assess their market position and leverage growth opportunities.",
      website: "https://laomvi.com/",
    },
    {
      id: 3,
      name: "Duluin",
      logo: "/images/duluin.png",
      description:
        "We supported Duluin with valuation services using the income approach, ensuring a thorough analysis of their revenue streams and long-term financial viability. ",
      website: "https://duluin.com/",
    },
    {
      id: 4,
      name: "ADPList",
      logo: "/images/adplist.png",
      description:
        "Our expertise in go-to-market and user acquisition strategies enabled ADPList to effectively tap in to the new market and expand their user base.",
      website: "https://adplist.org/about-us",
    },
    {
      id: 5,
      name: "Trans Optima Perkasa",
      logo: "/images/taman-school.webp",
      description:
        "Our collaboration with TOP involved providing financial modeling and valuation services, to streamline their financial systems and achieve greater transparency.",
      website: "https://www.tamanschool.com/",
    },
  ];

  return (
    <div>
      {/* Banner */}
      <Banner
        backgroundImage="/images/porto.jpg"
        title="Growing enterprises to succeed"
      />

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="w-24 h-1 bg-gray-800 mx-auto mb-8"></div>
            <p className="text-xl max-w-3xl mx-auto">
              Our past experiences also differ in various industry to help us
              provide well-considered outputs and recommendations.
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
        </div>
      </section>
    </div>
  );
}
