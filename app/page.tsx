import { ContentContainer } from '@/shared/components/ContentContainer/ContentContainer';
import { ContentSection } from '@/shared/components/ContentSection/ContentSection';
import { PageWrapper } from '@/shared/components/PageWrapper/PageWrapper';
import { PodcastLinks } from '@/shared/components/PodcastLinks/PodcastLinks';
import Image from 'next/image';

export default function Home() {
  return (
    <PageWrapper>
      <ContentContainer>
        <ContentSection>
          <div className="flex w-full">
            <div className="relative mr-[60px] before:block before:bg-[url(/banner-image-lines.svg)] before:top-0 before:left-0 before:content-[''] before:w-[68px] before:h-[74px] before:absolute before:translate-x-[-35%] before:translate-y-[-30%]">
              <Image
                src="/main-banner.jpg"
                width={650}
                height={873}
                alt="Podcast studio with the host"
                className="rounded-xl"
              />
            </div>
            <div className="flex flex-col max-w-[526px] justify-center">
              <h1 className="text-[70px] leading-[1.2] font-reluglar mb-[90px]">
                Take your podcast to the{' '}
                <span className='inline-block relative before:block before:bg-contain before:max-w-[140px] before:w-full before:h-[104px] before:content-[""] before:top-0 before:left-0 before:absolute before:bg-[url(/banner-title-line.svg)]'>
                  next
                </span>{' '}
                <span className="font-bold">level</span>
              </h1>
              <div className="pl-[22px]">
                <h5 className="mb-1 text-[15px] leading-[24px]">Listen on</h5>
                <PodcastLinks />
              </div>
            </div>
          </div>
        </ContentSection>
      </ContentContainer>
    </PageWrapper>
  );
}
