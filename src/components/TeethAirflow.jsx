import React from 'react'
import selfieMan from "../assets/images/webp/teethAirflow.webp";
import whiteTeethCircle from "../assets/images/webp/whiteTeethCircle.webp";
import blueDotted from "../assets/images/webp/airflowDotted.webp";

const TeethAirflow = () => {
    return (
        <div className='2xl:mt-[128px] xl:my-[100px] sm:my-[64px] my-[48px] 2xl:mb-[173px]'>
            <div className="container 2xl:max-w-[1544px] mx-auto px-6">
                <div className="flex justify-center lg:justify-between flex-wrap mb-[48px] sm:mb-[58px] md:mb-[68px] xl:mb-[128px] relative">
                    <div className="gradient_ellips w-[602px] h-[803px] blur-[200px] rotate-[38deg] rounded-[100%] absolute top-[-13%] left-[10%] pointer-events-none"></div>
                    <div className="xl:w-[45%] flex items-center order-1 xl:order-0 mt-[35px] sm:mt-[50px] md:mt-[100px] xl:mt-0">
                        <div className="relative z-20 mt-5">
                            <h2 className='text-black ff_anvir font-extrabold text-2xl sm:text-3xl xl:text-[40px] 2xl:max-w-[460px] !leading-3md mb-[15px] sm:mb-[20px] xl:mb-[44px]'>Why should you clean your teeth with Airflow?</h2>
                            <p className='font-medium ff_anvir text-grey text-xl sm:text-2xl 2xl:max-w-[648px] mb-[20px] md:mb-[30px] xl:mb-[50px] 2xl:mb-[61px] !leading-normal '>The dentist will first remove tartar using traditional methods and then finish with Airflow as a last thorough touch. The treatment removes discoloration and biofilm (i.e. the layer of bacteria which is also called plaque when the biofilm is in the mouth).</p>
                            <h3 className='text-lightSky ff_anvir font-extrabold text-2xl sm:text-3xl xl:text-[40px] 2xl:max-w-[581px] !leading-3md mb-[15px] sm:mb-[20px]'>The result is a healthy mouth with cleaner, whiter teeth.</h3>
                        </div>
                    </div>
                    <div className="xl:w-1/2 w-full relative flex justify-center xl:justify-end z-10 order-0 xl:order-1">
                        <div className="relative z-10  md:mt-[38px]">
                            <img src={whiteTeethCircle} alt="whiteTeethCircle" className=" absolute z-20 animate-spin top-[12%] w-[121px] h-[121px] sm:w-[183.95px] sm:h-[183.95px] left-[-4%] pointer-events-none"></img>
                            <img src={blueDotted} alt="blueDotted" className="xl:max-w-[448px] sm:max-w-[380px] max-w-[240px] h-[240px] w-full sm:h-[385px] absolute animate-pulse bottom-[-13%] left-[-3%] md:left-[-12%] lg:left-[-17%] pointer-events-none"></img>
                            <img src={selfieMan} alt="selfieMan" className='2xl:w-[665px] sm:w-[580px] 2xl:h-[751px] relative z-10' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TeethAirflow;