import React from 'react'

function Courses() {
  return (
    <div>
      <section className=" max-w-[1152px] mx-auto mt-28 lg:mt-40">
        <div className="flex flex-col gap-8 px-7">
          <h2 className="font-[700] text-[32px] leading-[41px] sm:text-[48px] text-center sm:leading-[57.6px]">
            Our Achivements
          </h2>
          <p className="text-[18px] leading-[27px] max-w-[362px] mx-auto sm:max-w-full text-center ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            varius enim in eros elementum tristique. Duis cursus, mi quis
            viverra ornare, eros dolor interdum nulla, ut commodo diam libero
            vitae erat.
          </p>
        </div>
        <div className="grid  grid-cols-2 gap-12 items-center px-5 md:grid-cols-4 justify-items-center mt-14">
          <div>
            <h3 className="font-[700] text-[40px]">+200</h3>
            <p className="text-[16px]">Courses</p>
          </div>
          <div>
            <h3 className="font-[700] text-[40px]">50K</h3>
            <p className="text-[16px]">Mentors</p>
          </div>
          <div>
            <h3 className="font-[700] text-[40px]">370k</h3>
            <p className="text-[16px]">Students</p>
          </div>
          <div>
            <h3 className="font-[700] text-[40px]">100+</h3>
            <p className="text-[16px]">Recognition</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Courses