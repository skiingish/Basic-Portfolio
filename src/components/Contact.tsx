import Image from 'next/image';
import {
  Github,
  Mail,
  LinkedinIcon,
  Eye,
  BrainCogIcon,
  Glasses,
  GlassesIcon,
} from 'lucide-react';

const Contact = () => {
  return (
    <div className='flex flex-col items-center px-5 text-white'>
      <div className='animate-in flex flex-col items-center rounded-2xl p-2 lg:p-4 max-w-sm lg:max-w-md text-center'>
        <GlassesIcon className='my-8' size={48} />
        <p className='text-lg'>
          You can find me{' '}
          <a
            className='text-cyan-200/80 hover:text-cyan-200/100'
            href='https://au.linkedin.com/in/sean-corcoran-aa1732181'
          >
            here <LinkedinIcon className='inline mt-[-0.19rem]' size={16} />
          </a>{' '}
          and{' '}
          <a
            className='text-cyan-200/80 hover:text-cyan-200/100'
            href='https://github.com/skiingish'
          >
            here <Github className='inline mt-[-0.19rem]' size={16} />
          </a>{' '}
          or send me an email {}{' '}
          <a
            className='text-cyan-200/80 hover:text-cyan-200/100'
            href='mailto:hello@seanbuildsthings.com?subject=Hello'
          >
            here <Mail className='inline mt-[-0.19rem]' size={16} />.
          </a>
        </p>
      </div>
    </div>
  );
};

export default Contact;
