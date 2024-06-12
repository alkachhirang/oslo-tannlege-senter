import React from 'react';
import Professinallyimg from '../assets/images/webp/professionallyClean.webp';

const ProfessinallyClean = () => {
    return (
        <div className='relative 2xl:mb-[221px] xl:mb-[100px] sm:mb-[64px] mb-[48px]'>
            <div className='2xl:h-[315px] xl:h-[300px] lg:h-[230px] md:h-[285px] sm:h-[275px] bg-lightBlue w-full absolute sm:top-[67%] md:top-[66%] lg:top-[68%] xl:top-[23%] 2xl:top-[30%] z-0 sm:block hidden'></div>
            <div className='container 2xl:max-w-[1544px] mx-auto px-6'>
                <div className='flex gap-[35px] md:gap-[51px] flex-row flex-wrap justify-center items-center 2xl:items-end relative z-2'>
                    <div className='xl:w-[36%] w-full flex justify-center items-center'>
                        <img src={Professinallyimg} alt="ProfessinallyClean" className='w-full sm:max-w-[530px] 2xl:h-[664px] ' />
                    </div>
                    <div className='xl:w-[48%] w-full'>
                        <h2 className='text-black ff_anvir font-extrabold text-2xl sm:text-3xl xl:text-[40px] 2xl:max-w-[668px] !leading-3md mb-[15px] sm:mb-[50px] md:mb-[40px] 2xl:mb-[75px]'>How often should you professionally clean your teeth?</h2>
                        <p className='font-normal ff_anvir text-lightGrey text-xl sm:text-2xl 2xl:max-w-[620px] mb-[8px] sm:mb-[20px] md:mb-[30px] 2xl:mb-[40px] !leading-normal'>The treatment itself takes 45 minutes, but the result lasts from 6-12 months, depending on the factors that can discolor the tooth enamel again.</p>
                        <p className='font-normal ff_anvir text-lightGrey text-xl sm:text-2xl 2xl:max-w-[620px] mb-[20px] md:mb-[30px] 2xl:mb-[40px] !leading-normal'>If you want to have clean, white teeth all the time, we recommend that you repeat the treatment at regular intervals. <span className='font-extrabold'>Ask the dentist about your unique needs.</span></p>
                        <div className='sm:mt-[76px] mt-[30px] flex sm:items-center sm:gap-[70px] gap-[25px]'>
                            <div>
                                <p className='font-extrabold ff_anvir text-lightGrey text-xl sm:text-2xl !leading-normal mb-[6px]'>Treatment takes</p>
                                <p className='2xl:text-6lg lg:text-5xl sm:text-3xl text-2xl ff_anvir text-pink font-extrabold leading-md'>45 mins.</p>
                            </div>
                            <div>
                                <p className='font-extrabold ff_anvir text-lightGrey text-xl sm:text-2xl !leading-normal mb-[6px]'>Results lasts</p>
                                <p className='2xl:text-6lg lg:text-5xl sm:text-3xl text-2xl ff_anvir text-pink font-extrabold leading-md'>6-12 months</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default ProfessinallyClean;
