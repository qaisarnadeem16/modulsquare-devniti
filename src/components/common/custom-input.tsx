"use client";

import React, { useState } from "react";
import { IoIosEye, IoIosEyeOff } from "react-icons/io";

type CustomInputProps = {
    label?: string;
    type?: string;
    inputType?: string;
    placeholder?: string;
    value?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
    name?: string;
    error?: string | null | false;
    className?: string;
    showLabelOnFocus?: boolean;
    inputStyle?: string
};

const CustomInput = (props: CustomInputProps) => {
    const {
        label,
        type,
        inputType,
        placeholder,
        value,
        onChange,
        name,
        error,
        className,
        inputStyle
    } = props;

    const [showPassword, setShowPassword] = useState(false);
    //const [isFocused, setIsFocused] = useState(false);
    const actualType = type || inputType || "text";
    const isPassword = actualType === "password";

    //const shouldShowLabel = showLabelOnFocus && (isFocused || value);

    return (
        <div className={`relative ${className}`}>
            <div className="relative flex flex-col gap-2">
                {label && (
                    <label
                        htmlFor={name}
                        className="block font-medium text-xl"
                    >
                        {label}
                    </label>
                )}
                <input
                    type={isPassword && !showPassword ? "password" : "text"}
                    placeholder={placeholder}
                    name={name}
                    value={value}
                    onChange={onChange}
                    className={`
             font-inter  placeholder:text-semiBlack mt-1 bg-white focus:outline-0 rounded
            w-full  p-3 sm:text-base border 
            focus:outline-none
            ${error ? "border-red-500" : "border-gray"}
            peer
          ${inputStyle}  `}
                />

                {/* {label && (
          <label
            htmlFor={name}
            className={`
              absolute left-4 transition-all duration-200 ease-in-out
              ${shouldShowLabel 
                ? "top-0 -translate-y-1/2 bg-white px-1 text-sm text-gray-600" 
                : "top-1/2 -translate-y-1/2 text-gray-400"}
              peer-focus:top-0 peer-focus:-translate-y-1/2 peer-focus:bg-white 
              peer-focus:px-1 peer-focus:text-sm peer-focus:text-gray-600
              pointer-events-none
            `}
          >
            {label}
          </label>
        )} */}

                {isPassword && (
                    <button
                        type="button"
                        className="absolute right-3 top-[58%]"
                        onClick={() => setShowPassword(!showPassword)}
                    >
                        {showPassword ? (
                            <IoIosEyeOff className="text-gray-500" size={20} />
                        ) : (
                            <IoIosEye className="text-gray-500" size={20} />
                        )}
                    </button>
                )}
            </div>

            {error && <p className="mt-1 text-sm text-red-600">{error}</p>}
        </div>
    );
};

export default CustomInput;
