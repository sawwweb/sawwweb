import { getSocials } from '@/pages/api/socials';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import CloseIcon from './Icons/CloseIcon';
import GitHubIcon from './Icons/GitHubIcon';
import MailIcon from './Icons/MailIcon';
import TelegramIcon from './Icons/TelegramIcon';

export default function Footer() {
  const router = useRouter();

  const [isHide, setIsHide] = useState(false);
  const [socials, setSocials] = useState([]);

  const socialsHandler = async () => {
    const response = await getSocials();
    setSocials(response);
  };

  useEffect(() => {
    if (router.route === '/contact') {
      setIsHide(true);
    } else {
      setIsHide(false);
      socialsHandler();
    }
  }, [router.route]);

  return (
    <footer className='fixed bottom-10 z-10'>
      <div className='footer__wrapper flex justify-between mx-auto'>
        {isHide ? (
          ''
        ) : (
          <>
            <div className='lg:flex hidden socials flex-col gap-8 scale-75'>
              {socials.map(item => {
                return (
                  <Link key={item._id} href={item.link} target='_blank'>
                    {item.title === 'Telegram' && <TelegramIcon />}
                    {item.title === 'GitHub' && <GitHubIcon />}
                    {item.title === 'Email' && <MailIcon />}
                  </Link>
                );
              })}
            </div>
          </>
        )}
      </div>
    </footer>
  );
}
