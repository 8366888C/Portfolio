"use client";

import React from "react";
import Link from "next/link";
import ThemeToggle from "./ThemeToggle";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  //   BreadcrumbPage,
  BreadcrumbSeparator,
} from "./ui/breadcrumb";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();
  const pathSegments = pathname.split("/").filter((item) => item !== "");

  return (
    <header className="header-margin bg-accent sticky top-0 z-2 backdrop-blur-3xl select-none">
      <div className="flex items-center justify-between">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link href="/">home</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            {pathSegments.map((segment, index) => {
              const href = `/${pathSegments.slice(0, index + 1).join("/")}`;
              const isLast = index === pathSegments.length - 1;

              return (
                <React.Fragment key={href}>
                  <BreadcrumbSeparator />
                  <BreadcrumbItem>
                    {isLast ? (
                      // Current page is not a link (optional, but standard UX)
                      <BreadcrumbLink>{segment.toLowerCase()}</BreadcrumbLink>
                    ) : (
                      <BreadcrumbLink asChild>
                        <Link href={href}>{segment.toLowerCase()}</Link>
                      </BreadcrumbLink>
                    )}
                  </BreadcrumbItem>
                </React.Fragment>
              );
            })}
          </BreadcrumbList>
        </Breadcrumb>
        <div>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
