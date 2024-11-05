import Image from 'next/image';

function CardHeader({ title }: { title: string }) {
  return (
    <div className="logo flex justify-center flex-col items-center gap-5">
      <Image src="/assets/clerk.svg" alt="logo" width={80} height={80} />
      <div>
      <h1>{title === 'signup' ? 'Create your account' : 'Sign in to Clerk'}</h1>
      <p className='font-normal text-gray-500'>
        {title === 'signup' ? 'Welcome! Please fill in the details to get started.' : 'Welcome back! Please sign in to continue'}
      </p>
      </div>
    </div>
  );
}

export default CardHeader;
