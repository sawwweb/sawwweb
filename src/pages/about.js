import Heading from '@/components/Heading';
import { client } from '@/lib/client';
import { en } from '@/locales/en';
import { ru } from '@/locales/ru';
import { PortableText } from '@portabletext/react';
import { useState } from 'react';

About.titleEn = 'About me';
About.titleRu = 'Обо мне';

export default function About({ about, locale }) {
  const [current, setCurrent] = useState(1);

  const switchBlock = id => {
    id === current ? setCurrent(0) : setCurrent(id);
  };

  const t = locale === 'en' ? en : ru;

  return (
    <div className='about'>
      <Heading>{t.about}</Heading>
      <div className='about__wrapper flex flex-col lg:text-xl text-base gap-5'>
        {about.map((item, i) => {
          const activeClass = current === i + 1 ? 'active' : '';
          return (
            <div key={item._id} className={`about__item group ${activeClass}`}>
              <div
                onClick={() => switchBlock(i + 1)}
                className='item__heading mb-4 cursor-pointer hover:drop-shadow-shadow-c'>
                {item.heading} {current === i + 1 ? '-' : '+'}
              </div>
              <div className='item__content hidden group-[.active]:block duration-500'>
                <PortableText value={item.body} />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export async function getStaticProps({ locale }) {
  const query = `*[_type == 'about' && language == '${locale}']`;

  const about = await client.fetch(query);
  return {
    props: {
      about,
    },
  };
}
