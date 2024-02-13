import React from 'react'
import slotimg1 from '../images/slotimg1.png'
import slotimg2 from '../images/slotimg2.png'
import slotimg3 from '../images/webp/slotimg3.webp'
import slotimg4 from '../images/slotimg4.png'
import slotimg5 from '../images/slotimg5.png'
import slotimg6 from '../images/slotimg6.png'
import { Btn1, Btn2, Elipse9, Line1, Line2, Svg1, Svg2, Svg3 } from '../common/Icons'

function Slots() {
    return (
        <section className='lg:bg-[#00141B] bg-white bg-img-2 relative mt-[-2px] bg-cover bg-size '>
            <div className='container mx-auto max-w-[1140px] px-[12px]'>
                <div className=' lg:pt-[243px] pt-10 sm:pt-14  flex justify-center'>
                    <h1 className='text-[48px] font-Anton font-[400] text-[#00141B] leading-[57px] max-w-[552px] max-md:text-center max-md:text-[32px] max-md:leading-[45px] '>Nuestros Atributos de Marca</h1>
                </div>
                <div className='flex flex-row flex-wrap mx-[-12px] pt-[60px] max-md:pt-[50px] pb-[120px] max-md:pb-[50px] relative'>
                    <div className=' w-full sm:w-[50%] md:w-[33.33%] px-[12px] md:flex md:justify-start z-50'>
                        <div className='flex flex-col items-center'>
                            <div className='w-[100px] h-[100px] rounded-full bg-[#F5FFF5] flex justify-center items-center hover:bg-[#00141B] duration-300 ease-linear'>
                                <Svg1/>
                            </div>
                            <h2 className='text-[#00141B] pt-4 font-[400] font-Anton text-[20px] leading-[26px] max-md:text-[24px]'>Inteligencia</h2>
                            <p className='text-center pt-[10px] text-[#334349] max-w-[263px] font-[500] font-Inter text-[16px] leading-[25px] max-md:text-[18px]'>Comprendemos a la perfección los gustos de las personas y el mundo del gaming.</p>
                        </div>
                    </div>
                    <div className=' w-full sm:w-[50%] max-sm:mt-7 md:w-[33.33%] z-50 px-[12px] '>
                        <div className='flex flex-col items-center'>
                            <div className='w-[100px] h-[100px] rounded-full bg-[#F5FFF5] flex justify-center items-center hover:bg-[#00141B] duration-300 ease-linear'>
                              <Svg2/>

                            </div>
                            <h2 className='text-[#00141B] pt-4 font-[400] font-Anton text-[20px] leading-[26px] max-md:text-[24px]'>Proactividad</h2>
                            <p className='text-center pt-[10px] text-[#334349] max-w-[235px] font-[500] font-Inter text-[16px] leading-[25px] max-md:text-[18px]'>Somos creadores de cambios que exploran nuevas formas de entretenimiento.</p>
                        </div>
                    </div>
                    <div className=' w-full max-md:mt-7 md:w-[33.33%] px-[12px] md:flex md:justify-end z-50'>
                        <div className='flex flex-col items-center '>
                            <div className='w-[100px] h-[100px] rounded-full  bg-[#F5FFF5] flex justify-center items-center hover:bg-[#00141B]  duration-300 ease-linear'>
                              <Svg3/>

                            </div>
                            <h2 className='text-[#00141B] pt-4 font-[400] font-Anton text-[20px] leading-[26px] max-md:text-[24px]'>Innovación</h2>
                            <p className='text-center pt-[10px] text-[#334349] max-w-[245px] font-[500] font-Inter text-[16px] leading-[25px] max-md:text-[18px]'>Pensamos fuera de la caja para estar siempre un paso adelante.</p>
                        </div>
                    </div>
                    <div className='absolute left-[20%] top-[18%] max-lg:hidden'>
                       <Line1/>
                    </div>
                    <div className='absolute right-[20%] top-[32%] max-lg:hidden'>
                      <Line2/>
                    </div>

                </div>
                <div className='flex flex-col items-center'>
                    <h2 className='font-[400] font-Anton text-[48px] max-md:text-[42px] max-md:leading-[45px] leading-[57px] text-[#00141B]'>Slots</h2>
                    <p className='max-w-[904px] font-[500] font-Inter text-[16px] leading-[25px] text-[#334349] text-center pt-4'>En Exclusive Games, ofrecemos una selección de más de 600 juegos de los principales desarrolladores, como Aristocrat, Amatic, EGT, Novomatic, IGT, Playtech, Igrosoft y Tom Horn. Nuestro equipo trabaja incansablemente para innovar y ampliar nuestra oferta de experiencias, garantizando la máxima seguridad con operaciones protegidas por cifrado SSL de 256 bits.</p>
                </div>
                <div className='flex flex-row flex-wrap mx-[-12px] pt-[60px] max-md:pt-10 pb-[40px]'>
                    <div className=' w-full flex max-md:justify-center md:w-[33.33%] px-[12px] '>
                        <div className='flex flex-col gap-6'>
                            <div className='relative group overflow-hidden '>
                                <img className='cursor-pointer w-full' src={slotimg1} alt="img" />
                                <div className='w-full  rounded-[8px] h-full bg-black/80 flex justify-center items-center absolute left-[-100%]  group-hover:left-[0%] top-[0%] duration-500 ease-linear cursor-pointer'>
                                    <div className='relative z-40' >
                                        <button className='text-[16px] font-[700] font-Inter pl-[46px] max-sm:px-[35px] pt-[13px] pr-[46px] pb-[13px] text-white rounded-[41px] border  bg-transparent hover:bg-gradient-to-l  hover:from-[#7AF57A] hover:to-[#51C8EF] duration-300 ease-linear hover:text-black  '>Jugar</button>
                                        <div className='absolute  bottom-[-4px] left-[-4px]  -z-10'> 
                                          <Btn2/> 
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='relative z-50 group overflow-hidden mt '>
                                <img className='cursor-pointer overflow-hidden w-full' src={slotimg2} alt="img" />
                                <div className='w-full  rounded-[8px] h-full bg-black/80 flex justify-center items-center absolute left-[-100%]  group-hover:left-[0%] top-0 duration-500 ease-out cursor-pointer'>
                                    <div className='relative z-40'>
                                        <button className='  text-[16px] font-[700] max-sm:px-[35px] font-Inter pl-[46px] pt-[13px] pr-[46px] pb-[13px] text-white rounded-[41px] border  bg-transparent hover:bg-gradient-to-l  hover:from-[#7AF57A] hover:to-[#51C8EF] duration-300 ease-linear hover:text-black  '>Jugar</button>
                                        <div className='absolute bottom-[-4px] left-[-4px] -z-10'>
                                          <Btn2/>


                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className=' w-full flex max-md:justify-center mt-6 md:mt-0 md:w-[33.33%] px-[12px] '>
                        <div className='flex flex-col gap-6'>
                            <div className='relative group overflow-hidden '>
                                <img className='cursor-pointer w-full' src={slotimg3} alt="img" />
                                <div className='w-full  rounded-[8px] h-full bg-black/80 flex justify-center items-center absolute left-[-100%]  group-hover:left-[0%] top-0 duration-500 ease-out cursor-pointer'>
                                    <div className='relative z-40'>
                                        <button className='  text-[16px] max-sm:px-[35px] font-[700] font-Inter pl-[46px] pt-[13px] pr-[46px] pb-[13px] text-white rounded-[41px] border  bg-transparent hover:bg-gradient-to-l  hover:from-[#7AF57A] hover:to-[#51C8EF] duration-300 ease-linear hover:text-black  '>Jugar</button>
                                        <div className='absolute bottom-[-4px] left-[-4px] -z-10'>
                                       <Btn2/>

                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='relative group overflow-hidden '>
                                <img className='cursor-pointer w-full' src={slotimg4} alt="img" />
                                <div className='w-full z-50  rounded-[8px] h-full bg-black/80 flex justify-center items-center absolute left-[-100%]  group-hover:left-[0%] top-0 duration-500 ease-out cursor-pointer'>
                                    <div className='relative z-40'>
                                        <button className=' text-[16px] max-sm:px-[35px] font-[700] font-Inter pl-[46px] pt-[13px] pr-[46px] pb-[13px] text-white rounded-[41px] border  bg-transparent hover:bg-gradient-to-l  hover:from-[#7AF57A] hover:to-[#51C8EF] duration-300 ease-linear hover:text-black  '>Jugar</button>
                                        <div className='absolute bottom-[-4px] left-[-4px] -z-10'>
                                          <Btn2/>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='w-full flex max-md:justify-center mt-6 md:mt-0 md:w-[33.33%] px-[12px]'>
                        <div className='flex flex-col gap-6'>
                            <div className='relative group overflow-hidden '>
                                <img className='cursor-pointer w-full' src={slotimg5} alt="img" />
                                <div className='w-full rounded-[8px] h-full bg-black/80 flex justify-center items-center absolute left-[-100%]  group-hover:left-[0%] top-0 duration-500 ease-out cursor-pointer'>
                                    <div className='relative z-40'>
                                        <button className='  text-[16px] font-[700] font-Inter pl-[46px] pt-[13px] pr-[46px] pb-[13px] text-white rounded-[41px] border  bg-transparent hover:bg-gradient-to-l  hover:from-[#7AF57A] hover:to-[#51C8EF] duration-300 ease-linear hover:text-black  '>Jugar</button>
                                        <div className='absolute bottom-[-4px] left-[-4px] -z-10'>
                                         <Btn2/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='relative group overflow-hidden '>
                                <img className='cursor-pointer w-full' src={slotimg6} alt="img" />
                                <div className='w-full  rounded-[8px] h-full bg-black/80 flex justify-center items-center absolute left-[-100%]  group-hover:left-[0%] top-0 duration-500 ease-out cursor-pointer'>
                                    <div className='relative z-40'>
                                        <button className='  text-[16px] max-sm:px-[35px] font-[700] font-Inter pl-[46px] pt-[13px] pr-[46px] pb-[13px] text-white rounded-[41px] border  bg-transparent hover:bg-gradient-to-l  hover:from-[#7AF57A] hover:to-[#51C8EF] duration-300 ease-linear hover:text-black  '>Jugar</button>
                                        <div className='absolute bottom-[-4px] left-[-4px] -z-10'>
                                          <Btn2/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='flex justify-center pb-10 sm:pb-14 lg:pb-[243px] '>
                    <div className='relative z-40'>
                        <button class=" bg-gradient-to-l from-[#51C8EF] to-[#7AF57A] text-black  overflow-hidden relative px-[46px] py-[13px] rounded-[41px] text-[16px] font-Inter font-[700] hover:from-[#7AF57A] hover:to-[#51C8EF] outline-none duration-500 ease-linear group">
                            <span class="bg-black shadow-black absolute -top-[150%] left-0 inline-flex w-80 h-[5px] rounded-[41px] opacity-50 group-hover:top-[150%] duration-700 ease-linear shadow-[0_0_10px_10px_#FFF]"></span>
                            Mostrar más
                        </button>
                        <div className='absolute bottom-[-4px] left-[-4px] -z-10'>
                         <Btn1/>
                        </div>
                    </div>
                </div>
            </div>
            <div className='absolute max-md:hidden   right-[0%] top-[-25%]  '>
                <Elipse9/>
            </div>
        </section>
    )
}

export default Slots