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
    },
  ];

  return (
    <div>
      {/* Banner */}
      <Banner
        backgroundImage="/images/hd/team-bg.jpg"
        title="Some things are better done together"
      />

      {/* Team Section */}
      <section className="profile py-16 bg-[#252525dc]">
        <div className="container-fluid">
          <div className="wordingprofile text-left mb-12 max-w-[500px]">
            <h3 className="text-2xl md:text-3xl font-bold mb-4 text-white">
              Our Team
            </h3>
            <p className="text-lg text-white">
              Our team has diverse professional backgrounds, bringing a wealth
              of perspectives and expertise
            </p>
          </div>

          <div className="profileimage">
            <div className="gap-8 mx-auto flex justify-start items-start">
              {teamMembers.map((member) => (
                <div key={member.id} className="team-member">
                  <div className="wrapprofileimage p-4 text-center">
                    <div className="h-48 bg-gray-200 mb-4"></div>
                    <h3 className="text-xl font-bold text-white">
                      {member.name}
                    </h3>
                    <span className="block text-gray-200 mb-4">
                      {member.position}
                    </span>

                    <Sheet>
                      <SheetTrigger className="text-blue-600 hover:text-blue-800 cursor-pointer">
                        Detail &gt;
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
  );
}
