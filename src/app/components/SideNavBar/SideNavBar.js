"use client"; 
import classNames from "classnames";
import { useState, useMemo } from "react"; 
import { CiHome } from "react-icons/ci";
import { HiChevronDoubleLeft } from "react-icons/hi";

// import Link from "next/link";
// import { useRouter } from "next/router";


export default function SideNavBar() {
    const [toggleCollapse, setToggleCollapse] = useState(false);
    const [isCollapsible, setIsCollapsible] = useState(false);

    const wrapperClasses = classNames (
        "h-screen px-4 w-96 pt-8 pb-4 flex justify-between flex-col border border-r-[#0077b3]",
        {
            ['w-80']: !toggleCollapse,
            ['w-20']: toggleCollapse
        }
    );

    const collapseIconClasses = classNames("p-4 rounded bg-light-lighter absolute right-6",
    {
        "rotate-180" : toggleCollapse,
    }
    );

    const onMouseOver = () => {
        setIsCollapsible(!isCollapsible)
    }

    const handleSideBarToggle = () => {
        setToggleCollapse(!toggleCollapse)
    }

    return (
      <main className={wrapperClasses} onMouseEnter={onMouseOver} onMouseLeave={onMouseOver}>
        <div className="flex flex-col">
            <div className="flex items-center justify-between relative ">
            <div className="flex items-center pl-1 gap-4">
            <div> <input
            type="name"
            placeholder="Search"
            className="border w-10/12 h-10 px-3 rounded-md my-2 outline-none"
          /></div>
            {/* <span className={classNames('mt-2 text-lg font-medium text-text', {hidden: toggleCollapse,})}>
                <p>Logo Name</p>
            </span> */}
            </div>
            {isCollapsible && ( <button className={collapseIconClasses} onClick={handleSideBarToggle}>
            <HiChevronDoubleLeft />
            </button>)}
            </div>
        </div>
        <div></div>
      </main>
    // <div className="bg-gray-800 h-full w-16 fixed left-0 top-0 z-50 overflow-y-auto">
    //   <div className="flex flex-col items-center justify-center h-full">
    //     <Link legacyBehavior href="/login">
    //       <a className="text-white my-4">
    //         Home
    //       </a>
    //     </Link>
    //     <Link legacyBehavior href="/signup">
    //       <a className="text-white my-4">
    //         About
    //       </a>
    //     </Link>
    //     <Link legacyBehavior href="/login">
    //       <a className="text-white my-4">
    //         Contact
    //       </a>
    //     </Link>
    //   </div>
    // </div>
    );
  }