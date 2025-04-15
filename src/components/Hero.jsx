import { motion } from 'framer-motion';
import { styles } from '../styles';
import { ComputersCanvas } from './canvas';
import { FaLinkedin, FaGithub, FaFilePdf } from "react-icons/fa";


const Hero = () => {
  return (


    


      <>
      
    {/* ÍCONES  */}
    <div className="absolute top-24 right-6 flex gap-10 z-50">

      <a
        href="https://www.linkedin.com/in/leonardo-silva-pereira-402333239/"
        target="_blank"
        rel="noopener noreferrer"
        className="group w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition"
      >
        <FaLinkedin className="text-white group-hover:text-black text-6xl" />
      </a>

      <a
        href="https://github.com/leonardosip"
        target="_blank"
        rel="noopener noreferrer"
        className="group w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition"
      >
        <FaGithub className="text-white group-hover:text-black text-6xl" />
      </a>

      <a
        href="/Curriculo-Leonardo.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="group w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition"
      >
        <FaFilePdf className="text-white group-hover:text-black text-6xl" />
      </a>
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