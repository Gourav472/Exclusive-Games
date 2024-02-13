import React from 'react'
import casino from '../images/casino.png'
import { Btn1 } from '../common/Icons'

function Eegirnos() {
  return (
    <section className='bg-4 lg:bg-[#00141B] bg-white mt-[-2px] '>
      <div className='container max-w-[1140px] mx-auto px-[12px]'>
        <div className='flex md:flex-row flex-col-reverse flex-wrap mx-[-12px] pt-10 sm:pt-14 lg:pt-[304px] lg:pb-[324px] pb-10 sm:pb-14 '>
          <div className='w-full md:w-[50%]  mt-[30px] md:mt-0 lg:mt-[79px] px-[12px]'>
            <div className='flex flex-col'>
              <h2 className=' font-[400] font-Anton text-[48px] ledaing-[57px] text-[#00141B] max-md:text-[32px] max-md:text-center max-md:leading-[40px]'>Por qué elegirnos</h2>
              <p className='pt-[16px] max-md:text-[18px] max-md:text-center md:max-w-[526px] font-[500] font-Inter text-[16px] leading-[ 25px]'>Con Exclusive Games tenés Exclusivos beneficios. Te reintegramos todo lo invertido en fichas en la moneda que elijas. En Exclusive Games siempre sumamos nuevos juegos. Juegos crash, los juegos interactivos que más pide la gente. Con Exclusive Games empezás a ganar ya! Creamos tu plataforma en solo 2 semanas.</p>
              <div className='relative pt-[24px] flex max-md:justify-center z-40'>
              <button class=" bg-gradient-to-l from-[#51C8EF] to-[#7AF57A] text-black  overflow-hidden relative px-[46px] py-[13px] rounded-[41px] text-[16px] font-Inter font-[700] hover:from-[#7AF57A] hover:to-[#51C8EF] outline-none duration-500 ease-linear group">
              <span class="bg-black shadow-black absolute -top-[150%] left-0 inline-flex w-80 h-[5px] rounded-[41px] opacity-50 group-hover:top-[150%] duration-700 ease-linear shadow-[0_0_10px_10px_#FFF]"></span>
              Aprende más
            </button>
                <div className='absolute bottom-[-4px] max-md:hidden left-[-4px] -z-10'>
                  <Btn1/>
                </div>
              </div>
            </div>
          </div>
          <div className='w-full md:w-[50%] px-[12px]'>
            <div>
              <img className='w-full cursor-pointer' src={casino} alt="casino" />
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Eegirnos