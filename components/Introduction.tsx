"use client";

import Link from "next/link";
import ScrambledText from "./animation/ScrambledText";

export default function Introduction() {
  return (
    <>
      <ScrambledText radius={33} className="paragraph">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id illo
        inventore, perspiciatis esse incidunt exercitationem facilis vel rerum
        veniam iusto fuga placeat. Incidunt illo voluptas sequi doloremque,
        voluptatum dignissimos eos!
      </ScrambledText>
      <Link href="/" className="link animation">
        This is a URL
      </Link>
    </>
  );
}
