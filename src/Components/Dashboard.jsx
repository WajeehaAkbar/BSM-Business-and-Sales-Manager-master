import {React, useState} from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faArrowLeft,
    faChartLine,
    faListSquares,
    faFile,
    faCreditCard,
    faCircleUser,
    faFileLines,
    faGears
} from "@fortawesome/free-solid-svg-icons";
import BSMLogo from './Images/Logo.png'
const SideDashboard = () => {
    const [open, setOpen] = useState(true);
    const Menus = [
      { title: "Sales Analytics", src: "faChartLine" },
      { title: "Registered Brands", src: "faListSquares" },
      { title: "Plans", src: "faFile"},
      { title: "Payment ", src: "faCreditCard " },
      { title: "Reports", src: " faFileLines" },
      { title: "Customer Request", src: "faCircleUser" },
      { title: "Settings", src: "faGears" },
    ];
    return (
        <>
   <div
        className={` ${
          open ? "w-72" : "w-20"
        } DashboardColor h-full p-5  pt-8 relative duration-300`}
      >
         <FontAwesomeIcon icon={faArrowLeft}  className={`absolute cursor-pointer text-[#FFFFFF] DashboardColor
         p-2 -right-4 top-80 h-5 w-5 
           rounded-full  ${!open && "rotate-180"}`}
          onClick={() => setOpen(!open)} />
        
        <div className="flex gap-x-4 items-center">
          <img
            src={BSMLogo} alt=''
            className={` cursor-pointer duration-500 ${
              open && "rotate-[360deg]"
            }`}
          />
          <h2
            className={`textWhite origin-left font-medium text-xl duration-200 ${
              !open && "scale-0" 
            }`} >
            Business And Sales Management
          </h2>
        </div>
        <ul className="pt-12">
          {Menus.map((Menu, index) => (
            <li
              key={index}
              className={`flex  rounded-md p-5 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4 
              ${Menu.gap ? "mt-9" : "mt-2"} ${
                index === 0 && "bg-light-white"
              } `}> 
              <FontAwesomeIcon icon={`${Menu.src}`}  />
              <img src={`./src/assets/${Menu.src}.png`} alt='' />
              <span className={`${!open && "hidden"} origin-left duration-200`}>
                {Menu.title}
              </span>
            </li>
          ))}
        </ul>
      </div>
        </>
    )
}

export default SideDashboard