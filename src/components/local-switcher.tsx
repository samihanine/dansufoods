"use client";

import { useChangeLocale, useCurrentLocale } from "../locales/client";

export const LocaleSwitcher = () => {
  const changeLocale = useChangeLocale();
  const locale = useCurrentLocale();

  return (
    <div
      className={`flex items-center text-lg rounded-full border-primary w-fit py-[3px] px-3 gap-3`}
    >
      <button
        onClick={() => changeLocale("fr")}
        className={`rounded-full flex flex-col items-center gap-[2px] ${
          locale === "fr" ? " font-bold" : "opacity-50"
        }`}
      >
        <span className="">FR</span>
      </button>

      <button
        onClick={() => changeLocale("en")}
        className={`rounded-full flex flex-col items-center gap-[2px] ${
          locale === "en" ? " font-bold" : "opacity-50"
        }`}
      >
        <span>EN</span>
      </button>
    </div>
  );
};
