import ContactForm from '@/components/ContactForm';
import Heading from '@/components/Heading';
import GitHubIcon from '@/components/Icons/GitHubIcon';
import LinkIcon from '@/components/Icons/LinkIcon';
import MailIcon from '@/components/Icons/MailIcon';
import TelegramIcon from '@/components/Icons/TelegramIcon';
import { client } from '@/lib/client';
import { en } from '@/locales/en';
import { ru } from '@/locales/ru';
import Link from 'next/link';

Contact.titleEn = 'Contact';
Contact.titleRu = 'Контакты';

export default function Contact({ locale, socials }) {
  const t = locale === 'en' ? en : ru;

  return (
    <div className='contact'>
      <Heading>{t.contact}</Heading>
      <div className='contact__wrapper lg:text-xl text-base flex lg:flex-row flex-col justify-between'>
        <div className='contact__socials lg:w-1/3 w-full flex flex-col lg:mb-0 mb-10 lg:gap-14 gap-7'>
          {socials.map(item => {
            return (
              <Link
                key={item._id}
                href={item.link}
                target='_blank'
                className='socials__item flex gap-5 items-center'>
                {item.title === 'Telegram' && <TelegramIcon />}
                {item.title === 'GitHub' && <GitHubIcon />}
                {item.title === 'Email' && <MailIcon />}
                {item.title} <LinkIcon />
              </Link>
            );
          })}
        </div>

        <div className='contact__form lg:w-2/3 w-full flex flex-col gap-5'>
          <div className='mb-2 lg:text-xl text-base'>{t.textMe}</div>
          <div className='form__wrapper'>
            <ContactForm locale />
          </div>
        </div>
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const query = `*[_type == 'socials']`;

  const socials = await client.fetch(query);
  return {
    props: {
      socials,
    },
  };
}
