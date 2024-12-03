import Image from 'next/image';
import { GradientHeading } from './ui/gradient-heading';

const Banner = () => {
  return (
    <div className='flex flex-col items-center px-5 text-white'>
      <div className='h-2 lg:h-8 text-center'>
        <GradientHeading className='text-2xl lg:text-3xl pb-2 underline underline-offset-8'>
          Sean Builds Things.
        </GradientHeading>
      </div>
      <div className='mt-12 animate-in flex flex-col'>
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

      <div className='h-2 lg:h-8'></div>
      <div className='animate-in flex flex-col items-center rounded-2xl p-2 lg:p-4 max-w-sm lg:max-w-md'>
        <p className='text-lg text-center'>
          Hi, I`m Sean 👋. I build things. Generally with JavaScript,
          TypeScript, React, and Node.js. I also like to play with hardware to
          connect the physical world (IoT).
        </p>
      </div>
    </div>
  );
};

export default Banner;
