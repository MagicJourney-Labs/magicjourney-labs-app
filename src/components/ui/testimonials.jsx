'use client';

import Link from 'next/link';
import ReactPlayer from 'react-player/youtube';
import { useState } from 'react';
import Image from 'next/image';

const Testimonials = ({ testimonials }) => {
  const [isPlaying, setIsPlaying] = useState({});

  const { title, subtitle, link, reviewers } = testimonials;
  const togglePlay = (reviewerId) => {
    setIsPlaying((prevState) => ({
      ...prevState,
      [reviewerId]: !prevState[reviewerId],
    }));
  };
  return (
    <div className='pt-20 pb-20 bg-zinc-50'>
      <div className=' flex flex-col items-center mx-auto max-w-7xl container'>
        <h2 className='text-[30px] pb-6 sm:text-[36px] font-bold '>{title}</h2>
        <h3 className='mx-auto max-w-2xl text-center text-gray-900 text-lg font-normal leading-7 pb-6 sm:pb-20'>
          {subtitle}
        </h3>
        <div className='flex justify-center gap-12 pb-14 flex-wrap'>
          {reviewers.map((reviewer) => (
            <div className='relative' key={reviewer.id}>
              {isPlaying[reviewer.id] ? (
                <ReactPlayer
                  controls={false}
                  width='350px'
                  height='500px'
                  playing={true}
                  url={reviewer.videoLink}
                  className='rounded-3xl overflow-hidden'
                />
              ) : (
                <Image
                  width={350}
                  height={500}
                  style={{
                    width: '350px',
                    height: '500px',
                    objectFit: 'cover',
                  }}
                  sizes='(min-width: 440px) 350px, calc(95vw - 49px)'
                  alt='img'
                  src={reviewer.photo.url}
                  className='rounded-3xl '
                />
              )}
              <div className='flex gap-2 justify-between items-center absolute bottom-7 left-8 w-[280px]'>
                <div className='  flex flex-col text-white'>
                  <span className='text-lg font-semibold '>
                    {reviewer.name}
                  </span>
                  <span className='text-sm font-normal'>{reviewer.place}</span>
                </div>
              </div>
              <div
                onClick={() => togglePlay(reviewer.id)}
                className=' absolute bottom-7 right-8 cursor-pointer bg-white rounded-2xl w-14 h-14 '
              ></div>
            </div>
          ))}
        </div>
      </div>
      <Link
        href={link.href}
        className='flex justify-center items-center gap-3 text-blue-600 font-semibold text-base'
      >
        <span>{link.name}</span>
        <Image
          className='m-0'
          src='/up-right-48-blue.png'
          alt='arrow'
          width={20}
          height={20}
        />
      </Link>
    </div>
  );
};

export default Testimonials;
