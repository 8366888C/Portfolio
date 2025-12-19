"use client";

import ScrambledText from "./animation/ScrambledText";
import { Mail, MapPin } from "lucide-react";
// import { Badge } from "./ui/badge";
import Link from "next/link";
import { Button } from "./ui/button";

export default function Introduction() {
  return (
    <>
      <div className="flex cursor-default gap-3 select-none">
        {/* <Badge variant="secondary">
          <span className="opacity-80">Software Developer</span>
        </Badge> */}
      </div>

      <h1 className="blog-title">Subhashis Hansda</h1>

      <div className="flex flex-col gap-1 md:flex-row md:gap-8">
        <div className="flex items-center gap-3 select-none">
          <Mail className="size-4 opacity-80" />
          <Link
            href="mailto:subhashishansda8@gmail.com"
            className="paragraph-short"
          >
            subhashishansda8
          </Link>
        </div>
        <div className="flex items-center gap-3 select-none">
          <MapPin className="size-4 opacity-80" />
          <Link
            href="https://www.google.com/maps/place/Ahmedabad"
            className="paragraph-short"
          >
            Ahmedabad, India
          </Link>
        </div>
      </div>

      <ScrambledText radius={60} className="paragraph my-6">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id illo
        inventore, perspiciatis esse incidunt exercitationem facilis vel rerum
        veniam iusto fuga placeat. Incidunt illo voluptas sequi doloremque,
        voluptatum dignissimos eos!
      </ScrambledText>

      <Button variant="default" size="sm" asChild>
        <Link href="/resume">Resume</Link>
      </Button>
    </>
  );
}
