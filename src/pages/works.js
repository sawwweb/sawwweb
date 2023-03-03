import Heading from '@/components/Heading';
import Image from 'next/image';
import LinkIcon from '@/components/Icons/LinkIcon';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { en } from '@/locales/en';
import { ru } from '@/locales/ru';
import urlFor, { client } from '@/lib/client';
import { worksFilter } from './api/works';

Works.titleEn = 'Works';
Works.titleRu = 'Проекты';

export default function Works({ locale, initialWorks, initialCategories }) {
  const [works, setWorks] = useState(initialWorks);
  const [activeFilter, setActiveFilter] = useState('all');

  useEffect(() => {
    setWorks(initialWorks);
    setActiveFilter('all');
  }, [locale, initialWorks]);

  const setFilter = async (type, filter) => {
    const response = await worksFilter(type);
    setWorks(response);
    setActiveFilter(filter);
  };

  const resetFilter = () => {
    setWorks(initialWorks);
    setActiveFilter('all');
  };

  const t = locale === 'en' ? en : ru;

  const filterClasses =
    'md:py-3 md:px-7 p-2 rounded-3xl bg-white-c dark:bg-black-c cursor-pointer';
  const activeFilterClasses =
    'md:py-3 md:px-7 p-2 rounded-3xl dark:bg-white-c bg-black-c text-white-c dark:text-black-c cursor-pointer';
  const worksBigItemClasses =
    'relative duration-500 flex gap-5 bg-cold-gray rounded-3xl md:text-base text-sm';

  const bigItem = item => {
    return (
      <div className={worksBigItemClasses}>
        <div className='hidden xl:block relative rounded-l-3xl overflow-hidden'>
          <Link href={`/works/${item.slug.current}`} className=''>
            <Image
              src={urlFor(item.image).url()}
              alt='work1'
              width={400}
              height={100}
              sizes='100vw'
            />
          </Link>
        </div>
        <div className='item__info flex flex-col my-auto gap-3 p-5 z-10'>
          <div className='item__title text-xl font-bold md:m-0 m-auto'>
            <Link href={`/works/${item.slug.current}`}>{item.title}</Link>
          </div>
          <div className='item__type hidden md:block'>
            {t.type}: {item.type.content[0].heading}
          </div>
          <div className='item__stack hidden md:block'>
            {t.stack}: {item.stack}
          </div>
        </div>
        <div className='item__link  md:rounded-3xl rounded-full my-auto ml-auto mr-10 p-5 scale-150 '>
          <Link href={item.link} target='_blank'>
            <LinkIcon />
          </Link>
        </div>
      </div>
    );
  };

  return (
    <div className='works'>
      <Heading>{t.works}</Heading>
      <div className='works__filter flex flex-wrap md:gap-8 gap-4 mb-9'>
        <div
          onClick={resetFilter}
          className={
            activeFilter === 'all' ? activeFilterClasses : filterClasses
          }>
          {t.all}
        </div>
        {initialCategories.map(item => {
          return (
            <div
              key={item.slug.current}
              onClick={() => {
                setFilter(item.slug.current, item.slug.current);
              }}
              className={
                activeFilter === item.slug.current
                  ? activeFilterClasses
                  : filterClasses
              }>
              {item.content[0].heading}
            </div>
          );
        })}
      </div>
      <div className='works__wrapper flex flex-col gap-10'>
        {works.map(item => {
          return <div key={item._id}>{bigItem(item)}</div>;
        })}
      </div>
    </div>
  );
}

export async function getServerSideProps({ locale }) {
  const query = `*[_type == 'works']{
    _id, slug, stack, image, title, link,
    type->{
      content[locale match '${locale}'],
      slug
  }
  }`;
  const query2 = `*[_type == 'categories']{
    slug,
    content[locale match '${locale}'],
  }`;
  const works = await client.fetch(query);
  const categories = await client.fetch(query2);
  return {
    props: {
      initialWorks: works,
      initialCategories: categories,
    },
  };
}
