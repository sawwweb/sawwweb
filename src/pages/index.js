import { client } from '@/lib/client';
import Link from 'next/link';
import { PortableText } from '@portabletext/react';

Home.titleEn = 'Main';
Home.titleRu = 'Главная';

export default function Home({ hello }) {
  return (
    <div className='home'>
      <div className='home__wrapper flex flex-col'>
        <div className='hello__block relative lg:w-1/2 mx-auto px-14  py-11 rounded-3xl bg-white-c dark:bg-black-c'>
          <div className='hello__title lg:text-3xl text-xl mb-5 font-rubik'>
            {hello.heading}
          </div>
          <div className='hello__text lg:text-2xl text-sm'>
            <PortableText value={hello.body} />
          </div>
          <div className='note__circle w-9 h-9 rounded-full bg-accent-2 border-2 border-black-c absolute -top-4 -right-4'></div>
        </div>
        <div className='links__block flex flex-col mt-8 lg:mx-auto lg:w-1/2 text-right lg:text-2xl text-sm gap-4'>
          {hello.links.map(item => {
            return (
              <div
                key={item.href}
                className='links__item hover:drop-shadow-shadow-c'>
                <Link href={`/${item.href}`}>{item.title}</Link>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export async function getStaticProps({ locale }) {
  const query = `*[_type == 'hello' && language == '${locale}'][0]`;

  const hello = await client.fetch(query);
  return {
    props: {
      hello,
    },
  };
}
