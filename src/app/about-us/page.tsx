import Banner from "@/components/Banner";
import { Handshake, Landmark, Weight } from "lucide-react";
import Image from "next/image";
import valueClarity from "@/assets/value-clarity.png";
import visionAlignment from "@/assets/vision-alignment.png";
import sustainableGrowth from "@/assets/sustainable-growth.png";

import fundraising from "@/assets/fundraising.png";
import riskManagement from "@/assets/risk-management.png";
import strategy from "@/assets/strategy.png";

export default function AboutUs() {
  return (
    <div>
      {/* Banner */}
      <Banner
        backgroundImage="/images/hd/about-bg.jpg"
        title="Focused on elevating early-stage enterprises"
      />
      <section className="history bg-gray-200 py-16 md:py-24 min-h-[60vh] flex justify-center items-center">
        <div className="container-fluid">
          <div className="content-wwa max-w-4xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl uppercase font-bold mb-8 text-gray-800">
              About Us
            </h2>
            <p className="text-base md:text-lg font-[300] text-gray-800 max-w-[600px] mx-auto">
              Nitro Consulting & Advisory is a boutique consulting and advisory
              firm specializing in assisting early-stage enterprises in
              validating their valuation, creating compelling pitch decks, and
              providing strategic business consulting.
            </p>
            <p className="text-base md:text-lg font-[300] text-gray-800 max-w-[600px] mx-auto mt-[18px]">
              We help early-stage enterprises overcome challenges, scale up
              their business, and address nationwide early-stage enterprise
              issues.
            </p>
          </div>
        </div>
      </section>
      {/* About Us Section */}
      <div
        style={{
          backgroundImage: "url('/images/hd/about-bg.jpg')",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Industry Section */}
        <section className="industry py-16 bg-gray-900 opacity-95 pt-[100px]">
          <div className="container-fluid no-padding max-w-5xl mx-auto">
            <h2 className="text-2xl md:text-3xl uppercase text-center font-bold mb-8 text-white">
              Our Objectives
            </h2>
            {/* <p className="text-center text-lg md:text-xl mb-12 text-white">
              What actually our objectives for your early business
            </p> */}

            <div className="wrapindustry mx-[18px] md:mx-0">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div id="fund-size">
                  <div className="industrycontent p-6 bg-gray-100 rounded-lg text-center h-full">
                    <Image
                      src={valueClarity}
                      width={40}
                      height={40}
                      alt="icon"
                      className="mx-auto mb-[12px]"
                    />
                    <h4 className="text-lg md:text-xl font-bold mb-4">
                      Value Clarity
                    </h4>
                    <p className="text-base">
                      We empowers businesses to gain a clear understanding of
                      their market value, position themselves competitively
                      within industry
                    </p>
                  </div>
                </div>

                <div id="fund-size">
                  <div className="industrycontent p-6 bg-gray-100 rounded-lg text-center h-full">
                    <Image
                      src={visionAlignment}
                      width={40}
                      height={40}
                      alt="icon"
                      className="mx-auto mb-[12px]"
                    />
                    <h4 className="text-lg md:text-xl font-bold mb-4">
                      Vision Alignment
                    </h4>
                    <p className="text-base">
                      We help companies effectively communicate their vision and
                      potentials to investors through narratives and
                      well-structured pitch materials
                    </p>
                  </div>
                </div>

                <div id="fund-size">
                  <div className="industrycontent p-6 bg-gray-100 rounded-lg text-center h-full">
                    <Image
                      src={sustainableGrowth}
                      width={40}
                      height={40}
                      alt="icon"
                      className="mx-auto mb-[12px]"
                    />
                    <h4 className="text-lg md:text-xl font-bold mb-4">
                      Sustainable Growth
                    </h4>
                    <p className="text-base">
                      We develop sustainable growth plans, ensuring long-term
                      success by addressing key operational, financial, and
                      market challenges
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="our-services py-16 bg-gray-900 opacity-95 pb-[100px]">
          <div className="container-fluid">
            <div className="max-w-4xl mx-auto">
              <h3 className="text-2xl md:text-3xl font-bold text-center mb-8 text-gray-200">
                OUR SERVICES
              </h3>

              <p className="text-center text-base md:text-lg mb-12 text-gray-200">
                Our services are designed to establish a seamless and
                comprehensive analysis to address your pain points.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
                <div className="service-item text-center">
                  <div className="w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Image
                      src={fundraising}
                      width={40}
                      height={40}
                      alt="icon"
                      className="mx-auto "
                    />
                  </div>
                  <h4 className="text-lg font-bold mb-2 text-gray-200">
                    Fundraising & Finance
                  </h4>
                  <p className="text-[#d3d3d3]">Investment deals</p>
                  <p className="text-[#d3d3d3]">Pitch deck assistance</p>
                  <p className="text-[#d3d3d3]">Company valuation</p>
                  <p className="text-[#d3d3d3]">Financial modelling</p>
                  <p className="text-[#d3d3d3]">Financial statement creation</p>
                </div>
                <div className="service-item text-center">
                  <div className="w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Image
                      src={strategy}
                      width={40}
                      height={40}
                      alt="icon"
                      className="mx-auto "
                    />
                  </div>
                  <h4 className="text-lg font-bold mb-2 text-gray-200">
                    Strategy, Operations, & Business Growth
                  </h4>
                  <p className="text-[#d3d3d3]">Business growth strategy</p>
                  <p className="text-[#d3d3d3]">Go-to-Market strategy</p>
                  <p className="text-[#d3d3d3]">Market/consumer research</p>
                </div>
                <div className="service-item text-center">
                  <div className="w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Image
                      src={riskManagement}
                      width={40}
                      height={40}
                      alt="icon"
                      className="mx-auto "
                    />
                  </div>
                  <h4 className="text-lg font-bold mb-2 text-gray-200">
                    Risk Management & Compliance
                  </h4>
                  <p className="text-[#d3d3d3]">Risk assessment</p>
                  <p className="text-[#d3d3d3]">Risk mitigation strategy</p>
                  <p className="text-[#d3d3d3]">Compliance review</p>
                  <p className="text-[#d3d3d3]">Tax Services</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
