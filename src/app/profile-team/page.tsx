"use client";

import Banner from "@/components/Banner";
import { useState } from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Image from "next/image";

interface TeamMember {
  id: number;
  name: string;
  position: string;
  bio: string;
  image?: string;
}

export default function TeamPage() {
  const teamMembers: TeamMember[] = [
    {
      id: 1,
      name: "Dymas Budiono",
      position: "Managing Partner",
      bio: "Dymas is currently the CEO of Nitro Consulting, spearheading the transportations and logistics holding company for almost 25 years. His experience in entrepreneurship further expands the corporation surpassing the transformation of the business landscape.",
      image: "/images/dymas-photo.png",
    },
  ];

  return (
    <div>
      {/* Banner */}
      <Banner
        backgroundImage="/images/our-team.jpg"
        title="Some things are better done together"
      />

      {/* Team Section */}
      <div style={{ backgroundImage: "url('/images/hd/hero-bg.jpg')" }}>
        <section className="wwa bg-gray-100 opacity-95 py-16 md:py-24 min-h-[80vh] flex justify-center items-center">
          <div className="container-fluid">
            <div className="wordingprofile text-left mb-12 max-w-[500px]">
              <h3 className="text-2xl md:text-3xl font-bold mb-4 text-gray-600">
                Our Team
              </h3>
              <p className="text-lg text-gray-600">
                Our team has diverse professional backgrounds, bringing a wealth
                of perspectives and expertise
              </p>
            </div>

            <div className="profileimage">
              <div className="gap-8 mx-auto flex justify-start items-start">
                {teamMembers.map((member) => (
                  <div key={member.id} className="team-member">
                    <div className="wrapprofileimage p-4 text-center">
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
                            <SheetTitle>{member.name}</SheetTitle>
                            <SheetDescription className="text-base font-semibold text-gray-700">
                              {member.position}
                            </SheetDescription>
                          </SheetHeader>

                          <div className="mt-6">
                            <p className="text-base">{member.bio}</p>
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
