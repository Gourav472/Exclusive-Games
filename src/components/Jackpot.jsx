import React from 'react'
import jackpotimg from '../images/jackpotimg.png'
import elipse1 from '../images/elipse1.png'
import elipse2 from '../images/elipse2.png'
import jackpotimg1 from '../images/Black-Jack.png'
import jackpotimg2 from '../images/jackpot3img-2.png'
import jackpotimg3 from '../images/live-betting.png'
import { Btn2, Elipse10, Elipse11, Tick } from '../common/Icons'

function Jackpot() {
  return (
    <section className='bg-img-3  bg-[#00141B] bg-cover bg-size bg-[100%] relative mt-[-2px] '>
      <div className='container mx-auto max-w-[1140px] px-[12px]  relative z-50'>
        <div className='flex flex-row flex-wrap mx-[-12px] pt-[90px] max-md:pt-10 max-md:pb-10 pb-[150px]'>
          <div className='w-full lg:w-[50%]  px-[12px] flex max-lg:justify-center'>
            <div>
              <img className='w-full cursor-pointer' src={jackpotimg} alt="img" />
            </div>
          </div>
          <div className='w-full lg:w-[50%]  px-[12px]'>
            <div className='flex flex-col'>
              <div className=' pt-[30px]'>
                <h2 className='text-[48px] font-[400] font-Anton leading-[57px] max-lg:text-center max-lg:text-[32px] max-xl:text-[42px] max-lg:leading-[45px] text-white'>Potenciando sus elecciones</h2>
                <p className='pt-[16px]  font-[500] text-[16px] font-Inter text-[#CDD0D1] max-lg:text-[18px] max-lg:text-center'>Con Exclusive Game lo mejor está de tu lado.</p>
              </div>
              <div className='flex max-lg:justify-center' >
                <div className='flex flex-col gap-3 pt-6 '>
                  <div className='flex items-center gap-[8px]'>
                  <Tick/>
                    <p className='font-[500] text-[16px] font-Inter text-[#CDD0D2]'>Tecnología HTML5</p>

                  </div>
                  <div className='flex items-center gap-[8px]'>
                  <Tick/>
                    <p className='font-[500] max-w-[143px] text-[16px] font-Inter text-[#CDD0D2]'>Versión PC y móvil</p>

                  </div>
                  <div className='flex items-center gap-[8px]'>
               <Tick/>
                    <p className='font-[500] text-[16px] max-w-[380px] font-Inter text-[#CDD0D2]'>Control de RTP (controlás qué porcentaje pagar)</p>

                  </div>
                  <div className='flex  gap-[8px]'>
                 <Tick/>
                    <p className='font-[500] text-[16px] font-Inter max-w-[380px] text-[#CDD0D2]'>Bonos editables, happy hours, Jackpots, códigos  promocionales.</p>

                  </div>
                  <div className='flex items-center gap-[8px]'>
                   <Tick/>
                    <p className='font-[500] max-w-[380px] text-[16px] font-Inter text-[#CDD0D2]'>Aplicación para android y windows de regalo.</p>

                  </div>
                </div>
              </div>
              <p className='max-w-[515px] max-lg:max-w-[900px] text-[16px] font-Inter font-[500] text-[#CDD0D1] max-lg:text-center pt-6'>Te reintegramos todo lo invertido en fichas en la moneda que elijas.</p>
            </div>
          </div>
        </div>
        <div className='flex justify-center'>
          <div className='max-w-[1043px] w-full py-[96px] bg-transparent rounded-[16px] border-[0.5px] flex justify-center relative overflow-hidden '>
            <p className='max-w-[548px] font-Anton font-[400] text-[48px] leading-[57px] text-white text-center max-md:text-[32px] max-md:leading-[37px] z-20'>lanza tu propia plataforma en sólo 2 semanas</p>
            <div className='absolute left-0 top-0'>
              <img className=' bg-opacity-[30%]' src={elipse1} alt="elipse" />
            </div>
            <div className='absolute right-[0%] top-[-1%]'>
              <img className=' bg-opacity-[30%]' src={elipse2} alt="elipse" />
            </div>
          </div>
        </div>
        <div className='flex justify-center max-md:pt-10 pt-[150px]'>
          <p className='maxw-[291px] font-[400] font-Anton text-[48px] max-md:text-[32px] max-md:leading-[35px] leading-[57px] text-white'>Juegos en vivo</p>
        </div>
        <div className='flex gap-[24px] max-md:pt-10 max-md:pb-10 max-sm:flex-wrap max-sm:justify-center pt-[60px] pb-[100px] '>
          <div className='relative group overflow-hidden'>
            <img className='w-full cursor-pointer' src={jackpotimg1} alt="img" />
            <div className='w-full h-full bg-black/80  flex rounded-[8px] justify-center items-center absolute left-[-100%] top-[0%] group-hover:left-0 duration-500 ease-linear'>
              <div className='relative'>
                <button className=' text-[16px] font-[700] max-md:px-[30px] font-Inter pl-[46px] pt-[13px] pr-[46px] pb-[13px] text-white rounded-[41px] border  bg-transparent hover:bg-gradient-to-l  hover:from-[#7AF57A] hover:to-[#51C8EF] duration-300 ease-linear hover:text-black  '>Reproducir ahora</button>
                <div className='absolute bottom-[-4px] left-[-4px]'>
                 <Btn2/>
                </div>
              </div>
            </div>
          </div>
          <div className='relative group overflow-hidden'>
            <img className='w-full cursor-pointer' src={jackpotimg2} alt="img" />
            <div className='w-full h-full  bg-black/80 rounded-[8px] flex justify-center items-center absolute left-[-100%] top-[0%] group-hover:left-0 duration-500 ease-linear'>
              <div className='relative'>
                <button className=' text-[16px] max-md:px-[30px] font-[700] font-Inter pl-[46px] pt-[13px] pr-[46px] pb-[13px] text-white rounded-[41px] border  bg-transparent hover:bg-gradient-to-l  hover:from-[#7AF57A] hover:to-[#51C8EF] duration-300 ease-linear hover:text-black  '>Reproducir ahora</button>
                <div className='absolute bottom-[-4px] left-[-4px]'>
                 <Btn2/>
                </div>
              </div>
            </div>
          </div>
          <div className='relative group overflow-hidden z-10'>
            <img className='w-full cursor-pointer' src={jackpotimg3} alt="img" />
            <div className='w-full h-full  bg-black/80 rouneded-[8px] flex justify-center items-center absolute left-[-100%] top-[0%] group-hover:left-0 duration-500 ease-linear'>
              <div className='relative'>
                <button className=' max-md:px-[30px] text-[16px] font-[700] font-Inter pl-[46px] pt-[13px] pr-[46px] pb-[13px] text-white rounded-[41px] border  bg-transparent hover:bg-gradient-to-l  hover:from-[#7AF57A] hover:to-[#51C8EF] duration-300 ease-linear hover:text-black  '>Reproducir ahora</button>
                <div className='absolute bottom-[-4px] left-[-4px]'>
                  <Btn2/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='absolute max-md:hidden top-[-38%] left-[0%]  '>
      <Elipse10/>
      </div>
      <div className='absolute max-md:hidden bottom-[-22%] right-[0%]  '>
     <Elipse11/>
      </div>
    </section>
  )
}

export default Jackpot