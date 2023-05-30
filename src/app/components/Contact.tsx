import React from 'react'

const Contact = () => {
  return (
    <section id="contact"
    className="max-w-contentContainer mx-auto py-10 xl:py-32 flex flex-col gap-4
    items-center justify-center">
        <p className="font-semibold text-textGreen flex items-center tracking-wide">Whats Next ?</p>
        <h2 className='font-semibold text-5xl'>Get in Touch</h2>
        <p className="max-w-[600px] text-center text-textDark">
            Although im not currently for any new opportunities, my inbox
            is always open. Wheter you have a question or just want to say hi, Ill
            try my best to get back to you ! 
        </p>
        <a href="https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox?compose=new" target='_blank'>
            <button className='w-40 h-14 border border-textGreen mt-6 font-semibold text-sm text-textGreen tracking-wider rounded-md
             hover:bg-hoverColor duration-300'>Say Hello</button>
        </a>
    </section>
  )
}

export default Contact