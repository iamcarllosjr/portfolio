import React from 'react'

const Contact = () => {
  return (
    <section id="contact"
    className="max-w-contentContainer mx-auto py-10 xl:py-32 flex flex-col gap-4
    items-center justify-center">
        <p className="font-semibold text-textGreen flex items-center tracking-wide">Whats Next ?</p>
        <h2 className='font-semibold text-5xl text-center'>Entre em Contato</h2>
        <p className="max-w-[600px] text-center text-textDark">
            Estou em busca de uma oportunidade com Desenvolvedor Frontend, obrigado por visitar meu site !
        </p>
        <a href="https://wa.me/5516993547171?text=Ol%C3%A1%2C+vi+o+seu+portfolio+e+gostaria+de+entrar+em+contato+com+voc%C3%AA+%21" target='_blank'>
            <button className='w-40 h-14 border border-textGreen mt-6 font-semibold text-sm text-textGreen tracking-wider rounded-md
             hover:bg-hoverColor duration-300'>Say Hello</button>
        </a>
    </section>
  )
}

export default Contact