"use client";

import React, { useState } from "react";


import { Patrons } from "@/app/data/patrons";
import SocialMediaCard from "@/app/(components)/SocialMediaCard";

export default function PatronsPage() {
  return (
    <main className="container mx-auto my-10 px-4">
      <h1 className="text-5xl text-[#222121] font-bold text-center mb-10">Patrons</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
        {Patrons.Patrons.map((patron, index) => (
          <SocialMediaCard key={index} person={patron} />
        ))}
      </div>
    </main>
  );
}


