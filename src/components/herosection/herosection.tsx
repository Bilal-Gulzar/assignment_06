import React from 'react'
import Image from 'next/image';

export default function Herosection() {
  return (
    <div>
      <div className="flex items-center mt-20 md:mt-0   gap-5 flex-col-reverse md:flex-row-reverse">
        <div className="md:w-[640px] relative  ">
          <Image
            src="/img1.jpg"
            width={948}
            height={390}
            alt="heroSectionImage"
            className="hidden md:block"
          />
          <Image
            src="/cutImg.jpg"
            width={948}
            height={390}
            alt="heroSectionImage"
            className="md:hidden mt-10"
          />
        </div>
        <div className="2xl:ps-0 ps-7 sm:ps-0  md:ps-7 pe-4 max-w-[500px]">
          <h3 className="font-[700] text-[40px] lg:leading-[67.2px] leading-[48px]text-[56px]   max-w-[380px]">
            Learn new skills online with ease
          </h3>
          <p className="font-[400] mt-7 text-[18px] leading-[27px]">
            Discover a wide range of courses covering a variety of subjects,
            taught by expert instructors.
          </p>
          <div className="flex gap-3 mt-10 ">
            <button className="px-4  text-neutral font-[400] py-2.5 bg-primary text-[16px] rounded-[5px] ">
              Start learning now
            </button>
            <button className="font-[400]  px-4 text-[16px] border border-primary py-2.5 rounded-[5px]">
              Explore Courses
            </button>
          </div>
        </div>
      </div>
      <div className="bg-secondary flex sm:items-center sm:px-1 ps-10 pe-4 py-20 md:flex-row flex-col ">
        <p className="font-[700] md:block sm:text-center md:text-start hidden text-[18px] sm:text-[24px] leading-[27px] sm:leading-[33.6px]">
          Trusted by 2000+ companies worldwide.
        </p>
        <p className="font-[700] text-[18px] leading-[27px] sm:text-center md:text-start sm:text-[24px] md:hidden sm:leading-[33.6px]">
          Trusted by the world's best companies
          <br /> [social proof to build credibility]
        </p>
        <div className="md:flex hidden w-[880px] mt-12 ">
          <Image src="/AirbnbLogo.png" width={880} height={880} alt="logos" />
          <Image src="/Airbnbloog.png" width={880} height={880} alt="logos" />
          <Image src="/AirbnbLo0go.png" width={880} height={880} alt="logos" />
          <Image src="/AirbnbLogo1.png" width={880} height={880} alt="logos" />
          <Image src="/AirbnbLogo2.png" width={880} height={880} alt="logos" />
          <Image src="/AirbnbLogo3.png" width={880} height={880} alt="logos" />
        </div>
        <div className="mt-12 md:hidden flex justify-center gap-3 sm:gap-5 max-w-[800px] px-0.5 sm:px-3">
          <div>
            <Image
              src="/AirbnbLogo.png"
              alt="Airbnb Logo"
              width={500}
              height={500}
            />
          </div>
          <div>
            <Image
              src="/Airbnbloog.png"
              alt="Airbnb log"
              width={500}
              height={500}
            />
          </div>
          <div>
            <Image
              src="/AirbnbLo0go.png"
              alt="Airbnb log"
              width={500}
              height={500}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
