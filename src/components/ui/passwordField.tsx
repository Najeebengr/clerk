// PasswordField.tsx
import { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

function PasswordField({ register }: { register: any }) {
  const [showPassword, setShowPassword] = useState(false);

  
  const [isHidden, setisHidden] = useState(true)
  const togglePassword = () =>{ setShowPassword((prev) => !prev);
    setisHidden(!isHidden);
      }
  return (
    <div className='flex flex-col gap-2 relative'>
      <label htmlFor="password" className='text-sm text-left font-normal'>
        <p className='text-left font-semibold'>Password</p>
      </label>
      <input
        type={showPassword ? 'text' : 'password'}
        {...register("password")}
        id='password'
        className='input border border-gray-300 text-gray-900 rounded-md h-8 focus:outline-none focus:shadow-md px-4 block w-full p-2.5'
      />
      {isHidden ? <FaEyeSlash onClick={togglePassword} className='text-gray-700 absolute right-5 top-9 z-10 cursor-pointer ' />: <FaEye onClick={togglePassword} className='text-gray-700 absolute right-5 top-9 z-10 cursor-pointer ' />}
     </div>
  );
}

export default PasswordField;
