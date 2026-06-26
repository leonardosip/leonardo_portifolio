import { useState } from 'react';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { ComputersCanvas } from './canvas';
import { FaLinkedin, FaGithub, FaFilePdf, FaLink } from "react-icons/fa";


const Hero = () => {
  const [isLinksOpen, setIsLinksOpen] = useState(false);

  const socialLinks = [
    {
      name: 'LinkedIn',
      href: 'https://www.linkedin.com/in/leonardo-silva-pereira-402333239/',
      icon: <FaLinkedin className="text-2xl" />,
    },
    {
      name: 'GitHub',
      href: 'https://github.com/leonardosip',
      icon: <FaGithub className="text-2xl" />,
    },
    {
      name: 'Curriculo',
      href: '/Curriculo-Leonardo.pdf',
      icon: <FaFilePdf className="text-2xl" />,
    },
  ];

  return (


    


      <>
      
    {/* LINKS  */}
    <div className="absolute top-24 right-6 z-50">
      <button
        type="button"
        onClick={() => setIsLinksOpen((current) => !current)}
        aria-expanded={isLinksOpen}
        aria-label="Abrir links"
        className="group w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition"
      >
        <FaLink className="text-white group-hover:text-black text-3xl" />
      </button>

      {isLinksOpen && (
        <div className="absolute right-0 mt-3 w-44 rounded-lg bg-black/80 border border-white/10 backdrop-blur-md overflow-hidden">
          {socialLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-4 py-3 text-white hover:bg-white hover:text-black transition"
            >
              {link.icon}
              <span className="text-sm font-medium">{link.name}</span>
            </a>
          ))}
        </div>
      )}
    </div>

    {/* HERO PRINCIPAL */}
    <section className="...">
      {/* Todo o conteúdo do seu Hero aqui */}
    </section>

    <section className="relative w-full h-screen
     mx-auto">
      <div className={`${styles.paddingX} absolute
      inset-0 top-[120px] max-w-7x1 mx-auto flex
      flex-row items-start gap-5`}>
        <div className=' flex flex-col
        justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#915eff]' />
          <div className='w-1 sm:h-80 h-40
          violet-gradient'/>
        </div>
        <div>
        <h1 className={`${styles.heroHeadText}
        text-white`}>Olá, me chamo <span 
        className="text-[#915eff]">Leonardo</span>
        </h1>
        <p className={`${styles.heroSubText} mt-2
        text-white-100`}>
            Sou desenvolvedor Front-End, <br 
            className='sm:block hidden'/>
             crio intefaces dinâmicas para a web
        </p>
        </div>
      </div>
      <ComputersCanvas />

      <div className='absolute xs:bottom-10
      bottom-32 w-full flex justify-center 
      items-center'>
        <a href='#about'>
          <div className='w-[35px] h-[64px]
          rounded-3xl border-4 border-secondary
          flex justify-center items-start p-2'>
            <motion.div
              animate={{
                y:[0, 24, 0]
              }}
              transition={{
                duration :1.5,
                repeat: Infinity,
                repeatType: "loop"
              }}
              className="w-3 h-3 rounded-full
              bg-secondary mb-1"
            />


          </div>
        </a>

      </div>
    </section>
    </>
  )
}

export default Hero
