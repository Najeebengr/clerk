// SocialLogins.tsx
import { Button } from "@/components/ui/button";
import { FaGithub } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';

function SocialLogins() {
  return (
    <div className='social-logins flex gap-2'>
      <Button variant="outline" className='px-12 py-1 h-8'>
        <FaGithub /> <p className='font-light text-gray-600'>GitHub</p>
      </Button>
      <Button variant="outline" className='px-12 py-1 h-8'>
        <FcGoogle /> <p className='font-normal text-gray-600'>Google</p>
      </Button>
    </div>
  );
}

export default SocialLogins;
