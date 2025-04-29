"use client";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Image from "next/image";
import { ReactNode } from "react";

interface TeamMember {
  id: number;
  name: string;
  position: string;
  bio: string | ReactNode;
  image?: string;
}

export default function TeamPage() {
  const teamMembers: TeamMember[] = [
    {
      id: 1,
      name: "Dymas Budiono",
      position: "Managing Partner",
      bio: (
        <div>
          <p>
            Dymas Budiono is the Managing Partner of Nitro Consulting &
            Advisory. His experience in entrepreneurship and investment expands
            the corporation surpassing the transformation of the business
            landscape.
          </p>
          <div className="my-[12px]">
            <p>Experience</p>
            <ul className="ml-[12px]">
              <li className="list-disc">
                {" "}
                Investment Analyst - Agung Ventures
              </li>
              <li className="list-disc">
                {" "}
                Equity Research - Trimegah Sekuritas
              </li>
              <li className="list-disc"> Investment Banking - MNC Sekuritas</li>
            </ul>
          </div>
          <div>
            <p>Education</p>
            <ul className="ml-[12px]">
              <li className="list-disc">Management - Brawijaya University</li>
            </ul>
          </div>
        </div>
      ),
      image: "/images/dymas-photo.png",
    },
  ];

  return (
    <div>
      {/* Banner */}
      {/* <Banner
        backgroundImage="/images/our-team.jpg"
        title="Some things are better done together"
      /> */}

      {/* Team Section */}
      <div>
        <section className="wwa  flex justify-center items-center">
          <div>
            <div className="wordingprofile text-left mb-12 max-w-[500px]">
              <h3 className="text-2xl md:text-3xl font-bold mb-4 text-gray-600">
                Our Team
              </h3>
              <p className="text-lg text-gray-600 max-w-[400px]">
                Our team has diverse professional backgrounds, bringing a wealth
                of perspectives and expertise
              </p>
            </div>

            <div className="profileimage">
              <div className="gap-8 mx-auto flex justify-start items-start">
                {teamMembers.map((member) => (
                  <div key={member.id} className="team-member">
                    <div className="wrapprofileimage p-4 text-left">
                      <div className="h-[150px] mb-4">
                        <Image
                          src={member.image!}
                          alt={member.name}
                          width={150}
                          height={150}
                          className="object-contain"
                        />
                      </div>
                      <h3 className="text-xl font-bold text-gray-600">
                        {member.name}
                      </h3>
                      <span className="block text-gray-500 mb-4">
                        {member.position}
                      </span>

                      <Sheet>
                        <SheetTrigger className="text-blue-600 hover:text-blue-800 cursor-pointer">
                          Detail
                        </SheetTrigger>

                        <SheetContent>
                          <SheetHeader>
                            <SheetTitle className="text-left">
                              {member.name}
                            </SheetTitle>
                            <SheetDescription className="text-base font-semibold text-gray-700 text-left">
                              {member.position}
                            </SheetDescription>
                          </SheetHeader>

                          <div className="mt-6">
                            <div className="text-base">{member.bio}</div>
                          </div>
                        </SheetContent>
                      </Sheet>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
