import React, { useState } from 'react';
import { FieldValues } from 'react-hook-form';
import { CustomInputProps, RegisterOptions } from '@/components/customs/custom-input/types';

const CustomInput = <T extends FieldValues>({
  register,
  type = 'text',
  placeholder,
  name,
  errors,
  required = false,
  minLength,
  maxLength,
  pattern,
  textColor = '',
}: CustomInputProps<T>) => {
  const [value, setValue] = useState('');

  const registerOptions: RegisterOptions = {
    required: required && 'Заполните поле',
    minLength: minLength && {
      value: minLength,
      message: `Минимум ${minLength} символов`,
    },
    maxLength: maxLength && {
      value: maxLength,
      message: `Максимум ${maxLength} символов`,
    },
    pattern: pattern,
    onChange: (e) => setValue(e.target.value),
  };

  return (
    <div
      className={`w-[100%] bg-[#D9D7E0] flex relative rounded ${
        !!errors?.message && 'bg-[#fff3f0]'
      }`}
    >
      <label htmlFor={name} className='relative group h-full self-stretch group w-full'>
        <span
          className={`font-bold cursor-text text-[#a5a1b2] select-none absolute top-1/2 -translate-y-1/2 left-2 transition-all duration-300 group-focus-within:-translate-y-5 group-focus-within:scale-75 origin-left ${
            !!value && '-translate-y-5 scale-75'
          } ${!!errors?.message && 'text-[#ff8469]'}`}
        >
          {placeholder}
        </span>
        <input
          id={name}
          type={type}
          className={`pt-[18px] px-2 w-full bg-transparent transition-color duration-300 focus:outline-none font-bold text-[15px] ${textColor} ${
            !!errors?.message && 'text-[#ff542e]'
          }`}
          {...register(name, { ...registerOptions })}
        />
      </label>
      {errors?.message && (
        <p className='absolute -bottom-6 text-[#ff542e] text-[13px]'>{errors.message}</p>
      )}
    </div>
  );
};

export default CustomInput;
