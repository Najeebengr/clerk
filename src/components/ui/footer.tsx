// Footer.tsx
import Link from 'next/link';

function Footer() {
  return (
    <div className='mt-4 flex justify-between'>
      <p className='text-[15px] text-gray-500'>© 2024 Clerk</p>
      <div className='flex gap-3'>
        <Link href="#" className='text-[15px] text-gray-500'>Support</Link>
        <Link href="#" className='text-[15px] text-gray-500'> Privacy</Link>
        <Link href="#" className='text-[15px] text-gray-500'>Terms</Link>
      </div>
    </div>
  );
}

export default Footer;
