import DarkIcon from '@/components/Icons/DarkIcon';
import LightIcon from '@/components/Icons/LightIcon';
import MenuIcon from '@/components/Icons/MenuIcon';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import CloseIcon from './Icons/CloseIcon';
import LogoIcon from './Icons/LogoIcon';
import Menu from './Menu';

export default function Header() {
  const [isDark, setIsDark] = useState();
  const [isMenu, setIsMenu] = useState(false);

  useEffect(() => {
    if (localStorage.theme === 'dark') {
      setIsDark(true);
    }
  }, [isDark]);

  const switchTheme = () => {
    document.documentElement.classList.toggle('dark');
    if (isDark) {
      localStorage.theme = 'light';
    } else {
      localStorage.theme = 'dark';
    }
    setIsDark(!isDark);
  };

  const switchMenu = () => {
    setIsMenu(!isMenu);
  };

  const router = useRouter();

  const { pathname, asPath, query } = router;

  const { locale } = router;

  useEffect(() => {
    setIsMenu(false);
  }, [router.route]);

  return (
    <header className='header text-black-c dark:text-white-c'>
      <div className='header__wrapper flex justify-between items-center mx-auto z-30 relative'>
        <div className='logo font-semibold text-2xl font-rubik'>
          <Link href='/'>
            <LogoIcon />
          </Link>
        </div>
        <div className='menu flex gap-8'>
          {locale === 'en' ? (
            <div
              onClick={() => {
                router.push({ pathname, query }, asPath, {
                  locale: 'ru',
                });
              }}
              className='cursor-pointer font-roboto font-semibold uppercase text-2xl m-auto hover:drop-shadow-shadow-c'>
              RU
            </div>
          ) : (
            <div
              onClick={() => {
                router.push({ pathname, query }, asPath, {
                  locale: 'en',
                });
              }}
              className='cursor-pointer font-roboto font-semibold uppercase text-2xl m-auto hover:drop-shadow-shadow-c'>
              EN
            </div>
          )}
          <div
            onClick={switchTheme}
            className='font-roboto uppercase cursor-pointer hover:drop-shadow-shadow-c'>
            {isDark ? <LightIcon /> : <DarkIcon />}
          </div>
          <div
            onClick={switchMenu}
            className='cursor-pointer hover:drop-shadow-shadow-c'>
            {isMenu ? <CloseIcon /> : <MenuIcon />}
          </div>
        </div>
      </div>
      <Menu isMenu={isMenu} locale={locale} />
      {isMenu && (
        <div
          onClick={switchMenu}
          className='menu__back w-full h-full absolute left-0 top-0 z-10'></div>
      )}
    </header>
  );
}
