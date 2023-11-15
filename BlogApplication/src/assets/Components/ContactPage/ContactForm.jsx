import React from 'react'
import { RiArrowDropDownLine } from "react-icons/ri";

const ContactForm = () => {
  return (
    <div>
        <section className="bg-violet-800 mx-[2rem] md:mx-[21rem] px-16 py-7 md:py-10 mt-[4rem] md:max-h-[15rem]">
      <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
        <div className="flex flex-col items-stretch w-6/12 max-md:w-full max-md:ml-0">
          <div className="flex flex-col items-stretch my-auto max-md:mt-10">
            <p className="text-white text-sm leading-5 opacity-60 whitespace-nowrap">
              Working hours
            </p>
            <hr className="opacity-10 bg-white shrink-0 h-px mt-4" />
            <h2 className="text-white text-xl font-bold leading-8">
              Monday To Friday
            </h2>
            <h2 className="text-white text-xl font-bold leading-8">
              9:00 AM to 8:00 PM
            </h2>
            <p className="text-white text-base leading-7 opacity-60 ">
              Our Support Team is available 24/7
            </p>
          </div>
        </div>
        <div className="flex flex-col items-stretch w-6/12 ml-5 max-md:w-full max-md:ml-0">
          <div className="flex flex-col  mt-14 md:mt-[-1.0rem] md:pt-[1rem]">
            <p className="text-white text-sm leading-5 opacity-60">
              Contact Us
            </p>
            <hr className="opacity-10 bg-white shrink-0 h-px mt-5" />
            <h2 className="text-white text-xl font-bold leading-8">
              <a href="tel:02079932905">020 7993 2905</a>
            </h2>
            <p className="text-white text-[0.6rem] sm:text-base leading-7 opacity-60">
              <a href="mailto:hello@finsweet.com">hello@finsweet.com</a>
            </p>
          </div>
        </div>
      </div>
    </section>
    <form className="flex flex-col md:mx-[21rem] mx-[2rem] mt-[2rem] ">

      
      
        <input type="text" name="" placeholder="Full Name" id="" className=' text-[#232536]text-base leading-7 whitespace-nowrap border w-full px-5 py-6 rounded-sm border-solid border-zinc-500 border-opacity-50 max-md:max-w-full max-md:pl-1 placeholder-bold'/>
      
      <input className="text-gray-800 text-base leading-7 whitespace-nowrap border w-full mt-4 px-5 py-6 rounded-sm border-solid border-zinc-500 border-opacity-50 max-md:max-w-full max-md:pl-1 placeholder-bold"
        placeholder="Your Email" 
      />
      <div className="items-stretch border flex w-full justify-between gap-5 mt-4 pl-6 pr-16 py-6 rounded-sm border-solid border-zinc-500 border-opacity-50 max-md:max-w-full max-md:flex-wrap max-md:px-5">
        <div className="text-gray-800 text-base leading-7">Query Related</div>
        <RiArrowDropDownLine/>
      </div>
      <textarea className="text-gray-800 text-base leading-7 whitespace-nowrap border w-full mt-4 pt-6 pb-24 px-5 rounded-sm border-solid border-zinc-500 border-opacity-50 max-md:max-w-full max-md:pl-1 max-md:pb-10">
        Message
      </textarea>
      <a
        href="#"
        className="text-gray-800 text-xl sm:text-2xl font-bold leading-8 whitespace-nowrap bg-amber-300 w-full items-center mt-4 px-5 py-5 max-md:max-w-full text-center"
      >
        Send Message
      </a>
    </form>
    </div>
  )
}

export default ContactForm
