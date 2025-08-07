import React from "react";
import Link from "next/link";
import { MapPin, Mail, Phone } from "lucide-react";
import Image from "next/image";
import { useTranslations } from "next-intl";

interface FooterProps {
  locale?: string;
}

const Footer: React.FC<FooterProps> = () => {
  const t = useTranslations();
  return (
    <footer className="bg-semiBlack text-white max-w-[1800px] mx-auto font-poppins">
      <div className="xl:max-w-7xl max-w-6xl 2xl:max-w-[1800px] mx-auto px-4 xs:px-6 sm:px-8 lg:px-8 py-8 xs:py-10 lg:py-8 md:py-8 sm:py-12">
        <div className="bg-darkGray p-4 xs:p-6 sm:p-8 flex flex-col sm:flex-row sm:flex-wrap justify-between items-center gap-4 xs:gap-6 sm:gap-8">
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

          <div className="flex items-center text-gray-300 text-sm ">
            <MapPin className="w-4 xs:w-5 sm:w-6 h-4 xs:h-5 sm:h-6 mr-2 text-white" />
            <span className="max-w-xs xs:max-w-sm sm:max-w-md">
              Building B, Metro City, CA 90210 United States
            </span>
          </div>

          <div className="flex items-center text-gray-300 text-sm">
            <Mail className="w-4 xs:w-5 sm:w-6 h-4 xs:h-5 sm:h-6 mr-2 text-white" />
            <a
              href="mailto:info@modularsalesplatform.com"
              className="hover:text-white transition-colors"
            >
              info@modularsalesplatform.com
            </a>
          </div>

          <div className="flex items-center text-gray-300 text-sm">
            <Phone className="w-4 xs:w-5 sm:w-6 h-4 xs:h-5 sm:h-6 mr-2 text-white" />
            <a
              href="tel:+15551234567"
              className="hover:text-white transition-colors"
            >
              +1 (555) 123-4567
            </a>
          </div>
        </div>

        <div className="pt-6 xs:pt-8 sm:pt-10 lg:pt-12">
          <nav className="flex flex-wrap justify-center gap-3 xs:gap-4 sm:gap-6 text-xs xs:text-sm sm:text-base">
            <Link
              href="/"
              className="text-white hover:text-gray-300 transition-colors"
            >
              {t("footer.home")}
            </Link>
            <span className="text-[#686D7D]">/</span>
            <Link
              href="/aboutus"
              className="text-white hover:text-gray-300 transition-colors"
            >
              {t("footer.about_us")}
            </Link>
            <span className="text-[#686D7D]">/</span>
            <Link
              href="/gallery"
              className="text-white hover:text-gray-300 transition-colors"
            >
              {t("footer.gallery")}
            </Link>
            <span className="text-[#686D7D]">/</span>
            <Link
              href="/quotation"
              className="text-white hover:text-gray-300 transition-colors"
            >
              {t("footer.quotation")}
            </Link>
            <span className="text-[#686D7D]">/</span>
            <Link
              href="/terms"
              className="text-white hover:text-gray-300 transition-colors"
            >
              {t("footer.terms")}
            </Link>
            <span className="text-[#686D7D]">/</span>
            <Link
              href="/privacy"
              className="text-white hover:text-gray-300 transition-colors"
            >
              {t("footer.privacy")}
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
