import React from 'react'
import poker from '../images/poker.png'
import aviator from '../images/aviator.png'
import { Arrow, Elipse7, Elipse8 } from '../common/Icons'
function Poker() {
    return (
        <section className='bg-[#00141B] relative  mt-[-2px]'>
            <div className='container mx-auto max-w-[1140px] px-[12px] '>
                <div className='flex flex-row flex-wrap mx-[-12px] pb-[100px] max-md:pt-10 max-md:pb-10 pt-[74px]'>
                    <div className='w-full  md:w-[50%] z-10 px-[12px] flex md:justify-start'>
                        <div>
                            <img className='w-full' src={poker} alt="poker" />
                            <h2 className=' pt-[60px] max-sm:pt-[30px]  font-[400] text-[48px] leading-[57px] font-Anton text-white max-sm:text-[42px] max-md:text-center'>Nuestra Visión</h2>
                            <p className='pt-[16px] max-w-[444px] text-[#CCD0D1] font-Inter font-[500] text-[16px] leading-[25px] max-md:text-center max-md:max-w-[800px] max-md:text-[18px] '>Nuestra visión es ser líderes indiscutibles en la industria de los juegos de azar y llevar nuestra pasión por el entretenimiento más allá de las fronteras. Imagina un mundo donde la emoción y la diversión no tengan límites, y ese es el mundo que queremos crear contigo.</p>
                            <div className='flex items-center pt-6 gap-1'>
                                <p className='text-[#7AF57A] font-[700] text-[16px] font-Inter'>Aprende más</p>
                                <Arrow />
                            </div>

                        </div>
                    </div>
                    <div className='w-full  flex-col md:w-[50%] z-10 px-[12px] flex md:justify-end'>

                        <div className='order-2 md:order-1'>
                            <h2 className=' max-md:pt-[30px]  font-[400] text-[48px] leading-[57px] font-Anton text-white max-sm:text-[42px] max-md:text-center'>Nuestra Misión</h2>
                            <p className='pt-[16px] max-w-[444px] text-[#CCD0D1] font-Inter font-[500] text-[16px] leading-[25px] max-md:max-w-[800px] max-md:text-[18px] max-md:text-center '>Nuestra visión es ser líderes indiscutibles en la industria de los juegos de azar y llevar nuestra pasión por el entretenimiento más allá de las fronteras. Imagina un mundo donde la emoción y la diversión no tengan límites, y ese es el mundo que queremos crear contigo.</p>
                            <div className='flex items-center pt-6 gap-1'>
                                <p className='text-[#7AF57A] font-[700] text-[16px] font-Inter'>Aprende más</p>
                                <Arrow />
                            </div>
                        </div>
                        <div className='pt-[60px] max-sm:pt-[40px]  order-1 md:order-2  '>
                            <img className='w-full  ' src={aviator} alt="aviator" />
                        </div>

                    </div>
                </div>
                <div className='absolute left-0 top-[-24%] max-sm:hidden'>
                  <Elipse7/>
                </div>
                <div className='absolute bottom-[34%]  left-[40%] max-sm:hidden'>
                  <Elipse8/>
                </div>
            </div>
        </section>
    )
}

export default Poker