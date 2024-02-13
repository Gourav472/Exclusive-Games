import React from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import { Elipse5 } from "../common/Icons";

function Icon({ id, open }) {
  return (
    <div className="relative ">
      <svg
        xmlns="http://www.w3.oyg/1700/svg"
        width="21"
        height="2"
        viewBox="0 0 21 2"
        fill="white"
        className={`${id === open ? "" : "rotate-90"
          } h-5 w-5   transition-transform`}
      >
        <path
          d="M1.69629 1H19.6963"
          stroke="#fff"
          stroke-width="2"
          stroke-linecap="round"
        />
      </svg>
      <svg
        className="absolute rotate-0 top-[9px]"
        xmlns="http://www.w3.org/2000/svg"
        width="21"
        height="2"
        viewBox="0 0 21 2"
        fill="white"
      >
        <path
          d="M1.69629 1H19.6963"
          stroke="#fff"
          stroke-width="2"
          stroke-linecap="round"
        />
      </svg>
    </div>
  );
}

const Accord = () => {
  const [open, setOpen] = React.useState(1);

  const handleOpen = (value) => setOpen(open === value ? 0 : value);
  return (
    <section className=" bg-[#00141B] mt-[-2px] relative">
      <div className="xl:max-w-[970px] mx-auto xl:px-3 container relative z-50 px-6">
        <h2
          className="text-[48px] max-md:text-[32px] max-md:leading-[45px] font-Anton leading-[57.6px] font-[400] text-center pb-[60px] pt-[150px] max-md:pt-10 uppercase text-white"
        >
          Preguntas más frecuentes
        </h2>
        <div className=" flex justify-between flex-col">
          <Accordion
            className=" border-[#80898D] border mb-[32px] rounded-[10px] py-4 px-5"

            open={open === 1}
            icon={<Icon id={1} open={open} />}
          >
            <AccordionHeader
              onClick={() => handleOpen(1)}
              className="font-Anton text-[16px] md:text-[20px] py-0 text-start font-[400]  text-white leading-[26px] "
            >
              ¿Cuáles son las ventajas de elegir Juegos Exclusivos para mis
              plataformas de juegos?
            </AccordionHeader>
            <AccordionBody className="font-Inter text-[16px] md:text-[16px] font-[500] leading-[25.6px] text-[#CCD0D1] max-w-[880px] pt-2 pb-0 ">
              En Exclusive Games, ofrecemos experiencias únicas y personalizadas,
              respaldadas por más de 15 años de dedicación al desarrollo de
              multiplataformas para juegos de azar.
            </AccordionBody>
          </Accordion>
          <Accordion
            className=" border-[#80898D] border mb-[32px] rounded-[10px] py-4 px-5  overflow-hidden"

            open={open === 2}
            icon={<Icon id={2} open={open} />}
          >
            <AccordionHeader
              onClick={() => handleOpen(2)}
              className="font-Anton text-[16px] md:text-[20px] py-0 text-start font-[400] text-white leading-[26px]"
            >
              {" "}
              ¿Cómo garantizan la seguridad de las operaciones en sus juegos?
            </AccordionHeader>
            <AccordionBody className="font-Inter text-[16px] md:text-[16px] font-[500] leading-[25.6px] text-[#CCD0D1] max-w-[880px] pt-2 pb-0 ">
              En Exclusive Games, ofrecemos experiencias únicas y personalizadas,
              respaldadas por más de 15 años de dedicación al desarrollo de
              multiplataformas para juegos de azar.
            </AccordionBody>
          </Accordion>
          <Accordion
            className=" border-[#80898D] border mb-[32px] rounded-[10px] py-4 px-5 "

            open={open === 3}
            icon={<Icon id={3} open={open} />}
          >
            <AccordionHeader
              onClick={() => handleOpen(3)}
              className="font-Anton text-[16px] md:text-[20px] py-0 text-start font-[400] text-white leading-[26px]"
            >
              {" "}
              ¿Cuáles son las opciones de juego disponibles en las versiones
              Silver, Luxury y Platinum?
            </AccordionHeader>
            <AccordionBody className="font-Inter text-[16px] md:text-[16px] font-[500] leading-[25.6px] text-[#CCD0D1] max-w-[880px] pt-2 pb-0 ">
              En Exclusive Games, ofrecemos experiencias únicas y personalizadas,
              respaldadas por más de 15 años de dedicación al desarrollo de
              multiplataformas para juegos de azar.
            </AccordionBody>
          </Accordion>
          <Accordion
            className=" border-[#80898D] border mb-[32px] rounded-[10px] py-4 px-5 "

            open={open === 4}
            icon={<Icon id={4} open={open} />}
          >
            <AccordionHeader
              onClick={() => handleOpen(4)}
              className="font-Anton text-[16px] md:text-[20px] py-0 text-start font-[400] text-white leading-[26px]"
            >
              ¿Cuánto tiempo lleva crear una plataforma con Juegos Exclusivos?
            </AccordionHeader>
            <AccordionBody className="font-Inter text-[16px] md:text-[16px] font-[500] leading-[25.6px] text-[#CCD0D1] max-w-[880px] pt-2 pb-0 ">
              En Exclusive Games, ofrecemos experiencias únicas y personalizadas,
              respaldadas por más de 15 años de dedicación al desarrollo de
              multiplataformas para juegos de azar.
            </AccordionBody>
          </Accordion>
          <Accordion
            className=" border-[#80898D] border mb-[32px] rounded-[10px] py-4 px-5 "

            open={open === 5}
            icon={<Icon id={5} open={open} />}
          >
            <AccordionHeader
              onClick={() => handleOpen(5)}
              className="font-Anton text-[16px] md:text-[20px] py-0 text-start font-[400] text-white leading-[26px]"
            >
              ¿Qué métodos de pago aceptan?
            </AccordionHeader>
            <AccordionBody className="font-Inter text-[16px] md:text-[16px] font-[500] leading-[25.6px] text-[#CCD0D1] max-w-[880px] pt-2 pb-0 ">
              En Exclusive Games, ofrecemos experiencias únicas y personalizadas,
              respaldadas por más de 15 años de dedicación al desarrollo de
              multiplataformas para juegos de azar.
            </AccordionBody>
          </Accordion>
          <Accordion
            className=" border-[#80898D] border rounded-[10px] py-4 px-5 "

            open={open === 6}
            icon={<Icon id={6} open={open} />}
          >
            <AccordionHeader
              onClick={() => handleOpen(6)}
              className="font-Anton text-[16px] md:text-[20px] py-0 text-start font-[400] text-white leading-[26px]"
            >
              ¿Puedo probar sus juegos antes de comprometerme?
            </AccordionHeader>
            <AccordionBody className="font-Inter text-[16px] md:text-[16px] font-[500] leading-[25.6px] text-[#CCD0D1] max-w-[880px] pt-2 pb-0 ">
              En Exclusive Games, ofrecemos experiencias únicas y personalizadas,
              respaldadas por más de 15 años de dedicación al desarrollo de
              multiplataformas para juegos de azar.
            </AccordionBody>
          </Accordion>
        </div>
      </div>
      <div className=' bottom-[10%] z-0 left-[0%] absolute max-md:hidden '>
        <Elipse5/>
      </div>
      
    </section>
  );
};

export default Accord;