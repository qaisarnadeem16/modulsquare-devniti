'use client';

import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import Image from 'next/image';
// import LanguageSwitcher from './-switcher';
import { Facebook, Instagram, MessageCircleMore, Phone, Mail } from 'lucide-react';
import { useTranslations } from 'next-intl';
import Button from '../common/custom-button';
import { ArrowDown, Line } from '@/svgs';
import LanguageSwitcher from './language-switcher';
import { Link } from '@/i18n/navigation';
// import QuotationForm from '../common/quotation-form';


const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false); // State for modal
    const t = useTranslations();

    const toggleMenu = () => setMenuOpen(!menuOpen);
    const toggleQuoteModal = () => setIsQuoteModalOpen(!isQuoteModalOpen);

    return (
        <div className="w-full font-poppins">


            {/* Main Navbar */}
            <nav className=" text-black relative ">
                <div className=" bg-white sticky">
                  <div className="flex items-center lg:p-5 p-2  justify-between">
                      {/* Logo */}
                   <div className="">
                     <Link href="/" className="flex   items-center space-x-2">
                        <Image
                            src="/assets/logo.png"
                            alt="Logo"
                            width={200}
                            height={200}
                            unoptimized
                            className="lg:h-[70px] md:pr-20 block bg-white  h-[60px] w-full clip-corner object-cover"
                        /></Link>
                   </div>
                    {/* Desktop Menu */}
                    <div className="hidden  md:flex gap-10  lg:px-8 px-4  flex-1 justify-center items-center">
                        <div className='flex items-center lg:gap-3  text-lightBlack gap-2 lg:mr-0 '>
                            <Link href="/" className="hover:underline hover:text-primary  xl:px-4 px-2">{t(`home`)}</Link>
                                <Link href="/modular" className="hover:underline hover:text-primary xl:px-4 px-2">{t(`modular_sale`)}</Link>
                            <Link href="/pictures" className="hover:underline hover:text-primary  xl:px-4 px-2">{t(`pictures`)}</Link>
                        </div>
                      
                    </div>

                    <div className="md:flex hidden items-center gap-6">
                        <div className="flex items-center gap-2 text-sm">
                            <Phone className="text-gray-500 w-4 h-4" />
                            <div className="text-right leading-tight">
                                <p className="text-gray-500 text-xs">{t(`any_question`)}</p>
                                <p className="font-bold text-md text-darkBlue">+230 5 509 9592</p>
                            </div>
                        </div>
                         <LanguageSwitcher />
                        <Link href={'/quotation'}>
                        <Button
                            label={t(`request_quote`)}
                            className="bg-primary text-white px-6 py-3 rounded-none font-semibold"
                        />
                        </Link>
                    </div>
                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex items-center  j gap-2">
                        <LanguageSwitcher />

                        <button aria-label="Close menu" className="text-primary mr-2" onClick={toggleMenu}>

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
                                    <div className="flex items-center space-x-2">
                                        <div className="">
                     <Link href="/" className="flex   items-center space-x-2">
                        <Image
                            src="/assets/logo.png"
                            alt="Logo"
                            width={200}
                            height={200}
                            unoptimized
                            className="lg:h-[70px] md:pr-20 md:hidden block bg-white  h-[60px] w-full clip-corner object-cover"
                        /></Link>
                   </div>
                                    </div>
                                    <button onClick={() => setMenuOpen(false)}>
                                        <X size={28} />
                                    </button>
                                </div>
                                <nav className="flex flex-col space-y-6 my-4">
                                    <Link href="/" className="hover:underline xl:px-4 px-2">{t('home')}</Link>
                                    <Link href="/modular" className="hover:underline hover:text-primary xl:px-4 px-2">{t(`modular_sale`)}</Link>
                                    <Link href="/pictures" className="hover:underline hover:text-primary  xl:px-4 px-2">{t(`pictures`)}</Link>
                                    {/* <Button
                                        label={t('call_back')}
                                        icon={<Phone className="w-4 h-4" />}
                                        iconPosition="left"
                                        className="bg-red-500 flex items-center gap-2 rounded-md text-white w-full px-6 py-3"
                                    /> */}
                                    {/* <Button
                                        label={t('get_quote')}
                                        icon={<ArrowDown className="text-white" />}
                                        iconPosition="right"
                                        className="bg-red-500 flex items-center gap-2 rounded-md !text-white w-full px-6 py-3"
                                        onClick={toggleQuoteModal} // Trigger modal
                                    /> */}
                                </nav>
                                <div className="flex md:flex-row flex-col md:items-center gap-6">
                                    <div className="flex items-center gap-2 text-sm">
                                        <Phone className="text-gray-500 w-4 h-4" />
                                        <div className="text-right leading-tight">
                                        <p className="text-gray-500 text-xs">{t(`any_question`)}</p>
                                        <p className="font-bold text-md text-darkBlue">+230 5 509 9592</p>
                                    </div>
                                    </div>
                                    <Button
                                       label={t(`request_quote`)}
                                        className="bg-[#CE9734] text-white px-6 py-3 rounded-none font-semibold"
                                        onClick={toggleQuoteModal}
                                    />
                                </div>
                            </div>

                            {/* <div className="flex flex-wrap justify-between items-center text-sm gap-3 w-full self-end-safe py-2 bg-white">
                                <div className="flex flex-wrap items-center gap-4 text-sm text-gray-800">
                                    <span className="flex items-center gap-1">
                                        <Phone className="w-4 h-4" />
                                        0693 47 94 02
                                    </span>
                                    <span className="flex items-center gap-1">
                                        <Mail className="w-4 h-4" />
                                        info@modularsalesplatform.com
                                    </span>
                                </div>
                                <div className="flex items-center gap-4">
                                    <Link href="#" target="_blank">
                                        <Facebook className="w-5 h-5 text-gray-700 hover:text-blue-600 transition-colors" />
                                    </Link>
                                    <Link href="#" target="_blank">
                                        <Instagram className="w-5 h-5 text-gray-700 hover:text-pink-600 transition-colors" />
                                    </Link>
                                    <Link href="#" target="_blank">
                                        <MessageCircleMore className="w-5 h-5 text-gray-700 hover:text-green-600 transition-colors" />
                                    </Link>
                                </div> */}
                            {/* </div> */}
                        </div>
                    </>
                )}

                {/* QuotationForm Modal */}
                {isQuoteModalOpen && (
                    <>
                        {/* Backdrop */}
                        <div
                            className="fixed inset-0 bg-black/50 z-50"
                            onClick={toggleQuoteModal}
                        />
                        {/* Modal */}
                        <div className="fixed inset-0 flex items-center justify-center z-50 p-4">
                            <div className="bg-white rounded-lg shadow-xl w-full max-w-2xl max-h-[93vh] overflow-y-auto relative">
                                {/* Close Button */}
                                <button
                                    className="absolute top-4 cursor-pointer right-4 text-gray-600 hover:text-gray-800"
                                    onClick={toggleQuoteModal}
                                >
                                    <X size={24} />
                                </button>
                                {/* Modal Content */}
                                <div className="">
                                    <div className="max-w-xl mx-auto pt-5 space-y-3">
                                        <h2 className="text-2xl flex gap-2 items-center font-instrumentSerif text-red">
                                            <Line className='text-red' /> {t('contactUs')}
                                        </h2>
                                        <h2 className='text-primary text-2xl font-semibold font-poppins'><span className='text-red'>{t('contactUs')}</span> {t('contact_title')}</h2>
                                        <p className='text-gray font-poppins text-base  '>{t('contact_description')}</p>
                                    </div>
                                    {/* <QuotationForm formOnly={true} /> */}
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