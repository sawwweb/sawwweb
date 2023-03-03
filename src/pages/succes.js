import Heading from '@/components/Heading';
import { en } from '@/locales/en';
import { ru } from '@/locales/ru';
import Link from 'next/link';

Succes.titleEn = 'Thank you!';
Succes.titleRu = 'Спасибо!';

export default function Succes({ locale }) {
  const t = locale === 'en' ? en : ru;
  return (
    <>
      <Heading>{t.success}</Heading>
      <div className='mt-auto md:py-3 md:px-4 p-2 rounded-3xl dark:text-white-c text-black-c dark:bg-black-c bg-white-c w-fit'>
        <Link className='flex gap-4 items-center' href='/'>
          {t.goHome}
        </Link>
      </div>
    </>
  );
}
