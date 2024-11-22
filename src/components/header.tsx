"use client";

import { Button } from "@/components/button";
import { Container } from "@/components/container";
import { useIsMobile } from "@/hooks/use-is-mobile";
import { useScopedI18n } from "@/locales/client";
import {
  Popover,
  PopoverBackdrop,
  PopoverButton,
  PopoverPanel,
} from "@headlessui/react";
import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { LocaleSwitcher } from "./local-switcher";

export function Header({
  links,
}: {
  links: { label: string; href: string }[];
}) {
  const pathname = usePathname();
  const t = useScopedI18n("navigation");
  const isMobile = useIsMobile();

  function Hamburger() {
    return (
      <span className="relative h-3.5 w-4">
        <span className="absolute left-0 top-0 block h-0.5 w-full rotate-0 transform rounded-full bg-slate-600 opacity-100 transition-all duration-200 ease-linear group-hover:bg-slate-900 group-data-[open]:left-1/2 group-data-[open]:top-1.5 group-data-[open]:w-0" />
        <span className="absolute left-0 top-1.5 block h-0.5 w-full transform rounded-full bg-slate-600 opacity-100 transition-all duration-200 ease-linear group-hover:bg-gray-900 group-data-[open]:rotate-45" />
        <span className="absolute left-0 top-1.5 block h-0.5 w-full transform rounded-full bg-slate-600 opacity-100 transition-all duration-200 ease-linear group-hover:bg-gray-900 group-data-[open]:-rotate-45" />
        <span className="absolute left-0 top-3 block h-0.5 w-full rotate-0 transform rounded-full bg-slate-600 opacity-100 transition-all duration-200 ease-linear group-hover:bg-gray-900 group-data-[open]:left-1/2 group-data-[open]:top-1.5 group-data-[open]:w-0" />
      </span>
    );
  }

  function MobileNav() {
    return (
      <Popover>
        <PopoverButton
          className="group relative z-50 flex cursor-pointer items-center justify-center border border-gray-secondary-400/75 bg-white p-3 transition duration-300 ease-in-out focus:outline-none lg:hidden"
          aria-label="Toggle Navigation"
        >
          <Hamburger />
        </PopoverButton>

        <PopoverBackdrop
          transition
          className="fixed inset-0 z-20 bg-slate-900 bg-opacity-25 backdrop-blur data-[closed]:opacity-0 data-[enter]:duration-200 data-[leave]:duration-150 data-[enter]:ease-out data-[leave]:ease-in"
        />

        <PopoverPanel
          as="div"
          transition
          className="absolute inset-x-0 top-0 z-30 overflow-hidden bg-background px-5 pb-8 pt-24 data-[closed]:scale-90 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in"
        >
          <div>
            <div className="flex flex-col divide-y divide-gray-secondary-400/75">
              {links.map((link) => (
                <Link
                  key={`${link.label}-mobile`}
                  href={link.href}
                  className={
                    "block px-4 pb-2 pt-4 font-medium text-slate-700 hover:bg-secondary hover:text-slate-900"
                  }
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </PopoverPanel>
      </Popover>
    );
  }

  return (
    <header className="h-24">
      <Container className="flex h-full w-full items-center !py-0">
        <nav className="relative z-50 flex w-full items-center justify-between ">
          <div className="flex items-center space-x-8 lg:space-x-12">
            <Link
              href="/"
              className="flex flex-shrink-0 items-center"
              aria-label="Home"
            >
              <p className="text-4xl font-bold font-baloo text-primary">
                Dansu
              </p>
            </Link>
            <div className="hidden items-center space-x-3 lg:flex lg:space-x-4">
              {links
                .filter((link) => link.href !== "/contact")
                .map((link) => (
                  <Link
                    key={`${link.label}-desktop`}
                    href={link.href}
                    className={clsx(
                      (
                        link.href !== "/"
                          ? pathname.includes(link.href)
                          : pathname === link.href
                      )
                        ? "text-foreground"
                        : "text-muted-foreground hover:text-foreground",
                      "inline-block px-4 py-2 font-medium"
                    )}
                  >
                    {link.label}
                  </Link>
                ))}
            </div>
          </div>

          <div>
            <div className="flex items-center space-x-4">
              <LocaleSwitcher />
              {!isMobile && (
                <Link href="/contact">
                  <Button variant={"outline"} size="lg">
                    {t("contact")}
                  </Button>
                </Link>
              )}
            </div>
          </div>
        </nav>
        <div className="ml-4 lg:hidden">
          <MobileNav />
        </div>
      </Container>
    </header>
  );
}
