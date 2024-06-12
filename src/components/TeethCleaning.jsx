import React from 'react';
import teethCleaning from '../assets/images/webp/teethCleaning.webp';
import pinkDotted from '../assets/images/webp/pinkDotted.webp';

const CleanTeeth = () => {
  return (
    <div className='2xl:mt-[209px] xl:mt-[150px] sm:mt-[64px] mt-[48px]'>
      <div className='container 2xl:max-w-[1544px] mx-auto px-6'>
        <div className='flex flex-row flex-wrap xl:justify-between relative'>
          <div className="gradient_ellips w-[1034px] h-[810px] blur-[270px] rotate-[116deg] rounded-[100%] absolute top-[-49%] right-[-29%] z-0 pointer-events-none"></div>
          <div className='xl:w-[44%] w-full lg:mt-[38px] max-xl:flex justify-center items-center relative'>
            <div className='2xl:w-[233px] 2xl:h-[225px] sm:w-[200px] sm:h-[200px] w-[100px] h-[100px] gradient_circle animate-pulse rounded-[100%] absolute left-[-3%] sm:left-0 lg:left-[15%] bottom-[-10%] sm:bottom-[-6%] md:bottom-[-4%] xl:left-[-3%] 2xl:left-[-10%] xl:bottom-[27%] 2xl:bottom-[13%] pointer-events-none'></div>
            <img src={pinkDotted} alt="pinkDotted" className='xl:max-w-[448px] sm:max-w-[380px] max-w-[240px] h-[240px] w-full sm:h-[385px] absolute right-[3%] xl:right-[-3%] 2xl:right-0 bottom-[-20%] lg:bottom-[-24%] xl:bottom-[5%] 2xl:bottom-[-15%] z-[0] pointer-events-none' />
            <img src={teethCleaning} alt="teethCleaning" className='2xl:max-w-[563px] 2xl:h-[510px] sm:max-w-[550px] relative z-[1]' />
          </div>
          <div className='xl:w-1/2 w-full mt-[65px] sm:mt-[90px] md:mt-[130px] xl:mt-0 relative z-2'>  
            <h2 className='text-black ff_anvir font-extrabold text-2xl sm:text-3xl xl:text-[40px] 2xl:max-w-[800px] !leading-3md mb-[15px] sm:mb-[20px] 2xl:mb-[44px]'>Teeth cleaning with Airflow is a reasonable and fast treatment that prevents cavities and gum disease. Your teeth will be cleaner and also look whiter.</h2>
            <p className='font-medium ff_anvir text-grey text-xl sm:text-2xl 2xl:max-w-[708px] mb-[20px] md:mb-[30px] 2xl:mb-[40px] !leading-normal'>Having a professional teeth cleaning done at least once a year, will prevent many dental health problems. The teeth cleanse will:</p>
            <div className='flex sm:gap-[19px] gap-[12px] 2xl:mb-[30px] sm:mb-[20px] mb-[12px] items-baseline'>
              <span>
                <div className='bg-sky w-[14px] h-[14px] sm:w-[18px] sm:h-[18px] rounded-[100%]'>
                </div>
              </span>
              <p className='text-grey ff_anvir font-normal text-xl sm:text-2xl !leading-normal'>Removing tartar and preventing cavities (caries)
              </p>
            </div>
            <div className='flex sm:gap-[19px] gap-[12px] 2xl:mb-[30px] sm:mb-[20px] mb-[12px] items-baseline'>
              <span>
                <div className='bg-sky w-[14px] h-[14px] sm:w-[18px] sm:h-[18px] rounded-[100%]'>
                </div>
              </span>
              <p className='text-grey ff_anvir font-normal text-xl sm:text-2xl !leading-normal'>
                Remove superficial discoloration from wine, tobacco, coffee, tea and strongly colored foods
              </p>
            </div>
            <div className='flex sm:gap-[19px] gap-[12px] 2xl:mb-[30px] sm:mb-[20px] mb-[12px] items-baseline'>
              <span>
                <div className='bg-sky w-[14px] h-[14px] sm:w-[18px] sm:h-[18px] rounded-[100%]'>
                </div>
              </span>
              <p className='text-grey ff_anvir font-normal text-xl sm:text-2xl !leading-normal'> Clean the gums, especially around dental crowns and implants
              </p>
            </div>
            <div className='flex sm:gap-[19px] gap-[12px] 2xl:mb-[30px] sm:mb-[20px] mb-[12px] items-baseline'>
              <span>
                <div className='bg-sky w-[14px] h-[14px] sm:w-[18px] sm:h-[18px] rounded-[100%]'>
                </div>
              </span>
              <p className='text-grey ff_anvir font-normal text-xl sm:text-2xl !leading-normal'>Give whiter teeth that make daily oral hygiene more motivating
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CleanTeeth;
