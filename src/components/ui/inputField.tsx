// InputField.tsx
import { InputHTMLAttributes } from 'react';

interface InputFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  register: any;
}

function InputField({ label, register, ...inputProps }: InputFieldProps) {
  return (
    <div className='flex flex-col gap-2'>
      <label htmlFor={inputProps.id} className='text-sm text-left font-normal'>
        <p className='text-left font-semibold'>{label}</p>
      </label>
      <input
        {...register(inputProps.name)}
        {...inputProps}
        className='input border border-gray-300 text-gray-900 rounded-md h-8 focus:outline-none focus:shadow-md px-4 block w-full p-2.5'
      />
    </div>
  );
}

export default InputField;
