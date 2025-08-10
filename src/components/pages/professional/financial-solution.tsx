'use client'
import Container from '@/components/common/container'
import Heading from '@/components/common/custom-heading'
import CustomInput from '@/components/common/custom-input'
import SubHeading from '@/components/common/custom-subheading'
import QuotationForm from '@/components/common/quotation-form'
import { useTranslations } from 'next-intl'
import React, { useState } from 'react'

type FormData = {
  name: string;
  firstName: string;
  phone: string;
  email: string;
  business:string;
  message: string;
  gdprConsent: boolean;
};

type FormErrors = Partial<Record<keyof FormData | 'form', string>>;

const FinancialSolution = () => {
    const t=useTranslations()
  const [form, setForm] = useState<FormData>({
    name: '',
    firstName: '',
    business:'',
    phone: '',
    email: '',
    message: '',
    gdprConsent: false
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [loading, setLoading] = useState(false);

  const handleChange = (
  e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
) => {
  const { name, value, type } = e.target;

  const newValue =
    type === 'checkbox' && 'checked' in e.target
      ? (e.target as HTMLInputElement).checked
      : value;

  setForm(prev => ({
    ...prev,
    [name]: newValue,
  }));

  if (errors[name as keyof typeof errors]) {
    setErrors(prev => ({ ...prev, [name]: '' }));
  }
};


  const validate = (): FormErrors => {
    const newErrors: FormErrors = {};

    if (!form.name.trim()) newErrors.name = 'Last name is required';
    if (!form.phone.trim()) newErrors.phone = 'Phone number is required';
    if (!form.firstName.trim()) newErrors.firstName = 'First name is required';
    if (!form.business.trim()) newErrors.business = 'business is required';
    if (!form.email.trim() || !/^\S+@\S+\.\S+$/.test(form.email)) {
      newErrors.email = 'A valid email address is required';
    }
    if (!form.message.trim()) newErrors.message = 'Message is required';
    if (!form.gdprConsent) newErrors.gdprConsent = 'GDPR consent is required';

    return newErrors;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    try {
      setLoading(true);
      await new Promise(resolve => setTimeout(resolve, 1500));

      setForm({
        name: '',
        firstName: '',
        business:'',
        phone: '',
        email: '',
        message: '',
        gdprConsent: false
      });
      setErrors({});
      alert('Your message has been sent successfully!');
    } catch (error) {
      setErrors({ form: 'Error sending message. Please try again.' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className='py-10'>
        <Container>
            <div className="max-w-7xl mx-auto">
                <SubHeading className='py-3'>
                {t('financing')}
                </SubHeading>
                <div className="grid md:grid-cols-12 gap-6 grid-cols-1">
             <div className="md:col-span-3 space-y-4 py-5">
                <SubHeading>
                   {t('snc')}
                </SubHeading>
                <p className='text-gray-600 text-base'>
                    {t('text_1')}
                </p>
                <p className='text-gray-600 text-base'> {t('text_2')}</p>
                <p className='text-gray-600 text-base'> {t('text_3')}</p>
                <p className='text-gray-600 text-base'> {t('text_4')}</p>
              </div>
               <div className="md:col-span-9 md:px-6">
                <h1 className='text-darkGray py-3 px-3 font-bold text-3xl'>{t('request_quote')}</h1>
                <div className="">
                 <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid md:grid-cols-3 gap-3 grid-cols-1">
<CustomInput
          name="name"
          label=""
          type="text"
          placeholder="Name*"
          value={form.name}
          onChange={handleChange}
          error={errors.name}
        />

        <CustomInput
          name="firstName"
          label=""
          type="text"
          placeholder="First Name*"
          value={form.firstName}
          onChange={handleChange}
          error={errors.firstName}
        />
        <CustomInput
          name="business"
          label=""
          type="text"
          placeholder="Business*"
          value={form.business}
          onChange={handleChange}
          error={errors.business}
        />

        <CustomInput
          name="phone"
          label=""
          type="tel"
          placeholder="Phone*"
          value={form.phone}
          onChange={handleChange}
          error={errors.phone}
        />

        <CustomInput
          name="email"
          label=""
          type="email"
          placeholder="Email*"
          value={form.email}
          onChange={handleChange}
          error={errors.email}
        />
        </div>
        <div>
          <div className="block text-gray-700 font-medium mb-2">
            Message <span className="text-red-500">*</span>
          </div>
          <textarea
            name="message"
            rows={6}
            value={form.message}
            onChange={handleChange}
            className={`w-full px-4 py-3 rounded-lg border ${
              errors.message ? 'border-red-500 bg-red-50' : 'border-gray-300 bg-gray-50'
            } focus:outline-none focus:border-transparent resize-vertical`}
          />
          {errors.message && (
            <p className="text-red-500 text-sm mt-1">{errors.message}</p>
          )}
          <p className="text-gray-500 text-sm mt-2">
            To help us respond efficiently, please provide details about your project.
          </p>
        </div>
        <div>
          <div className="block text-gray-700 font-medium mb-2">
            GDPR Consent <span className="text-red-500">*</span>
          </div>
          <label className="flex items-start cursor-pointer">
            <input
              type="checkbox"
              name="gdprConsent"
              checked={form.gdprConsent}
              onChange={handleChange}
              className="mr-3 mt-1 w-5 h-5 text-blue-600"
            />
            <span className="text-gray-700 text-sm leading-relaxed">
              I agree that my data may be stored and used solely to respond to my request.{' '}
              <span className="text-orange-500 hover:underline cursor-pointer">
                Privacy Policy
              </span>{' '}
              <em className="text-gray-500">(Fields marked with an asterisk are required).</em>
            </span>
          </label>
          {errors.gdprConsent && (
            <p className="text-red-500 text-sm mt-1">{errors.gdprConsent}</p>
          )}
        </div>

        {errors.form && (
          <div className="text-red-500 text-sm text-center p-3 bg-red-50 rounded-lg">
            {errors.form}
          </div>
        )}

        <div className="pt-4">
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-primary
                     text-white font-medium py-3 px-6 rounded-lg 
                     ease-in-out cursor-pointer duration-200 
                     focus:outline-none focus:ring-offset-2 hover:scale-105 transition-all"
          >
            {loading ? (
              <span className="flex items-center justify-center">
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                </svg>
                Sending...
              </span>
            ) : (
              'Send'
            )}
          </button>
        </div>
      </form>
                </div>
               </div>
             </div>
            </div>
        </Container>
    </div>
  )
}

export default FinancialSolution