import React, { useState } from 'react'
import head from '../images/img-head.png'
import { Btn1, Btn2 } from '../common/Icons'
import Navlogo from '../images/img-footer.png'


function Header() {
  const [ data, setdata] = useState (false);
  function show() {setdata (!data)
  if (data === false){
    document.body.classList.add("navhide")
  }
  else{
    document.body.classList.remove("navhide")
  }
}
  return (
    <section className='bg-img bg-[#00141B]'>
      <div className='bg-[#FFFFFF1A] bg-opacity-[10%] '>
        <div class="flex py-[24px]  items-center justify-between max-w-[1140px] mx-auto">
          <div class="flex md:pr-[48px] gap-[16px] items-center">
            <img className='cursor-pointer' src={Navlogo} alt="logo" />
          </div>
          <div
            className={`${data? "right-0":"right-[-100%]"} flex items-center justify-between z-[50]   max-lg:fixed  max-lg:bg-[#00141B]  max-lg:w-full max-lg:h-full max-lg:top-0 max-lg:flex-col max-lg:justify-center gap-[30px] lg:gap-[90px] xl:gap-[161px]  duration-500`}>
            
              <ul className="flex items-center max-lg:flex-col max-lg:gap-[20px] gap-[28px]">
                <li
                  className="text-[#D2D6DA] hover:text-white font-Inter font-[500] text-[16px] duration-300 ease-linear ">
                  <a href="">Hogar</a>
                </li>
                <li
                  className="text-[#D2D6DA] hover:text-white font-Inter font-[500] text-[16px] duration-300 ease-linear ">
                  <a href="">Misión</a>
                </li>
                <li
                  className="text-[#D2D6DA] hover:text-white font-Inter font-[500] text-[16px] duration-300 ease-linear ">
                  <a href="">Tragamonedas</a>
                </li>
                <li
                  className="text-[#D2D6DA] hover:text-white font-Inter font-[500] text-[16px] duration-300 ease-linear ">
                  <a href="">Por qué elegirnos</a>
                </li>
                <li
                  className="text-[#D2D6DA] hover:text-white font-Inter font-[500] text-[16px] duration-300 ease-linear ">
                  <a href="">Ofertas</a>
                </li>

              </ul>
              <div className='relative '>
                <button class=" bg-transparent border text-white hover:text-black hover:bg-gradient-to-l  overflow-hidden relative px-[46px] py-[13px] rounded-[41px] text-[16px] font-Inter font-[700] hover:from-[#7AF57A] hover:to-[#51C8EF] outline-none duration-500 ease-linear group">
                  <span class="bg-white shadow-white absolute -top-[150%] left-0 inline-flex w-80 h-[5px] rounded-[41px] opacity-50 group-hover:top-[150%] duration-700 ease-linear shadow-[0_0_10px_10px_#FFF]"></span>
                  Acceso
                </button>
                <div className='absolute bottom-[-5px] left-[-4px]'>
                  <Btn2 />
                </div>
              </div>
            
          </div>
          <div  onClick={show} className=" lg:hidden  black z-50 mt-[4px] max-lg:pr-3 " >
            <span className="bar h-[3px] block bg-white w-[25px] duration-500"></span>
            <span className="bar  h-[3px] block  bg-white w-[25px] my-[6px]"></span>
            <span className=" bar h-[3px] block  bg-white w-[25px] my-[6px] duration-500"></span>
          </div>
        </div>
      </div>
      <div className='container mx-auto max-w-[1140px] px-[12px]'>
        <div className='flex flex-col items-center pt-[140px] max-md:pt-[50px] max-md:pb-[50px] pb-[222px]'>
          <h1 className='max-w-[505px] font-[400] text-[72px] text-white font-Anton leading-[86px] text-center max-sm:text-[42px] max-md:text-[52px] max-md:leading-[60px] '>Exclusive Games. Pasión por ganar</h1>
          <p className='max-w-[727px] font-[500] text-[16px] leading-[25px] text-center font-Inter text-[#CCCFD1] pt-[16px] max-md:text-[18px]'>En Exclusive Games somos un equipo apasionado de personas dedicados al desarrollo de multiplataformas para juegos de azar. A lo largo de nuestra vida consumimos todo tipo de juegos hasta que un día decidimos crear los propios.</p>
          <div className='pt-10 relative'>
            <button class=" bg-gradient-to-l hover:text-white from-[#51C8EF] to-[#7AF57A] text-black  overflow-hidden relative px-[46px] py-[13px] rounded-[41px] text-[16px] font-Inter font-[700] hover:from-[#7AF57A] hover:to-[#51C8EF] outline-none duration-500 ease-linear group">
              <span class="bg-white shadow-white absolute -top-[150%] left-0 inline-flex w-80 h-[5px] rounded-[41px] opacity-50 group-hover:top-[150%] duration-700 ease-linear shadow-[0_0_10px_10px_#FFF]"></span>
              Empezar
            </button>
            <div className='absolute bottom-[-4px] left-[-4px]'>
              <Btn1 />

            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Header