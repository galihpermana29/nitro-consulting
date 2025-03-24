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
        "a leading company in the food processing industry, specializing in Konjac Roots (Amorphophallus Mueller). With our headquarters situated in the vibrant CBC Office District in Tangerang, Indonesia, we are proud to serve customers both locally and globally.",
      website: "https://rezkanayatama.com/id/",
    },
    {
      id: 2,
      name: "LA OMVI",
      logo: "/images/laomvi.png",
      description:
        "La Omvi embarked on its journey in Indonesia, employing an interdisciplinary approach to craft specific forms of expression, particularly in the visual realm.",
      website: "https://laomvi.com/",
    },
    {
      id: 3,
      name: "Duluin",
      logo: "/images/duluin.png",
      description:
        "Initially we aim to empower individuals with financial freedom and control by revolutionizing the way they access and manage the wages they earn, fostering a world where financial welfare can be accessed by everyone. ",
      website: "https://duluin.com/",
    },
    {
      id: 4,
      name: "ADPList",
      logo: "/images/adplist.png",
      description:
        "ADPList was born in 2021 during the COVID pandemic from a spreadsheet, and has since grown to over 32K+ mentors who have contributed over 150 million minutes of mentorship in almost every country across the globe, across all skills at every level of career.",
      website: "https://adplist.org/about-us",
    },
    {
      id: 5,
      name: "Tamanschool",
      logo: "/images/taman-school.webp",
      description:
        "Tamanschool is organization to make students feel safe and brave. This implies a commitment to creating a positive and supportive learning environment where students feel comfortable expressing themselves and taking risks.",
      website: "https://www.tamanschool.com/",
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
        </div>
      </section>
    </div>
  );
}
