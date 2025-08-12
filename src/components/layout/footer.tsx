'use client'
import React from "react";

import { MapPin, Mail, Phone } from "lucide-react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

interface FooterProps {
  locale?: string;
}

const Footer: React.FC<FooterProps> = () => {
  const t = useTranslations();
  return (
    <footer className="bg-semiBlack text-white max-w-[1800px] mx-auto font-poppins">
      <div className="xl:max-w-7xl max-w-6xl 2xl:max-w-[1800px] mx-auto px-4 xs:px-6 sm:px-8 lg:px-8 py-8 xs:py-10 lg:py-8 md:py-8 sm:py-12">
        <div className="bg-darkGray w-full md:flex justify-evenly items-center  p-4 xs:p-6 sm:p-8 space-y-4 gap-4 xs:gap-6 sm:gap-8">
          <div className="space-y-4 ">
            <div className="shrink-0">
            <Link href="/" className="">
              <Image
                src="/assets/logo.png"
                priority
                alt="PM Modular"
                width={200}
                height={200}
                className="w-36 xs:w-40 sm:w-48 lg:w-52 h-auto"
              />
            </Link>
          </div>

          <div className="flex md:items-center text-gray-300 text-sm ">
            <MapPin className="w-4 xs:w-5 sm:w-6 h-4 xs:h-5 sm:h-6 mr-2 text-white" />
            <h1 className="px-1">Address:</h1>
            <span className="max-w-xs xs:max-w-sm sm:max-w-md">
             Plots 17 F/1, Industrial Park, La Tour Koenig, Mauritius
            </span>
          </div>

          <div className="flex items-center text-gray-300 text-sm">
            <Mail className="w-4 xs:w-5 sm:w-6 h-4 xs:h-5 sm:h-6 mr-2 text-white" />
            <a
              href="mailto:sales@modulsquare.mu"
              className="hover:text-white transition-colors"
            >
             Email: sales@modulsquare.mu
            </a>
          </div>
          </div>

          <div className="space-y-4 ">            
          <div className="space-y-3">
            <h1>
               Partnership request?
            </h1>
            <p>
               Request a quote <Link href={'/quotation'} className="text-primary hover:underline">Contact us!</Link>
            </p>

          </div>
            <div className="flex items-center text-gray-300 text-sm">
            <Phone className="w-4 xs:w-5 sm:w-6 h-4 xs:h-5 sm:h-6 mr-2 text-white" />
            <a
              href="tel:+15551234567"
              className="hover:text-white transition-colors"
            >
            {/* Phone Number: */}
            +230 5 509 9592
            </a>
          </div>
          </div>
        </div>



        <div className="pt-6 xs:pt-8 flex md:flex-row flex-col gap-4 justify-between items-center sm:pt-10 lg:pt-12">
          <nav className="flex flex-wrap justify-center gap-2 xs:gap-4 sm:gap-6 text-xs xs:text-sm sm:text-base">
            <Link
              href="/"
              className="text-white hover:text-gray-300 transition-colors"
            >
              {t("footer.home")}
            </Link>
            <span className="text-[#686D7D]">/</span>
            <Link
              href="/about-us"
              className="text-white hover:text-gray-300 transition-colors"
            >
              {t("footer.about_us")}
            </Link>
            <span className="text-[#686D7D]">/</span>
            <Link
              href="/blog"
              className="text-white hover:text-gray-300 transition-colors"
            >
              {t("footer.blog")}
            </Link>
            <span className="text-[#686D7D]">/</span>
            <Link
              href="/quotation"
              className="text-white hover:text-gray-300 transition-colors"
            >
              {t("footer.contact")}
            </Link>
          </nav>
          <div className="flex items-center gap-2">
            {/* <span className="text-[#686D7D]">/</span> */}
            <Link
              href="/terms"
              className="text-white hover:text-gray-300 transition-colors"
            >
              {t("footer.legal")}
            </Link>
            <span className="text-[#686D7D]">|</span>
            <Link
              href="/privacy"
              className="text-white hover:text-gray-300 transition-colors"
            >
              {t("footer.privacy")}
            </Link>
            <span className="text-[#686D7D]">|</span>
            <Link
              href="/privacy"
              className="text-white hover:text-gray-300 transition-colors"
            >
              {t("footer.cookie")}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
