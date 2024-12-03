import Image from 'next/image';
import Link from 'next/link';
import { Github, Mail, LinkedinIcon } from 'lucide-react';

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col items-center justify-around lg:justify-center p-12 bg-gradient-to-b from-blue-400/60 ..'>
      <div className='animate-in flex flex-col items-center'>
        <Image
          src='/assets/sean.png'
          alt='Sean'
          height={200}
          width={200}
          placeholder='blur'
          blurDataURL='/assets/sean-min.png'
          className='rounded-2xl m-4'
        />
      </div>
      <div className='h-2 lg:h-8'>
        <h1 className='text-2xl lg:text-3xl font-bold pb-2'>
          Sean Builds Things
        </h1>
      </div>
      <div className='h-2 lg:h-8'></div>
      <div className='animate-in flex flex-col items-center rounded-2xl p-2 lg:p-4 max-w-sm lg:max-w-md bg-neutral-700/50'>
        <p className='text-lg'>
          Hi, I`m Sean 👋. I build things. Generally with JavaScript,
          TypeScript, React, and Node.js. I also like to play with hardware to
          connect the physical world (IoT).
        </p>
      </div>
      <div className='h-2 lg:h-8'></div>
      <div className='animate-in flex flex-col items-center rounded-2xl p-2 lg:p-4 max-w-sm lg:max-w-md bg-neutral-700/50'>
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
    </main>
  );
}
