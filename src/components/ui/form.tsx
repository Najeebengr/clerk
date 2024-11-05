import { useRouter } from 'next/navigation';
import React, { useState } from 'react'
import { loginSchema, registerSchema } from '@/lib/validation/schema';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import toast from 'react-hot-toast';
import InputField from './inputField';
import PasswordField from './passwordField';
import { Button } from './button';
import { FaCaretRight } from 'react-icons/fa';
function Form({title}: {title:string}) {
    const router = useRouter();
    const [loading, setLoading] = useState(false);
  
    // Choose schema based on title prop
    const schema = title === 'signup' ? registerSchema : loginSchema;
  
    // Initialize useForm with zod schema and default values
    const { register, handleSubmit, formState: { errors } } = useForm<z.infer<typeof schema>>({
      resolver: zodResolver(schema),
      defaultValues: { email: "", password: "",  ...(title === 'signup' ? { firstName: "", lastName: "" } : {}) },  
    });
  
    // Log to verify field registration
    console.log("Form errors:", errors);
  
    const onSubmit = async (data: z.infer<typeof schema>) => {
        setLoading(true);
        try {
          const apiEndpoint = title === 'signup' ? '/api/register' : '/api/login';
          const result = await fetch(apiEndpoint, {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data),
          });
    
          const response = await result.json();
          if (result.ok) {
            console.log("Response:", response);
            toast.success(response.message);
            if (title === 'signup') router.replace('/');
            else{ 
              console.log("Data:", response);
              router.replace(`/dashboard?firstName=${response.user.firstName}&lastName=${response.user.lastName}`);
            }
          } else {
            toast.error(response.message || "An error occurred");
          }
        } catch (err) {
          console.error("Error during submission:", err);
          toast.error("An unexpected error occurred");
        } finally {
          setLoading(false);
        }
      };
    
  return (
    <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-7'>
        {title === 'signup' &&  <div className='flex gap-3'>
        <InputField label="First Name" id="firstName" type="text" register={register} name="firstName" />
        <InputField label="Last Name" id="lastName" type="text" register={register} name="lastName" />
        </div>
}
          <InputField label="Email address" id="email" type="email" register={register} name="email" />
          <PasswordField register={register} />
          <Button
            type='submit'
            variant="outline"
            className='bg-[#6842ff] px-6 py-2 h-8 w-full shadow-md flex items-center justify-center gap-1 hover:bg-[#9175ff]'
          >
            <span className='text-white font-medium text-[13px]'>Continue</span>
            <FaCaretRight className='text-[#c8bbff]' />
          </Button>
        </form>
  )
}

export default Form
