import React from 'react'
import Imgfooter from '../images/img-footer.png'
import { Instagram, Facebook, Linkdin, Sms, Call, } from '../common/Icons'

function Footer() {
  return (
    <section className='bg-[#000000] mt-[-2px] overflow-hidden relative'>
      <div className='container mx-auto max-w-[1140px] px-[12px] z-50 relative'>
        <div className='flex flex-row  flex-wrap mx-[-12px] pt-[64px] max-md:pt-[40px] pb-10'>
          <div className='w-full lg:w-[33.33%] px-[12px]'>
            <img className=' cursor-pointer' src={Imgfooter} alt="img" />
            <p className=' max-w-[369px] text-[16px] font-Inter font-[500] leading-[25px] text-[#CCCCCC] pt-4'>En Exclusive Games somos un equipo apasionado de personas dedicadas al desarrollo de multiplataformas para juegos de azar</p>
            <div className='flex items-center gap-[12px] pt-[24px]'>
              <div className='w-[32px] h-[32px] rounded-[16px] bg-[#292929] flex justify-center items-center hover:-translate-y-2 duration-300 ease-linear'>
                <a href="https://www.instagram.com/" target='_blank'>
                  <Instagram />
                </a>

              </div>
              <div className='w-[32px] h-[32px] rounded-[16px] bg-[#292929] flex justify-center items-center hover:-translate-y-2 duration-300 ease-linear'>
                <a href="https://www.facebook.com/" target='_blank'>
                  <Facebook />
                </a>

              </div>
              <div className='w-[32px] h-[32px] rounded-[16px] bg-[#292929] flex justify-center items-center hover:-translate-y-2 duration-300 ease-linear'>
                <a href="https://www.linkedin.com/login" target='_blank'>
                  <Linkdin />
                </a>

              </div>
            </div>
          </div>
          <div className='w-full mt-5 lg:mt-[10px] sm:w-[33.33%]  lg:w-[16.66%] px-[12px]'>
            <h2 className='font-[700] font-Inter text-[16px] text-white pb-[16px] leading-[25.6px]'>Menú principal</h2>
            <ul className='flex flex-col gap-[12px]'>
              <li> <a href="" className='font-[500] font-Inter text-[16px] text-[#CCCCCC] relative after:absolute after:h-[2px] after:w-0 after:inline-block after:bottom-[-1px] after:left-0 hover:after:w-full after:bg-[#CCCCCC] after:duration-300'>Hogar</a></li>
              <li> <a href="" className='font-[500] font-Inter text-[16px] text-[#CCCCCC] relative after:absolute after:h-[2px] after:w-0 after:inline-block after:bottom-[-1px] after:left-0 hover:after:w-full after:bg-[#CCCCCC] after:duration-300'>Misión</a></li>
              <li> <a href="" className='font-[500] font-Inter text-[16px] text-[#CCCCCC] relative after:absolute after:h-[2px] after:w-0 after:inline-block after:bottom-[-1px] after:left-0 hover:after:w-full after:bg-[#CCCCCC] after:duration-300'>Tragamonedas</a></li>
              <li> <a href="" className='font-[500] font-Inter text-[16px] text-[#CCCCCC] relative after:absolute after:h-[2px] after:w-0 after:inline-block after:bottom-[-1px] after:left-0 hover:after:w-full after:bg-[#CCCCCC] after:duration-300'>Por qué elegirnos</a></li>
              <li> <a href="" className='font-[500] font-Inter text-[16px] text-[#CCCCCC] relative after:absolute after:h-[2px] after:w-0 after:inline-block after:bottom-[-1px] after:left-0 hover:after:w-full after:bg-[#CCCCCC] after:duration-300'>Ofertas</a></li>
            </ul>
          </div>
          <div className='w-full mt-5 lg:mt-[10px] sm:w-[33.33%]   lg:w-[25%] px-[12px] flex lg:justify-center '>
            <div className='flex flex-col'>
              <h2 className='font-[700] font-Inter text-[16px] text-white pb-[16px] leading-[25.6px]'>Atención al cliente</h2>

              <ul className='flex flex-col gap-[12px]'>
                <li> <a href="" className='font-[500] font-Inter text-[16px] text-[#CCCCCC] relative after:absolute after:h-[2px] after:w-0 after:inline-block after:bottom-[-1px] after:left-0 hover:after:w-full after:bg-[#CCCCCC] after:duration-300'>¿Necesitas ayuda?</a></li>
                <li> <a href="" className='font-[500] font-Inter text-[16px] text-[#CCCCCC] relative after:absolute after:h-[2px] after:w-0 after:inline-block after:bottom-[-1px] after:left-0 hover:after:w-full after:bg-[#CCCCCC] after:duration-300'>política de privacidad</a></li>
                <li> <a href="" className='font-[500] font-Inter text-[16px] text-[#CCCCCC] relative after:absolute after:h-[2px] after:w-0 after:inline-block after:bottom-[-1px] after:left-0 hover:after:w-full after:bg-[#CCCCCC] after:duration-300'>Términos de servicios</a></li>

              </ul>
            </div>
          </div>
          <div className='w-full mt-5 lg:mt-[10px] sm:w-[33.33%]   lg:w-[25%] px-[12px] flex lg:justify-end '>
            <div className='flex flex-col'>
              <h2 className='font-[700] font-Inter text-[16px] text-white pb-[16px] leading-[25.6px]'>Ponerse en contacto</h2>
              <div className='flex flex-col gap-[12px]'>
                <div className='flex items-center gap-[8px]'>
                  <Sms />
                  <p className=' font-[500] font-Inter text-[16px] text-[#CBCBCB] text-nowrap'><a href="mailto:sample@email.com" data-rel="external" className=' text-nowrap' >juegosexclusivos@gmail.com</a></p>

                </div>
                <div className='flex items-center gap-[8px]'>
                  <Call />
                  <p className=' font-[500] font-Inter text-[16px] text-[#CBCBCB]'><a href="tel:1231231234" data-rel="external">(101)342-7873</a></p>

                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
      <div className=" h-[1px] bg-white bg-opacity-[10%] "></div>
      <div className='flex justify-center py-[20px]'>
        <p className='text-[#808080] text-[16px] font-[500] font-Inter text-center'>© Juegos exclusivos - Todos los derechos reservados 2023</p>
      </div>
      <div className=' bottom-0 left-0 absolute  max-md:hidden'>
        <svg width="236" height="288" viewBox="0 0 236 288" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g opacity="0.5" filter="url(#filter0_f_112_71)">
            <circle cy="236" r="85" fill="url(#paint0_linear_112_71)" />
          </g>
          <defs>
            <filter id="filter0_f_112_71" x="-235.6" y="0.399994" width="471.2" height="471.2" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
              <feGaussianBlur stdDeviation="75.3" result="effect1_foregroundBlur_112_71" />
            </filter>
            <linearGradient id="paint0_linear_112_71" x1="132.349" y1="312.443" x2="-87.731" y2="146.638" gradientUnits="userSpaceOnUse">
              <stop stop-color="#51C8EF" />
              <stop offset="1" stop-color="#7AF57A" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className=' bottom-0 right-0 absolute max-md:hidden '>
        <svg width="241" height="400" viewBox="0 0 241 400" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g opacity="0.5" filter="url(#filter0_f_112_72)">
            <circle cx="241" cy="186" r="90" fill="url(#paint0_linear_112_72)" />
          </g>
          <defs>
            <filter id="filter0_f_112_72" x="0.399994" y="-54.6" width="481.2" height="481.2" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
              <feGaussianBlur stdDeviation="75.3" result="effect1_foregroundBlur_112_72" />
            </filter>
            <linearGradient id="paint0_linear_112_72" x1="381.134" y1="266.94" x2="148.108" y2="91.3818" gradientUnits="userSpaceOnUse">
              <stop stop-color="#51C8EF" />
              <stop offset="1" stop-color="#7AF57A" />
            </linearGradient>
          </defs>
        </svg>

      </div>
    </section>
  )
}

export default Footer