import { en } from '@/locales/en';
import { ru } from '@/locales/ru';
import Link from 'next/link';
import Heading from './Heading';

export default function Menu({ isMenu, locale }) {
  const menuClass = isMenu
    ? 'lg:translate-x-[50vw]  left-0'
    : 'lg:translate-x-[100vw] left-[100vw]';

  const t = locale === 'en' ? en : ru;

  return (
    <div
      className={`bg-menu-light-bg dark:bg-menu-dark-bg backdrop-blur-sm h-screen w-screen lg:left-60 pl-20 pt-40 fixed z-20 top-0 duration-500 text-black-c dark:text-white-c ${menuClass}`}>
      <Heading>{t.menu}</Heading>
      <nav className='md:text-3xl text-2xl font-semibold uppercase'>
        <ul className='flex flex-col gap-6'>
          <li className='flex items-end hover:drop-shadow-shadow-c cursor-pointer'>
            <Link className='flex items-end relative' href='/'>
              <span className='md:text-xl text-sm mr-5 absolute -left-10'>
                01
              </span>{' '}
              {t.home}
            </Link>
          </li>
          <li className='flex items-end hover:drop-shadow-shadow-c cursor-pointer'>
            <Link className='flex items-end relative' href='/about'>
              <span className='md:text-xl text-sm mr-5 absolute -left-10'>
                02
              </span>{' '}
              {t.about}
            </Link>
          </li>
          <li className='flex items-end hover:drop-shadow-shadow-c cursor-pointer'>
            <Link className='flex items-end relative' href='/works'>
              <span className='md:text-xl text-sm mr-5 absolute -left-10'>
                03
              </span>{' '}
              {t.works}
            </Link>
          </li>
          <li className='flex items-end hover:drop-shadow-shadow-c cursor-pointer'>
            <Link className='flex items-end relative' href='/contact'>
              <span className='md:text-xl text-sm mr-5 absolute -left-10'>
                04
              </span>{' '}
              {t.contact}
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
