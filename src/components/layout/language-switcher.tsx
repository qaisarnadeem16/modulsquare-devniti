'use client';

import { useLocale } from 'next-intl';
import { ChangeEvent } from 'react';
import { ChevronDown } from 'lucide-react';
import { usePathname, useRouter } from '@/i18n/navigation';

export default function LanguageSwitcher() {
    const locale = useLocale();
    const router = useRouter();
    const pathname = usePathname();

    const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
        router.replace(pathname, { locale: e.target.value });
    };

    return (
        <div className="relative inline-block text-sm font-poppins">
            <select
                onChange={handleChange}
                value={locale}
                className="appearance-none bg-[#F5F5F5] font-semibold text-primary py-1 pl-3 pr-8 rounded-full cursor-pointer focus:outline-none"
            >
                <option value="en">EN</option>
                <option value="fr">FR</option>
            </select>

            {/* White separator line */}
            <div className="pointer-events-none absolute right-6 top-1/2 transform -translate-y-1/2 h-4 w-[1px] bg-white" />

            {/* Custom icon inside the select wrapper */}
            <ChevronDown
                size={16}
                className="pointer-events-none absolute right-1 top-1/2 transform -translate-y-1/2 text-gray-700"
            />
        </div>
    );
}
