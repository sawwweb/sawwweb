import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

export default function DefaultLayout({ children }) {
  const router = useRouter();
  const [isMain, setIsMain] = useState(false);
  useEffect(() => {
    if (router.route === '/') {
      setIsMain(true);
    } else {
      setIsMain(false);
    }
  }, [router.route]);

  const mainClass = isMain ? '' : 'lg:ml-40 ml-0';

  return (
    <>
      <div className='relative flex flex-col md:p-20 p-4 bg-white-c dark:bg-black-c bg-gradient-bg bg-fixed min-h-screen duration-1000'>
        <Header />
        <main className={`text-black-c dark:text-white-c mt-14 ${mainClass}`}>
          {children}
        </main>
        <Footer />
      </div>
    </>
  );
}
