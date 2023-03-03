import Heading from '@/components/Heading';
import Image from 'next/image';
import LinkIcon from '@/components/Icons/LinkIcon';
import Link from 'next/link';
import BackIcon from '@/components/Icons/BackIcon';
import urlFor, { client } from '@/lib/client';
import { en } from '@/locales/en';
import { ru } from '@/locales/ru';
import { PortableText } from '@portabletext/react';

Project.titleEn = 'Works';
Project.titleRu = 'Проекты';

export default function Project({ locale, item }) {
  const t = locale === 'en' ? en : ru;

  return (
    <div className='single'>
      <div className='flex items-center md:gap-8 gap-4 relative'>
        <Link
          href='/works'
          className='rounded-full mb-8 bg-black-c dark:bg-white-c scale-75 cursor-pointer lg:absolute -left-20'>
          <BackIcon />
        </Link>
        <Heading>{item.title}</Heading>
      </div>
      <div className='single__wrapper flex flex-wrap'>
        <div className='single__image lg:w-1/2 relative pr-5 lg:mb-0 mb-5'>
          <Image
            src={urlFor(item.image).url()}
            alt='work1'
            width={600}
            height={400}
          />
        </div>
        <div className='single__info md:w-1/2 md:text-lg text-sm flex flex-col gap-3'>
          <div className='info__title flex items-center'>
            {item.content[0].heading}
          </div>
          <div className='info__type'>
            {t.type}: {item.type.content[0].heading}
          </div>
          <div className='info__stack'>
            {t.stack}: {item.stack}
          </div>
          <div className='mt-auto md:py-3 md:px-4 p-2 rounded-3xl dark:text-white-c text-black-c dark:bg-black-c bg-white-c w-fit'>
            <Link
              className='flex gap-4 items-center'
              href={item.link}
              target='_blank'>
              {t.open} <LinkIcon />
            </Link>
          </div>
        </div>
        <div className='single__description mt-9 md:text-xl text-sm'>
          {item.content[0].description && (
            <PortableText value={item.content[0].description} />
          )}
        </div>
      </div>
    </div>
  );
}

export async function getStaticPaths() {
  const query = `*[_type == "works"] {
          slug{
              current
          }
      }`;

  const works = await client.fetch(query);
  const paths = works.map(item => ({
    params: {
      slug: item.slug.current,
    },
  }));

  return {
    paths,
    fallback: 'blocking',
  };
}

export async function getStaticProps({ params: { slug }, locale }) {
  const query = `*[_type == "works" && slug.current == '${slug}'][0]{
    title, image, logo, stack, slug, link,
    content[locale match '${locale}']{description, heading},
    type->{
      content[locale match '${locale}']
  }
  }`;

  const item = await client.fetch(query);
  return {
    props: {
      item,
    },
  };
}
