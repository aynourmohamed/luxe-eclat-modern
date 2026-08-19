"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function TopBar() {
  const [langOpen, setLangOpen] = useState(false);
  const [currencyOpen, setCurrencyOpen] = useState(false);
  const [language, setLanguage] = useState("English");
  const [currency, setCurrency] = useState("USD");

  const languages = ["English", "Arabic", "French"];
  const currencies = ["USD", "EUR", "EGP"];

  return (
    <div className="flex items-center justify-between px-4 md:px-8 py-2 text-xs md:text-sm bg-brand text-white">
      <p className="truncate">luxeéclatsupport@gmail.com</p>

      <div className="flex gap-3 md:gap-4 shrink-0">

      
      {/* language */}
      <div className="relative">
          <button
            onClick={() => setLangOpen(!langOpen)}
            className="flex items-center gap-1">
            {language} <ChevronDown className="w-3 h-3" />
          </button>
          {langOpen && (
            <div className="absolute top-full right-0 bg-white text-black rounded shadow mt-1 w-24 z-10">
              {languages.map((l) => (
                <p
                  key={l}
                  onClick={() => {
                    setLanguage(l);
                    setLangOpen(false);
                  }}
                  className="px-3 py-1 hover:bg-gray-100 cursor-pointer"
                >
                  {l}
                </p>
              ))}
            </div>
          )}
        </div>

        {/* currency */}
        <div className="relative">
          <button
            onClick={() => setCurrencyOpen(!currencyOpen)}
            className="flex items-center gap-1"
          >
            {currency} <ChevronDown className="w-3 h-3" />
          </button>
          {currencyOpen && (
            <div className="absolute top-full right-0 bg-white text-black rounded shadow mt-1 w-20 z-10">
              {currencies.map((c) => (
                <p
                  key={c}
                  onClick={() => {
                    setCurrency(c);
                    setCurrencyOpen(false);
                  }}
                  className="px-3 py-1 hover:bg-gray-100 cursor-pointer"
                >
                  {c}
                </p>
              ))}
            </div>
          )}
        </div>

        
      </div>
    </div>
  );
}