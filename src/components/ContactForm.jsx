import { en } from "@/locales/en";
import { ru } from "@/locales/ru";

export default function ContactForm({locale}) {
    const inputClasses =
    'rounded-3xl placeholder:text-black-c dark:placeholder:text-white-c bg-cold-gray py-3 px-10 placeholder:opacity-75';
    const buttonClasses =
    'rounded-3xl bg-black-c dark:bg-white-c text-white-c dark:text-black-c py-3 px-10';
    
    const t = locale === 'en' ? en : ru;
    return (
    <form
              name='contact'
              method='POST'
              data-netlify='true'
              action='/success'
              className='flex flex-col gap-5 lg:pr-20 pr-0'>
              <input type="hidden" name="form-name" value="contact" />
              <input
                type='text'
                id='name'
                className={inputClasses}
                placeholder={t.yourName}
              />
              <input
                type='email'
                id='email'
                className={inputClasses}
                placeholder={t.yourEmail}
              />
              <textarea
                id='message'
                className={`${inputClasses} resize-none`}
                placeholder={t.yourMessage}
              />
              <input type='submit' value={t.submit} className={buttonClasses} />
            </form>
  )
}
