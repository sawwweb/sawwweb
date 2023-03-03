export default function ContactForm() {
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
