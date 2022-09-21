import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import vector from "./Images/Vector.png";
import logodbsm from "./Images/Logodeesign.png";
// font awsome
// import { FaceSmileIcon } from "@heroicons/react/24/solid";

import {
    faCreditCard,
   
} from "@fortawesome/free-solid-svg-icons";
import {
    faCcMastercard,
  faGithub,
  faMailchimp

} from "@fortawesome/free-brands-svg-icons";
import SideDashboard from "./Dashboard";

const Verify = () => {
  return (
    <>
    <div className="flex">
    <div className="">
        <SideDashboard/>
    </div>
    <div className="">
    <div className="">
    <img src={logodbsm} alt="" className='h-[4.5rem] w-[4.5rem] mt-5 ml-[28rem]' />
        <h1 className="text-sm text-gray-500 text-center  font-bold place">
          A Place where you can manage your sales
        </h1>
      </div>
    <section className="pb-8 mb-34">
        <div className="">
          <h1 className=" text-center font-bold pay">Verify & Pay Now</h1>
        </div>
        
            {/* card */}
            <div className="flex wrap mt-8 ml-[9rem] ">
                {/* card icon */}
                <FontAwesomeIcon icon={faCreditCard} className=" mx-3 h-9 w-4 text-gray-500 absolute" />
              <input
                className="border-2 border-slate-300 w-[24rem] h-12 mt-2 rounded-lg p-4 shadow-xl ml-[-1rem]"
                type="text"
                placeholder="card"
              ></input>
              
              <FontAwesomeIcon icon={faCreditCard} className=" ml-[27rem] h-9 w-4 text-gray-500 absolute" />
              <input
                className="ml-8 border-2 border-slate-300 w-[24rem] h-12 mt-2 rounded-lg p-4 shadow-xl "
                type="text"
                placeholder="card"
              ></input>

            </div>
            {/* placeholder */}
            <div className="text-sm mt-4 ml-[8rem] font-bold">Placeholder</div>
            <input
                className="ml-[8rem] mt-2 border-2 border-slate-300 w-[50rem] h-12 rounded-lg p-4 shadow-xl"
                type="text"
                placeholder="123 456 789 321"
              ></input>
              {/*  */}
              <div className="flex wrap">
                <div className="">
              <div className="text-sm mt-4 ml-[8rem] font-bold">Placeholder</div>
           <div className="">
            <input
                className="ml-[8rem] mt-2 border-2 border-slate-300 w-[24rem] h-12 rounded-lg p-4 shadow-xl"
                type="text"
                placeholder="placeholder"
              ></input></div>
              </div>
              {/*  */}
              <div className="">
              <div className="text-sm mt-4 ml-8 font-bold">Placeholder</div>
              <div className="">
            <input
                className="ml-8 mt-2 border-2 border-slate-300 w-[24rem] h-12 rounded-lg p-4 shadow-xl"
                type="text"
                placeholder="placeholder"
            ></input></div>
              </div>
              </div>
              {/* drop down placeholder */}
              <div className="flex wrap">
                <div className="">
              <div className="text-sm mt-4 ml-[8rem] font-bold">Placeholder</div>
                <div className="">
                <select className="mt-2 ml-[8rem]  pl-4 font-bold border-2 border-slate-300 h-[3.25rem] w-[24rem] rounded-lg shadow-xl">
                  <option value="number">Placeholder</option>
                </select>
                </div>
                </div>
                {/*  */}

                <div className="">
                <div className="text-sm mt-4 ml-8 font-bold">Placeholder</div>
                <div className="">
            <input
                className="ml-8 mt-2 border-2 border-slate-300 w-[24rem] h-12 rounded-lg p-4 shadow-xl"
                type="text"
                placeholder="placeholder"
            ></input></div>
                </div>
              </div>
              {/* verify through */}
              <div className="">

                <h1 className="text-sm text-blue-500 ml-[8rem] mt-4">Verify through</h1>
              </div>
              {/* check box */}
              <div className="flex ml-[8rem] mt-4">
              <div className="form-check">
  <input className="form-check-input " type="radio" name="flexRadioDefault" id="flexRadioDefault1"></input>
  <label className="form-check-label font-bold" for="flexRadioDefault1">
   Email
  </label>
</div>
<div className="form-check ml-8">
  <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked></input>
  <label class="form-check-label font-bold" for="flexRadioDefault2">
    Phone Number
  </label>
</div>
</div>
{/* verification code */}
<div className="flex ml-[8rem] mt-4">
                <div className="">
                <FontAwesomeIcon icon={faMailchimp} className="ml-[0.5rem] mt-[0.5rem] h-9 w-4 text-gray-500 absolute" />
                  <input
                    className=" border-2 border-slate-300 w-[38rem] h-12 p-4 rounded-sm "
                    type="text"
                    placeholder="Verification Code"
                  ></input>
                </div>
                {/* set logo */}
                <a className="text-black font-bold ml-2 border-2 border-slate-300 w-[8.5rem] h-[3rem] rounded-sm  pt-[0.5rem] pl-4 pb-[1.5rem]">
                  Get Code
                </a>
              </div>
                {/*qucik pos  */}
            <div className="flex ml-32">
              <div className="">
              <img src={vector} alt="" className='h-6 w-6 mt-5' />
              </div>
           <div className="Quick">
            <div className="mt-[5.25rem]">
                <span className="text-blue-500 font-bold text-sm">
                  Quick Pos{" "}
                </span>
                <span className="text-gray-500 font-bold text-sm">
                  Subscription Package
                </span>{" "}
                <span className="ml-4 text-gray-300 font-bold text-sm">
                  Basic
                </span>
</div>
              </div>
            </div>
            {/* continue button */}
            <div className="ml-[13rem] mt-4">
                <a className="text-white border-2 bg-blue-600 font-bold py-2 px-64 rounded-lg">
                  Continue
                </a>
              </div>
              {/* quick business */}
              <div className="flex ml-[26rem]">
          {/* icon */}
          <FontAwesomeIcon icon={faGithub} className="h-9 w-4 text-gray-500 mt-[3.25rem]" />
        <h1 className="text-gray-500 text-center font-bold text-sm">Quick Business Pos</h1>
        </div>
        
    </section>
    </div>
    </div>
      
      
      </>
  )
}

export default Verify;