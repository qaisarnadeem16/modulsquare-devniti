'use client';

import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import Image from 'next/image';
import { Facebook, Instagram, MessageCircleMore, Phone, Mail } from 'lucide-react';
import { useTranslations } from 'next-intl';
import Button from '../common/custom-button';
import { ArrowDown, Line } from '@/svgs';
import LanguageSwitcher from './language-switcher';
import { Link, usePathname } from '@/i18n/navigation';

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
    const t = useTranslations();
    const pathname = usePathname(); // Get current route

    const toggleMenu = () => setMenuOpen(!menuOpen);
    const toggleQuoteModal = () => setIsQuoteModalOpen(!isQuoteModalOpen);

    // Define active link styles
    const getLinkClass = (href:any) => 
        pathname === href 
            ? 'text-primary border-b-2 border-primary' 
            : 'hover:text-primary hover:border-b-2 border-primary';

    return (
        <div className="w-full font-poppins">
            {/* Main Navbar */}
            <nav className="text-black relative">
                <div className="bg-white sticky">
                    <div className="flex items-center lg:p-5 p-2 justify-between">
                        {/* Logo */}
                        <div>
                            <Link href="/" className="flex items-center space-x-2">
                                <Image
                                    src="/assets/logo.png"
                                    alt="Logo"
                                    width={200}
                                    height={200}
                                    unoptimized
                                    className="lg:h-[70px] md:pr-20 block bg-white h-[60px] w-full clip-corner object-cover"
                                />
                            </Link>
                        </div>
                        {/* Desktop Menu */}
                        <div className="hidden md:flex gap-10 lg:px-8 px-4 flex-1 justify-center items-center">
                            <div className="flex items-center lg:gap-10 text-black gap-2 lg:mr-0">
                                <Link href="/" className={`${getLinkClass('/')} text-lg pb-5`}>
                                    {t('home')}
                                </Link>
                                <Link href="/modular" className={`${getLinkClass('/modular')} text-lg pb-5`}>
                                    {t('modular_sale')}
                                </Link>
                                <Link href="/pictures" className={`${getLinkClass('/pictures')} text-lg pb-5`}>
                                    {t('pictures')}
                                </Link>
                            </div>
                        </div>

                        <div className="md:flex hidden items-center gap-6">
                            <div className="flex items-center gap-2 text-sm">
                                <Phone className="text-gray-500 w-4 h-4" />
                                <div className="text-right leading-tight">
                                    <p className="text-gray-500 text-xs">{t('any_question')}</p>
                                    <p className="font-bold text-md text-darkBlue">+230 5 509 9592</p>
                                </div>
                            </div>
                            <LanguageSwitcher />
                            <Link href="/quotation">
                                <Button
                                    label={t('request_quote')}
                                    className="bg-primary text-white px-6 py-3 rounded-none font-semibold"
                                />
                            </Link>
                        </div>
                        {/* Mobile Menu Button */}
                        <div className="md:hidden flex items-center gap-2">
                            <LanguageSwitcher />
                            <button aria-label="Toggle menu" className="text-primary mr-2" onClick={toggleMenu}>
                                <Menu size={28} />
                            </button>
                        </div>
                    </div>
                </div>

                {/* Mobile Sidebar */}
                {menuOpen && (
                    <>
                        <div
                            className="fixed inset-0 bg-black/55 z-40"
                            onClick={() => setMenuOpen(false)}
                        />
                        <div className="fixed top-0 flex flex-col justify-between left-0 w-3/4 sm:w-1/2 h-full bg-white text-black z-50 p-5 transition-transform transform duration-300">
                            <div>
                                <div className="flex justify-between items-center mb-6">
                                    <div>
                                        <Link href="/" className="flex items-center space-x-2">
                                            <Image
                                                src="/assets/logo.png"
                                                alt="Logo"
                                                width={200}
                                                height={200}
                                                unoptimized
                                                className="lg:h-[70px] md:pr-20 md:hidden block bg-white h-[60px] w-full clip-corner object-cover"
                                            />
                                        </Link>
                                    </div>
                                    <button onClick={() => setMenuOpen(false)}>
                                        <X size={28} />
                                    </button>
                                </div>
                                <nav className="flex flex-col space-y-6 my-4">
                                    <Link href="/" className={`${getLinkClass('/')} text-lg pb-5`}>
                                        {t('home')}
                                    </Link>
                                    <Link href="/modular" className={`${getLinkClass('/modular')} text-lg pb-5`}>
                                        {t('modular_sale')}
                                    </Link>
                                    <Link href="/pictures" className={`${getLinkClass('/pictures')} text-lg pb-5`}>
                                        {t('pictures')}
                                    </Link>
                                </nav>
                                <div className="flex md:flex-row flex-col md:items-center gap-6">
                                    <div className="flex items-center gap-2 text-sm">
                                        <Phone className="text-gray-500 w-4 h-4" />
                                        <div className="text-right leading-tight">
                                            <p className="text-gray-500 text-xs">{t('any_question')}</p>
                                            <p className="font-bold text-md text-darkBlue">+230 5 509 9592</p>
                                        </div>
                                    </div>
                                    <Button
                                        label={t('request_quote')}
                                        className="bg-[#CE9734] text-white px-6 py-3 rounded-none font-semibold"
                                        onClick={toggleQuoteModal}
                                    />
                                </div>
                            </div>
                        </div>
                    </>
                )}

                {/* QuotationForm Modal */}
                {isQuoteModalOpen && (
                    <>
                        <div
                            className="fixed inset-0 bg-black/50 z-50"
                            onClick={toggleQuoteModal}
                        />
                        <div className="fixed inset-0 flex items-center justify-center z-50 p-4">
                            <div className="bg-white rounded-lg shadow-xl w-full max-w-2xl max-h-[93vh] overflow-y-auto relative">
                                <button
                                    className="absolute top-4 cursor-pointer right-4 text-gray-600 hover:text-gray-800"
                                    onClick={toggleQuoteModal}
                                >
                                    <X size={24} />
                                </button>
                                <div>
                                    <div className="max-w-xl mx-auto pt-5 space-y-3">
                                        <h2 className="text-2xl flex gap-2 items-center font-instrumentSerif text-red">
                                            <Line className="text-red" /> {t('contactUs')}
                                        </h2>
                                        <h2 className="text-primary text-2xl font-semibold font-poppins">
                                            <span className="text-red">{t('contactUs')}</span> {t('contact_title')}
                                        </h2>
                                        <p className="text-gray font-poppins text-base">{t('contact_description')}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </>
                )}
            </nav>
        </div>
    );
};

export default Navbar;