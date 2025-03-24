"use client";

import Image from "next/image";
import Link from "next/link";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="home-banner relative h-screen">
        <div className="container-fluid no-padding h-full">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: "url('/images/landing.jpg')" }}
          ></div>

          <div className="backdrop-banner"></div>

          <div className="carousel-caption absolute inset-0 flex flex-col justify-center text-white px-12 md:px-20 z-10">
            <h3 className="text-3xl md:text-5xl font-bold mb-2">
              Nitro Consulting
            </h3>
            <p className="text-xl md:text-2xl">We Stand Together</p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <div style={{ backgroundImage: "url('/images/hd/hero-bg.jpg')" }}>
        <section className="wwa bg-gray-100 opacity-95 py-16 md:py-24 min-h-[80vh] flex justify-center items-center">
          <div className="container-fluid">
            <div className="content-wwa max-w-4xl mx-auto text-center">
              <h2 className="text-2xl md:text-3xl uppercase font-bold mb-8 text-gray-700">
                NITRO CONSULTING
              </h2>
              <p className="text-base md:text-lg mb-4 font-[300] text-gray-600">
                Nitro Consulting & Advisory help early-stage companies overcome
                challenges, scale up their business, and address nationwide
                early-stage companies issues
              </p>
              <p className="text-base md:text-lg font-[300] text-gray-600">
                Nitro is a boutique consulting and advisory specializing in
                assisting early-stage companies and startups in validating their
                valuation, creating compelling pitch decks, and providing
                strategic business consulting
              </p>
            </div>
          </div>
        </section>
      </div>

      {/* Portfolio Carousel */}
      {/* <section className="portfolio-carousel py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-center mb-12">
            Our Portfolio
          </h2>

          <div className="max-w-5xl mx-auto">
            <Carousel className="w-full">
              <CarouselContent>
                <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                  <div className="portfolio-item p-4 text-center">
                    <div className="mb-6 h-24 flex items-center justify-center">
                      <Image
                        src="/images/ritase-logo.png"
                        alt="Ritase"
                        width={150}
                        height={50}
                        className="object-contain"
                      />
                    </div>
                    <p className="text-sm mb-4">
                      Ritase is a logistics and trucking solution platform that
                      accommodates shippers and transporters needs in a form of
                      SaaS, marketplace, e-commerce, and e-wallet.
                    </p>
                    <a
                      href="https://ritase.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block px-4 py-2 border border-gray-800 hover:bg-gray-800 hover:text-white transition-colors"
                    >
                      Visit
                    </a>
                  </div>
                </CarouselItem>

                <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                  <div className="portfolio-item p-4 text-center">
                    <div className="mb-6 h-24 flex items-center justify-center">
                      <Image
                        src="/images/miota-logo.png"
                        alt="Miota"
                        width={150}
                        height={50}
                        className="object-contain"
                      />
                    </div>
                    <p className="text-sm mb-4">
                      Miota pioneered the implementation of IoT in Indonesia.
                      With innovative and solution-oriented approach, Miota
                      provides an end-to-end solution through their smart
                      ecosystem.
                    </p>
                    <a
                      href="https://miota.id"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block px-4 py-2 border border-gray-800 hover:bg-gray-800 hover:text-white transition-colors"
                    >
                      Visit
                    </a>
                  </div>
                </CarouselItem>

                <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                  <div className="portfolio-item p-4 text-center">
                    <div className="mb-6 h-24 flex items-center justify-center">
                      <Image
                        src="/images/mioto-logo.png"
                        alt="Mioto"
                        width={150}
                        height={50}
                        className="object-contain"
                      />
                    </div>
                    <p className="text-sm mb-4">
                      Mioto serves as the future Mobility-as-a-Service platform.
                      Utilizing the latest IoT technology to solve
                      inefficiencies in transportation & logistics.
                    </p>
                    <a
                      href="https://miota.id"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block px-4 py-2 border border-gray-800 hover:bg-gray-800 hover:text-white transition-colors"
                    >
                      Visit
                    </a>
                  </div>
                </CarouselItem>

                <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                  <div className="portfolio-item p-4 text-center">
                    <div className="mb-6 h-24 flex items-center justify-center">
                      <Image
                        src="/images/rentalq-logo.png"
                        alt="RentalQ"
                        width={150}
                        height={50}
                        className="object-contain"
                      />
                    </div>
                    <p className="text-sm mb-4">
                      RentalQ is a new online rental platform from Agung Rent
                      and Miota for B2B using Enterprise Fleet Management and
                      OBD2 modules with support from Miota Topology.
                    </p>
                    <a
                      href="https://rentalq.co.id"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block px-4 py-2 border border-gray-800 hover:bg-gray-800 hover:text-white transition-colors"
                    >
                      Visit
                    </a>
                  </div>
                </CarouselItem>
              </CarouselContent>
              <div className="flex justify-center mt-8">
                <CarouselPrevious className="relative static mr-2" />
                <CarouselNext className="relative static ml-2" />
              </div>
            </Carousel>
          </div>

          <div className="text-center mt-12">
            <Link
              href="/portofolio"
              className="inline-block px-6 py-3 bg-gray-800 text-white hover:bg-gray-900 transition-colors"
            >
              View Portfolio
            </Link>
          </div>
        </div>
      </section> */}
    </div>
  );
}
