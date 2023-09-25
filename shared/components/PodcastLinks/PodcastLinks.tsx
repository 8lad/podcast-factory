import React from 'react';
import Image from 'next/image';
import { podcastServicesLinks } from '../../../constants/podcastServicesLinks';

export const PodcastLinks = () => {
  return (
    <div className="grid items-center grid-cols-[repeat(5,32px)] gap-[17px]">
      {podcastServicesLinks.map(({ name, url, alt, iconPath }) => (
        <a
          href={url}
          key={name}
          rel="noopener noreferrer"
          target="_blank"
          className=" duration-500 rounded-[50%] w-[32px] h-[32px] hover:shadow-lg hover:scale-125  hover:shadow-main-accent-color"
        >
          <Image width={32} height={32} src={iconPath} alt={alt} />
        </a>
      ))}
    </div>
  );
};
