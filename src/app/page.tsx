import Button from "@/components/button/button";
import Courses from "@/components/courses/courses";
import Fivestars from "@/components/svgs/5stars";
import ArrowSvg from "@/components/svgs/arrowSvg";
import BookSvg from "@/components/svgs/bookSvg";
import BriefSvg from "@/components/svgs/briefSvg";
import DotsSvg from "@/components/svgs/dotsSvg";
import DribbleSvg from "@/components/svgs/dribbleSvg";
import FacebookSvg from "@/components/svgs/facebookSvg";
import GroupSvg from "@/components/svgs/groupSvg";
import LinkedSvg from "@/components/svgs/linkedSvg";
import MicrophoneSvg from "@/components/svgs/microphoneSvg";
import PenToolSvg from "@/components/svgs/penToolSvg";
import RingSvg from "@/components/svgs/ringSvg";
import SlideButtonSvg from "@/components/svgs/slideButtonSvg";
import StarSvg from "@/components/svgs/starSvg";
import VolumeSvg from "@/components/svgs/volumeSvg";
import Image from "next/image";

export default function Home() {
  return (
    <div className="my-12">
      <section>
        <div className="flex flex-col gap-8 px-7">
          <h2 className="font-[700] text-[32px] leading-[41px] sm:text-[48px] text-center sm:leading-[57.6px]">
            Explore Courses By Category
          </h2>
          <p className="text-[18px] leading-[27px] text-center">
            Discover a wide range of courses covering a variety of subjects,
            taught by expert instructors.
          </p>
        </div>

        <div className="grid  px-8  sm:px-0 justify-center  sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-12">
          <div className="bg-secondary   flex gap-8 items-center p-4 rounded-[5px]">
            <div className="w-[100px] bg-neutral flex items-center justify-center rounded-[5px] h-[100px]">
              <PenToolSvg />
            </div>
            <div>
              <p className="leading-[30px] text-[20px] font-[600]">
                Design & Development
              </p>
              <p className="leading-[27px] text-[18] ">50+ Courses Available</p>
            </div>
          </div>
          <div className="bg-secondary flex gap-8 items-center p-4 rounded-[5px]">
            <div className="w-[100px] bg-neutral flex items-center justify-center rounded-[5px] h-[100px]">
              <VolumeSvg />
            </div>
            <div>
              <p className="leading-[30px] text-[20px] font-[600]">Marketing</p>
              <p className="leading-[27px] text-[18] ">50+ Courses Available</p>
            </div>
          </div>
          <div className="bg-secondary flex gap-8 items-center p-4 rounded-[5px]">
            <div className="w-[100px] bg-neutral flex items-center justify-center rounded-[5px] h-[100px]">
              <GroupSvg />
            </div>
            <div>
              <p className="leading-[30px] text-[20px] font-[600]">
                Development
              </p>
              <p className="leading-[27px] text-[18] ">50+ Courses Available</p>
            </div>
          </div>
          <div className="bg-secondary sm:flex hidden  gap-8 items-center p-4 rounded-[5px]">
            <div className="w-[100px] bg-neutral flex items-center justify-center rounded-[5px] h-[100px]">
              <MicrophoneSvg />
            </div>
            <div>
              <p className="leading-[30px] text-[20px] font-[600]">
                Communication
              </p>
              <p className="leading-[27px] text-[18] ">50+ Courses Available</p>
            </div>
          </div>
          <div className="bg-secondary sm:flex hidden gap-8 items-center p-4 rounded-[5px]">
            <div className="w-[100px] bg-neutral flex items-center justify-center rounded-[5px] h-[100px]">
              <RingSvg />
            </div>
            <div>
              <p className="leading-[30px] text-[20px] font-[600]">
                Digital Marketing
              </p>
              <p className="leading-[27px] text-[18] ">50+ Courses Available</p>
            </div>
          </div>
          <div className="bg-secondary sm:flex hidden gap-8 items-center p-4 rounded-[5px]">
            <div className="w-[100px] bg-neutral flex items-center justify-center rounded-[5px] h-[100px]">
              <ArrowSvg />
            </div>
            <div>
              <p className="leading-[30px] text-[20px] font-[600]">
                self Development
              </p>
              <p className="leading-[27px] text-[18] ">50+ Courses Available</p>
            </div>
          </div>
          <div className="bg-secondary sm:flex hidden gap-8 items-center p-4 rounded-[5px]">
            <div className="w-[100px] bg-neutral flex items-center justify-center rounded-[5px] h-[100px]">
              <BriefSvg />
            </div>
            <div>
              <p className="leading-[30px] text-[20px] font-[600]">Business</p>
              <p className="leading-[27px] text-[18] ">50+ Courses Available</p>
            </div>
          </div>
          <div className="bg-secondary sm:flex hidden gap-8 items-center p-4 rounded-[5px]">
            <div className="w-[100px] bg-neutral flex items-center justify-center rounded-[5px] h-[100px]">
              <BookSvg />
            </div>
            <div>
              <p className="leading-[30px] text-[20px] font-[600]">Finance</p>
              <p className="leading-[27px] text-[18] ">50+ Courses Available</p>
            </div>
          </div>
          <div className="bg-secondary lg:flex hidden gap-8 items-center p-4 rounded-[5px]">
            <div className="w-[100px] bg-neutral flex items-center justify-center rounded-[5px] h-[100px]">
              <MicrophoneSvg />
            </div>
            <div>
              <p className="leading-[30px] text-[20px] font-[600]">
                Consulting
              </p>
              <p className="leading-[27px] text-[18] ">50+ Courses Available</p>
            </div>
          </div>
        </div>
        <Button />
      </section>
      <Courses />
      <div className="hidden mt-72 md:block">
        <Courses />
      </div>
      <section className="lg:mt-40 mt-32 ">
        <div className="flex flex-col gap-8 px-7">
          <h1 className="font-[700] text-[32px] leading-[41px] sm:text-[48px] text-center sm:leading-[57.6px]">
            Courses
          </h1>
          <p className="text-[18px] leading-[27px] text-center">
            Your Ultimate Guide to learning
          </p>
        </div>
        <div className="text-[16px] max-w-[336px] flex justify-between mx-auto mt-14  ">
          <div className="border-b border-primary px-3 pb-1">Popular</div>
          <div className="px-2">Recommended</div>
          <div className="px-2">Best Price</div>
        </div>
        <div>
          <div className="grid  items-center sm:grid-cols-2 px-5 lg:px-0 lg:grid-cols-3 mt-20 justify-center gap-9">
            <div className="bg-secondary max-w-[380px] sm:max-w-full  flex flex-col gap-5 pb-7 rounded-[5px]">
              <div>
                <Image src="/img4.jpg" alt="courses" width={600} height={600} />
              </div>
              <div className="text-[14px] flex items-center px-5 lg:ps-0  justify-between font-[600]">
                <p>Design</p>
                <div className="flex gap-2 items-center">
                  <StarSvg />
                  <span>5.0</span>
                </div>
              </div>
              <div className="flex flex-col gap-2 px-5 lg:px-0 ps-5">
                <h5 className="font-[700] text-[24px]">UX/UI Design 201</h5>
                <p className="text-[16px]  max-w-[382px] leading-[24px]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse varius enim in eros.
                </p>
              </div>
              <div className="flex lg:px-0 px-5  items-center gap-5">
                <button className="w-[117px] border-primary  h-[40px] rounded-[5px] border">
                  Enroll Now
                </button>
                <div>$400</div>
              </div>
            </div>
            <div className="bg-secondary max-w-[380px] sm:max-w-full  flex flex-col gap-5 pb-7 rounded-[5px]">
              <div>
                <Image src="/img3.jpg" alt="courses" width={600} height={600} />
              </div>
              <div className="text-[14px] flex items-center px-5  justify-between font-[600]">
                <p>Programmimg</p>
                <div className="flex gap-2 items-center">
                  <StarSvg />
                  <span>5.0</span>
                </div>
              </div>
              <div className="flex flex-col gap-2 px-5 lg:px-0 lg:ps-5">
                <h5 className="font-[700] text-[24px]">
                  Introduction to Python
                </h5>
                <p className="text-[16px] max-w-[382px] leading-[24px]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse varius enim in eros.
                </p>
              </div>
              <div className="flex  items-center gap-5 px-5">
                <button className="w-[117px] border-primary  h-[40px] rounded-[5px] border">
                  Enroll Now
                </button>
                <div>$400</div>
              </div>
            </div>
            <div className="bg-secondary max-w-[380px] sm:max-w-full  flex flex-col gap-5 pb-7 rounded-[5px]">
              <div>
                <Image src="/img2.jpg" alt="courses" width={600} height={600} />
              </div>
              <div className="text-[14px] flex items-center  px-5 lg:ps-5 lg:pe-0  justify-between font-[600]">
                <p>Business</p>
                <div className="flex gap-2 items-center">
                  <StarSvg />
                  <span>5.0</span>
                </div>
              </div>
              <div className="flex flex-col gap-2 px-5 lg:ps-5 lg:px-0">
                <h5 className="font-[700] text-[24px]">
                  Data Analysis for Beginners
                </h5>
                <p className="text-[16px] max-w-[382px] leading-[24px]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse varius enim in eros.
                </p>
              </div>
              <div className="flex  items-center gap-5 px-5 lg:ps-5">
                <button className="w-[117px] border-primary  h-[40px] rounded-[5px] border">
                  Enroll Now
                </button>
                <div>$400</div>
              </div>
            </div>
            <div className="bg-secondary max-w-[380px] sm:max-w-full  flex flex-col gap-5 pb-7 rounded-[5px]">
              <div>
                <Image src="/img7.jpg" alt="courses" width={600} height={600} />
              </div>
              <div className="text-[14px] flex items-center  lg:px-0 px-5 lg:pe-5 justify-between font-[600]">
                <p>Art</p>
                <div className="flex gap-2 items-center">
                  <StarSvg />
                  <span>5.0</span>
                </div>
              </div>
              <div className="flex flex-col lg:px-0  px-5 gap-2">
                <h5 className="font-[700] text-[24px]">Art Specialization</h5>
                <p className="text-[16px] max-w-[382px] leading-[24px]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse varius enim in eros.
                </p>
              </div>
              <div className="flex lg:px-0 px-5  items-center gap-5">
                <button className="w-[117px] border-primary  h-[40px] rounded-[5px] border">
                  Enroll Now
                </button>
                <div>$400</div>
              </div>
            </div>
            <div className="bg-secondary max-w-[380px] sm:max-w-full  flex flex-col gap-5 pb-7 rounded-[5px]">
              <div>
                <Image src="/img6.jpg" alt="courses" width={600} height={600} />
              </div>
              <div className="text-[14px] flex items-center px-5  justify-between font-[600]">
                <p>Law</p>
                <div className="flex gap-2 items-center">
                  <StarSvg />
                  <span>5.0</span>
                </div>
              </div>
              <div className="flex flex-col gap-2 px-5 lg:ps-5 lg:px-0">
                <h5 className="font-[700] text-[24px]">Rule of Law</h5>
                <p className="text-[16px] max-w-[382px] leading-[24px]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse varius enim in eros.
                </p>
              </div>
              <div className="flex  items-center gap-5 px-5">
                <button className="w-[117px] border-primary  h-[40px] rounded-[5px] border">
                  Enroll Now
                </button>
                <div>$400</div>
              </div>
            </div>
            <div className="bg-secondary max-w-[380px] sm:max-w-full  flex flex-col gap-5 pb-7 rounded-[5px]">
              <div className="w-full h-[260px]">
                <Image
                  src="/img5.jpg"
                  alt="courses"
                  width={800}
                  height={600}
                  className="w-full h-full object-fill"
                />
              </div>
              <div className="text-[14px] flex items-center  px-5 lg:ps-5 lg:pe-0  justify-between font-[600]">
                <p>Tech</p>
                <div className="flex gap-2 items-center">
                  <StarSvg />
                  <span>5.0</span>
                </div>
              </div>
              <div className="flex flex-col gap-2 px-5 lg:ps-5 lg:px-0">
                <h5 className="font-[700] text-[24px]">
                  Introduction to webflow
                </h5>
                <p className="text-[16px] max-w-[382px] leading-[24px]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse varius enim in eros.
                </p>
              </div>
              <div className="flex  items-center gap-5 px-5 lg:ps-5">
                <button className="w-[117px] border-primary  h-[40px] rounded-[5px] border">
                  Enroll Now
                </button>
                <div>$400</div>
              </div>
            </div>
          </div>
          <Button />
        </div>
      </section>

      <section className="lg:mt-40 mt-32 py-24 bg-secondary ">
        <div className="flex flex-col gap-8 px-7">
          <h2 className="font-[700] text-[32px] leading-[41px] sm:text-[48px] text-center sm:leading-[57.6px]">
            Our team
          </h2>
          <p className="text-[18px] leading-[27px] text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 mt-16 md:grid-cols-3 gap-y-20 justify-items-center">
          <div className="flex flex-col items-center  gap-6">
            <div className="w-[80px] h-[80px]">
              <Image
                src="/person3.png"
                alt=" OurTeamMember"
                width={300}
                height={300}
              />
            </div>
            <div className="space-y-0.5  flex flex-col items-center">
              <p className="font-[600] text-[20px]">James Nduku</p>
              <p className="text-[18px] ">Marketing Coordinator</p>
            </div>
            <div className="flex gap-1.5">
              <div>
                <LinkedSvg />
              </div>
              <div>
                <FacebookSvg />
              </div>
              <div>
                <DribbleSvg />
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center  gap-6">
            <div className="w-[80px] h-[80px]">
              <Image
                src="/person2.png"
                alt=" OurTeamMember"
                width={300}
                height={300}
              />
            </div>
            <div className="space-y-0.5  flex flex-col items-center">
              <p className="font-[600] text-[20px]">Joseph Munyambu</p>
              <p className="text-[18px] ">Nursing Assistant</p>
            </div>
            <div className="flex gap-1.5">
              <div>
                <LinkedSvg />
              </div>
              <div>
                <FacebookSvg />
              </div>
              <div>
                <DribbleSvg />
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center  gap-6">
            <div className="w-[80px] h-[80px]">
              <Image
                src="/person1.png"
                alt=" OurTeamMember"
                width={300}
                height={300}
              />
            </div>
            <div className="space-y-0.5  flex flex-col items-center">
              <p className="font-[600] text-[20px]">Joseph Ngumbau</p>
              <p className="text-[18px] ">Medical Assistant</p>
            </div>
            <div className="flex gap-1.5">
              <div>
                <LinkedSvg />
              </div>
              <div>
                <FacebookSvg />
              </div>
              <div>
                <DribbleSvg />
              </div>
            </div>
          </div>
          <div className="sm:flex hidden flex-col items-center  gap-6">
            <div className="w-[80px] h-[80px]">
              <Image
                src="/person6.png"
                alt=" OurTeamMember"
                width={300}
                height={300}
              />
            </div>
            <div className="space-y-0.5  flex flex-col items-center">
              <p className="font-[600] text-[20px]">Erick Kipkemboi</p>
              <p className="text-[18px] ">Web Designer</p>
            </div>
            <div className="flex gap-1.5">
              <div>
                <LinkedSvg />
              </div>
              <div>
                <FacebookSvg />
              </div>
              <div>
                <DribbleSvg />
              </div>
            </div>
          </div>
          <div className="sm:flex hidden flex-col items-center  gap-6">
            <div className="w-[80px] h-[80px]">
              <Image
                src="/person5.png"
                alt=" OurTeamMember"
                width={300}
                height={300}
              />
            </div>
            <div className="space-y-0.5  flex flex-col items-center">
              <p className="font-[600] text-[20px]">Stephen Kerubo</p>
              <p className="text-[18px] ">President of Sales</p>
            </div>
            <div className="flex gap-1.5">
              <div>
                <LinkedSvg />
              </div>
              <div>
                <FacebookSvg />
              </div>
              <div>
                <DribbleSvg />
              </div>
            </div>
          </div>
          <div className="sm:flex hidden flex-col items-center  gap-6">
            <div className="w-[80px] h-[80px]">
              <Image
                src="/person4.png"
                alt=" OurTeamMember"
                width={300}
                height={300}
              />
            </div>
            <div className="space-y-0.5  flex flex-col items-center">
              <p className="font-[600] text-[20px]">John Leboo</p>
              <p className="text-[18px] ">Dog Trainer</p>
            </div>
            <div className="flex gap-1.5">
              <div>
                <LinkedSvg />
              </div>
              <div>
                <FacebookSvg />
              </div>
              <div>
                <DribbleSvg />
              </div>
            </div>
          </div>
        </div>
        <div className="sm:hidden flex w-full items-center justify-center">
          <button className="border border-primary rounded-[5px]  mt-16 text-[16px] leading-[26px] w-[155px] h-[48px]">
            View All
          </button>
        </div>
      </section>
      <section className="sm:bg-secondary overflow-hidden py-36">
        <div className="flex flex-col gap-8 px-5 md:px-20 xs:px-8">
          <h2 className="font-[700] sm:block hidden text-[32px] leading-[41px] sm:text-[48px]  sm:leading-[57.6px]">
            Customer testimonials
          </h2>
          <h2 className="sm:hidden  font-[700] text-[32px] text-center leading-[41px] sm:text-[48px]  sm:leading-[57.6px]">
            What Our Student Say
          </h2>
          <p className="text-[18px]  leading-[27px] sm:text-start text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>
        <div>
          <div className="  flex  px-8 sm:px-0  justify-center sm:justify-start  mt-24 overflow-hidden  gap-16 sm:ps-20">
            <div className="  w-[416px] sm:h-[321px] flex flex-col gap-7 border p-9 border-black">
              <div className="flex items-center gap-2 ">
                <Fivestars />
                <Fivestars />
                <Fivestars />
                <Fivestars />
              </div>
              <div className="max-w-[292px] sm:w-[292px] leading-[27px] text-[18px]">
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in eros elementum tristique. Duis
                cursus, mi quis viverra ornare."
                <div className="flex gap-4 items-center">
                  <Image
                    src="/person1.png"
                    alt="testimonial"
                    width={56}
                    height={56}
                    className="rounded-full"
                  />
                  <div className="">
                    <p className="text-[16px] font-[600] ">James Nduku</p>
                    <p className="text-[16px]">Software Developer</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-[416px] h-[321px] hidden sm:flex flex-col gap-7 border p-9 border-black">
              <div className="flex items-center gap-2 ">
                <Fivestars />
                <Fivestars />
                <Fivestars />
                <Fivestars />
              </div>
              <div className="w-[292px] leading-[27px] text-[18px]">
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in eros elementum tristique. Duis
                cursus, mi quis viverra ornare."
                <div className="flex gap-4 items-center">
                  <Image
                    src="/person3.png"
                    alt="testimonial"
                    width={56}
                    height={56}
                    className="rounded-full"
                  />
                  <div className="">
                    <p className="text-[16px] font-[600] ">Erick Kipkemboi</p>
                    <p className="text-[16px]">Scrum Master</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[416px] h-[321px] hidden sm:flex flex-col gap-7 border p-9 border-black">
              <div className="flex items-center gap-2 ">
                <Fivestars />
                <Fivestars />
                <Fivestars />
                <Fivestars />
              </div>
              <div className="w-[292px] leading-[27px] text-[18px]">
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in eros elementum tristique. Duis
                cursus, mi quis viverra ornare."
                <div className="flex gap-4 items-center">
                  <Image
                    src="/person4.png"
                    alt="testimonial"
                    width={56}
                    height={56}
                    className="rounded-full"
                  />
                  <div className="">
                    <p className="text-[16px] font-[600] ">Stephen Kerubo</p>
                    <p className="text-[16px]">UI/UX Designer</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex  px-8 sm:px-0 sm:ps-20 mt-20 justify-between items-center">
            <div className="">
              <DotsSvg />
            </div>
            <div className="flex justify-end sm:relative -right-24 ">
              <SlideButtonSvg />
            </div>
          </div>
        </div>
       </section>
        <section className="flex lg:flex-row flex-col items-center gap-10 sm:gap-7 justify-between px-20 sm:mt-52 mt-12">
          <div className="sm:text-start text-center space-y-4">
            <h2 className="text-[18px] font-[600] w-[287px] sm:w-full">
              Subscribe to our newsletter
            </h2>
            <p className="text-[16px] w-[287px] sm:w-full">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
          <div>
            <div className=" text-[16px] flex sm:flex-row flex-col gap-5 items-center ">
              <input
                type="email"
                autoComplete="off"
                placeholder="Enter your email"
                className=" w-[87vw] sm:w-[265px] h-[48px] rounded-[5px] border border-primary px-4 placeholder:text-primary"
              />
              <button className="w-full sm:w-[119px] px-5 h-[48px] rounded-[5px] border border-primary">
                Subscribe
              </button>
            </div>
              <p className="leading-[18px] mt-4 sm:text-start text-center text-[12px]">
                By subscribing you agree to with our Privacy Policy
              </p>
          </div>
      </section>
    </div>
  );
}
