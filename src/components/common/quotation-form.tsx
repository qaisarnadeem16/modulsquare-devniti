'use client'
import React, { useState } from 'react';
import CustomInput from './custom-input';

type FormData = {
  lastName: string;
  firstName: string;
  phone: string;
  email: string;
  projectType: 'professional' | 'individual' | '';
  message: string;
  gdprConsent: boolean;
};

type FormErrors = Partial<Record<keyof FormData | 'form', string>>;

const QuotationForm = () => {
  const [form, setForm] = useState<FormData>({
    lastName: '',
    firstName: '',
    phone: '',
    email: '',
    projectType: '',
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

    if (!form.lastName.trim()) newErrors.lastName = 'Last name is required';
    if (!form.firstName.trim()) newErrors.firstName = 'First name is required';
    if (!form.phone.trim()) newErrors.phone = 'Phone number is required';
    if (!form.email.trim() || !/^\S+@\S+\.\S+$/.test(form.email)) {
      newErrors.email = 'A valid email address is required';
    }
    if (!form.projectType) newErrors.projectType = 'Project type is required';
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
        lastName: '',
        firstName: '',
        phone: '',
        email: '',
        projectType: '',
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
    <div className="max-w-2xl mx-auto p-6 bg-white">
      <form onSubmit={handleSubmit} className="space-y-6">
        <CustomInput
          name="lastName"
          label=""
          type="text"
          placeholder="Last Name*"
          value={form.lastName}
          onChange={handleChange}
          error={errors.lastName}
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
        <div>
          <div className="block text-gray-700 font-medium mb-3">
            The project is: <span className="text-red-500">*</span>
          </div>
          <div className="flex gap-6">
            <label className="flex items-center cursor-pointer">
              <input
                type="radio"
                name="projectType"
                value="professional"
                checked={form.projectType === 'professional'}
                onChange={handleChange}
                className="mr-2 w-4 h-4 text-blue-600"
              />
              <span className="text-gray-700">Professional</span>
            </label>
            <label className="flex items-center cursor-pointer">
              <input
                type="radio"
                name="projectType"
                value="individual"
                checked={form.projectType === 'individual'}
                onChange={handleChange}
                className="mr-2 w-4 h-4 text-blue-600"
              />
              <span className="text-gray-700">Individual</span>
            </label>
          </div>
          {errors.projectType && (
            <p className="text-red-500 text-sm mt-1">{errors.projectType}</p>
          )}
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
                     transition-colors duration-200 
                     focus:outline-none focus:ring-offset-2"
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
  );
};

export default QuotationForm;
