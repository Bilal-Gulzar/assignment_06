import React from 'react'
import FacebookSvg from '../svgs/facebookSvg';
import InstagramSvg from '../svgs/instagramSvg';
import TwitterSvg from '../svgs/twitterSvg';
import LinkedSvg from '../svgs/linkedSvg';
import Image from 'next/image';
import MenuSvg from '../svgs/menuSvg';

function Header() {
  return (
    <header className="mx-auto gap-5 bg-neutral flex flex-col">
      <div className="bg-secondary  py-5 border-b-[1.5px] border-primary hidden lg:flex px-20  justify-between items-center">
        <div className="font-[400] gap-3 text-sm flex items-center">
          <div className="border-r border-primary pe-7 ">
            Phone Number: 956 742 455 678
          </div>
          <div className="bg-primary"></div>
          <div>Email:info@ddsgnr.com</div>
        </div>
        <div className="flex items-center gap-[12px]">
          <FacebookSvg />
          <InstagramSvg />
          <TwitterSvg />
          <LinkedSvg />
        </div>
      </div>
      <div className="bg-secondary hidden gap-4 lg:block">
        <div className="px-20 justify-between py-8 flex items-center ">
          <div>
            <Image src="/logo.png" alt="logo" width={130} height={130} />
          </div>
          <div className="font-[400] bg-neutral ps-3 flex items-center gap-[45px]  text-[16px]">
            <div className="border-b-[1.5px] h-[40px] flex items-center border-primary">
              Home
            </div>
            <div className="">Courses</div>
            <div className="">Services</div>
            <div className="">About Us</div>
            <div className="">Testimonial</div>
            <div className="flex items-center gap-5">
              <button className="w-[80px] h-[40px] outline-none border border-primary rounded-[5px] ">
                Login
              </button>
              <button className="w-[80px] text-neutral h-[40px] bg-primary rounded-[5px]">
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className='px-5 py-7 lg:hidden flex justify-between items-center border-b border-primary'>
        <div className='min-w-[130px]'>
          <Image src="/logo.png" alt="logo" width={130} height={130} />
        </div>
        <div>
          <MenuSvg/>
        </div>
      </div>
    </header>
  );
}

export default Header