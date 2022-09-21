import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import SideDashboard from "./Dashboard";
import Profile from './Images/HeaderProfile.png'


import {
  CheckCircleIcon,
  ClockIcon,
  ClipboardDocumentListIcon,
  PlusCircleIcon,
} from "@heroicons/react/24/solid";

import { faAngleLeft,
    
     faSearch,
     faBell
} from "@fortawesome/free-solid-svg-icons";
import { faBuromobelexperte } from "@fortawesome/free-brands-svg-icons";
import SideDashboard from "./Dashboard";

const Package = () => {
  return (
    <>
    <div className="flex">
    <div className="">
        <SideDashboard/>
    </div>
    <div className="">
      <section className="pb-28">
        {/* main section */}
        
        <div className='flex justify-between '>
                <div className="ml-[3rem]">
                    <h1>
                       Plans & Packages
                    </h1>
                    <p>Edit subscription plan</p>
                </div>
                <div className='flex'>
                    <div className=' pr-2'>
                        <FontAwesomeIcon icon={faSearch} className='h-5 w-5 HeaderIcons pr-4' />
                        <FontAwesomeIcon icon={faBell} className='h-5 w-5 HeaderIcons' />
                        
                    </div>
                    <span className='border border-r-2 h-12 mt-16 mr-4'></span>
                    <div className='flex HeaderIcons'>
                    <div className='mr-2'>
                        <h5>John Doe</h5>
                        <span className='HeaderLink BlueColorTwo hover:BlueColorThree'><a href="">Admin account</a></span>
                    </div>
                    <div className='relative -top-2'>
                        <img src={Profile} alt="" className='rounded-full' />
                    </div>
                    </div>
                
                </div>
        

         
          </div>
        
        {/* plan */}
        {/* basic */}
        <div className="rounded-md w-[60rem] ml-[5rem] h-[61rem] shadow-2xl pt-4">
          <div className=" mt-12 ml-36">
            <input
              className="border-2 border-slate-300 w-80 h-12 rounded-sm p-4"
              type="text"
              placeholder="Basic Plan"
            ></input>
            <h1 className="text-sm text-slate-500 pt-2 mb-8">
              Write PackageName
            </h1>
          </div>
          {/* description */}

          <div className="text ml-36">
            <h1 className="absolute descripton text-gray-400">
              In Our basic plan You cantake advantage of all in these features
              below
            </h1>
          </div>
          <input
            placeholder=""
            className="ml-36 w-3/5 h-52 border-2 border-slate-300 mt-3  pl-2 "
          ></input>
          <h1 className="text-sm text-slate-500 pt-2 mb-8 ml-36">
            Write Description here
          </h1>

          {/* features */}
          <div className="flex wrap">
            <div className=" mt-12 ml-36">
              <h1 className="package absolute  mt-[-1.5rem] text-gray-400">lorem ispm</h1>
              <input
                className="border-2 border-slate-300 w-80 h-12 rounded-sm p-4"
                type="text"
                placeholder=""
              ></input>
              <h1 className="text-sm text-slate-500 pt-2 mb-4">
                Write PackageName
              </h1>
            </div>
            {/* package price */}
            <div className=" mt-12 ml-16">
              <h1 className="package absolute mt-[-1.5rem] text-gray-400">48.00$</h1>
              <input
                className="border-2 border-slate-300 w-80 h-12 rounded-sm p-4"
                type="text"
                placeholder=""
              ></input>
              <h1 className="text-sm text-slate-500 pt-2 mb-8">
                Write PackagePrice here
              </h1>
            </div>
          </div>
          {/*  */}
          <div className="">
            <div className=" mt-4 ml-36">
              <h1 className="package absolute mt-[-1.5rem] text-gray-400">lorem ispm</h1>
              <input
                className="border-2 border-slate-300 w-80 h-12 rounded-sm p-4"
                type="text"
                placeholder=""
              ></input>
              <h1 className="text-sm text-slate-500 pt-2 mb-8">
                Write PackageName
              </h1>
            </div>
          </div>
          {/*  */}
          <div className="">
            <div className=" mt-4 ml-36">
              <h1 className="package absolute mt-[-1.5rem] text-gray-400">lorem ispm</h1>
              <input
                className="border-2 border-slate-300 w-80 h-12 rounded-sm p-4"
                type="text"
                placeholder=""
              ></input>
              <h1 className="text-sm text-slate-500 pt-2 mb-8">
                Write PackageName
              </h1>
            </div>
          </div>
          {/*add new feature  */}
          <div className="">
            <PlusCircleIcon className="w-[34rem] text-blue-800 ml-[-9rem] h-7 mb-[-1.5rem]" />
            <a className="text-blue-500 text-lg ml-36 font-bold" href="/">
              Add New Feature
            </a>
          </div>
          <div className="float-right mr-60">
            <button className="mr-2 font-bold text-black w-[6rem] h-10  text-sm">
              Discard
            </button>
            <button className="mr-6 border border-solid bg-blue-300 text-blue-900 w-[6rem] h-10 rounded-lg font-bold text-sm">
              Apply
            </button>
          </div>
        </div>
      </section>
      </div>
      </div>
    </>
  );
};

export default Package;
