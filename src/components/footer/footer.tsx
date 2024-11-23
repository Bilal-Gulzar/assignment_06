import React from 'react'
import Image from 'next/image'
import FacebookSvg from '../svgs/facebookSvg';
import InstagramSvg from '../svgs/instagramSvg';
import TwitterSvg from '../svgs/twitterSvg';
import LinkedSvg from '../svgs/linkedSvg';

function Footer() {
  return (
    <footer className="px-10 lg:px-20 pb-16 lg:pb-52 mt-16 md:mt-36">
      <div className="grid  pb-72 md:pb-28 md:grid-cols-4  items-center md:items-start justify-items-center md:justify-items-start justify-center  gap-10">
        <div className="">
          <Image src="/logo.png" alt="logo" width={130} height={130} />
        </div>
        <div className="flex flex-col gap-7  items-center md:items-start size-[16px] mb-56 md:pb-0">
          <h3 className="font-[600]">Courses</h3>
          <div className="text-[14px] flex  items-center md:items-start flex-col gap-5">
            <p>Business</p>
            <p>Development</p>
            <p>Technology</p>
            <p>Design</p>
            <p>Programming</p>
          </div>
        </div>
        <div className=" size-[16px] flex flex-col  items-center md:items-start gap-7 mb-56 md:pb-0 ">
          <h3 className="font-[600]">Resources</h3>
          <div className="text-[14px] flex flex-col gap-5  items-center md:items-start">
            <p>Career</p>
            <p>Resume</p>
            <p>Learning</p>
            <p>Interview&nbsp;Preparation</p>
            <p>Jobs</p>
          </div>
        </div>
        <div className="flex flex-col gap-7 size-[16px] items-center md:items-start">
          <h3 className="font-[600]">About&nbsp;Us</h3>
          <div className="text-[14px] flex flex-col gap-5 items-center md:items-start">
            <p>Contact</p>
            <p>Help/Support</p>
            <p>FAQ</p>
            <p>Terms&nbsp;and&nbsp;Conditions</p>
            <p>Partners</p>
          </div>
        </div>
      </div>
      <div className="flex lg:flex-row flex-col justify-between gap-9 items-center border-t-[1.5px]  md:py-9 pt-9   border-primary">
        <div className="text-[14px]   flex-col sm:flex-row items-center leading-[21px] flex gap-7">
          <div>2023 Ddsgnr. All right reserved.</div>
          <div className="flex gap-7 xs:flex-col items-center flex-row ">
            <div className="underline">Privacy&nbsp;Policy</div>
            <div className="underline">Terms&nbsp;of&nbsp;Service</div>
            <div className="underline">Cookies&nbsp;Settings</div>
          </div>
        </div>
        <div className="flex gap-4 items-center">
          <FacebookSvg />
          <InstagramSvg />
          <TwitterSvg />
          <LinkedSvg />
        </div>
      </div>
    </footer>
  );
}


export default Footer