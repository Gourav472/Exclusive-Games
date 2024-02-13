import React from 'react'
import Left from '../images/left.png'
import Right from '../images/right.png'
import { Btn1 } from '../common/Icons'
function Lanza() {
    return (
        <section className='bg-[#00141B] mt-[-2px] pt-[109px] pb-[150px] max-md:pt-10 max-md:pb-10'>
            <div className='container px-[12px] max-w-[1140px] mx-auto '>
                <div className='max-w-[1140px] rounded-[16px] mx-auto border-[0.5px] h-[341px] flex-col flex items-center justify-center relative'>
                    <img src={Left} alt="Left" className=' absolute left-0 '/>
                    <img src={Right} alt="Left" className=' absolute right-0 ' />
                    <p className='text-[#FFFFFF] z-10 max-w-[593px] text-[32px] fomt-[400] font-Anton leading-[41.6px] text-center max-md:text-[32px] max-md:leading-[45px]'>Lanza tu propia plataforma en sólo 2 semanas</p>
                    <div className=' relative pt-10 z-40'>
                        <button class=" bg-gradient-to-l hover:text-white from-[#51C8EF] to-[#7AF57A] text-black  overflow-hidden relative px-[46px] py-[13px] rounded-[41px] text-[16px] font-Inter font-[700] hover:from-[#7AF57A] hover:to-[#51C8EF] outline-none duration-500 ease-linear group">
                            <span class="bg-white shadow-white absolute -top-[150%] left-0 inline-flex w-80 h-[5px] rounded-[41px] opacity-50 group-hover:top-[150%] duration-700 ease-linear shadow-[0_0_10px_10px_#FFF]"></span>
                            Leer más
                        </button>
                        <div className='absolute bottom-[-4px] left-[-4px] -z-10'>
                 <Btn1/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Lanza