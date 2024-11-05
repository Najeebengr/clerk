import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

function CardFooter({ title }: { title: string }) {
  return (
    <div>
      <div className='flex justify-center bg-[#f7f7f7] relative top-[-4px] p-4 border border-gray-300'>
        <p>
          <Link className='text-sm font-normal text-gray-500' href={title === 'signup' ? '/' : '/signup'}>
            
              {title === 'signup' ? 'Already have an account?' : "Don't have an account?"}
              <span className='font-normal text-[#6842ff] ml-1 hover:underline'>
                {title === 'signup' ? 'Sign in' : 'Sign up'}
              </span>
        
          </Link>
        </p>
      </div>
      <div className='flex justify-center bg-[#f7f7f7] relative top-[-4px] p-4 border border-gray-300 border-t-0 rounded-t-none rounded-lg gap-2'>
        <p className='text-[12px] font-normal text-gray-500'>Secured By</p>
        <Link href="/signup">
          
            <Image
              src="/assets/clerk.svg"
              alt="logo"
              className='grayscale'
              width={50}
              height={50}
            />
          
        </Link>
      </div>
      <div className='mt-4 flex justify-between'>
        <div>
          <p className='text-[15px] text-gray-500'>© 2024 Clerk</p>
        </div>
        <div className='flex gap-3'>
          <Link href="/support" className='text-[15px] text-gray-500'>Support</Link>
          <Link href="/privacy" className='text-[15px] text-gray-500'>Privacy</Link>
          <Link href="/terms" className='text-[15px] text-gray-500'>Terms</Link>
        </div>
      </div>
    </div>
  );
}

export default CardFooter;
