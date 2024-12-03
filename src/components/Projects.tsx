import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';

const projectData = [
  {
    id: 1,
    title: 'Special Spotter',
    description: 'Full-stack web application built with Next.js and Supabase.',
    imageUrl: '/assets/special-spotter.png',
  },
  {
    id: 2,
    title: 'Tip n Tax',
    description: 'Tip and tax calculator built with React Native.',
    imageUrl: '/placeholder2.jpg',
  },
  {
    id: 3,
    title: 'Order Pager System',
    description:
      'NFC based order system built with Arduino, Next.js web app, Node.js server, Redis database, and a Electron desktop app.',
    imageUrl: '/placeholder3.jpg',
  },
];

const Projects = () => {
  return (
    <div className='py-8 w-full'>
      <h2 className='text-3xl text-center mb-6 text-white'>
        Personal Projects
      </h2>
      <Carousel className='w-full max-w-xl mx-auto'>
        <CarouselContent>
          {projectData.map((project) => (
            <CarouselItem key={project.id}>
              <div className='p-1'>
                <Card className='bg-[#0D0F11] border-0'>
                  <CardContent className='flex flex-col gap-4 p-6 text-white'>
                    {/* <Image
                      src={project.imageUrl}
                      alt={project.title}
                      height={100}
                      width={100}
                      className='w-full h-48 object-cover rounded-lg'
                    /> */}
                    <h3 className='text-xl'>{project.title}</h3>
                    <p>{project.description}</p>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};

export default Projects;
