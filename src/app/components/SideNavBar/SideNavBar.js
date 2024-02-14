"use client"; 
import classNames from "classnames";
import { useState, useMemo } from "react"; 
import { CiHome } from "react-icons/ci";
import { HiChevronDoubleLeft } from "react-icons/hi";
import { FaBook } from "react-icons/fa";
import Link from "next/link";
import { useRouter } from "next/navigation";


const menuItems = [
    { id: 1, label: "Home", icon: <CiHome />, link: "/" },
    { id: 2, label: "Courses", icon: <FaBook />    , link: "/home" },
    { id: 3, label: "Class", icon: <FaBook />    , link: "/courses" },
    { id: 4, label: "Projects", icon: <FaBook />    , link: "/courses" },
    { id: 4, label: "Support", icon: <FaBook />    , link: "/courses" },
    { id: 4, label: "Settings", icon: <FaBook />    , link: "/courses" },
  ];


export default function SideNavBar() {
    const [toggleCollapse, setToggleCollapse] = useState(false);
    const [isCollapsible, setIsCollapsible] = useState(false);

    const router = useRouter();

    const activeMenu = useMemo(
        () => menuItems.find((menu) => menu.link === router.pathname),
        [router.pathname]
      );

    const wrapperClasses = classNames (
        "h-screen px-4 pt-8 pb-4 flex justify-between flex-col border border-r-[#0077b3] font-sans",
        {
            ['w-40']: !toggleCollapse,
            ['w-14']: toggleCollapse,
        },
    );

    const collapseIconClasses = classNames("p-4 rounded bg-light-lighter absolute -right-5",
    {
        "rotate-180" : toggleCollapse,
    }
    );

    // const getNavItemClasses = (menu) => {
    //     return classNames(
    //       "flex items-center cursor-pointer hover:bg-light-lighter rounded w-full overflow-hidden whitespace-nowrap",
    //       {
    //         ["bg-light-lighter"]: activeMenu.id === menu.id,
    //       }
    //     );
    //   };
    

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
            className="border w-10/12 mt-10 h-10 px-3 rounded-md my-2 outline-none"
          /></div>
            {/* <span className={classNames('mt-2 text-lg font-medium text-text', {hidden: toggleCollapse,})}>
                <p>Logo Name</p>
            </span> */}
            </div>
            {isCollapsible && ( <button className={collapseIconClasses} onClick={handleSideBarToggle}>
            <HiChevronDoubleLeft />
            </button>)}
            </div>
            {/* <div className="flex flex-col items-start mt-24">
          {menuItems.map(({ icon: Icon, ...menu }) => {
            const classes = getNavItemClasses(menu);
            return (
              <div key={index} className={classes}>
                <Link href={menu.link}>
                  <a className="flex py-4 px-3 items-center w-full h-full">
                    <div style={{ width: "2.5rem" }}>
                      <Icon />
                    </div>
                    {!toggleCollapse && (
                      <span
                        className={classNames(
                          "text-md font-medium text-text-light"
                        )}
                      >
                        {menu.label}
                      </span>
                    )}
                  </a>
                </Link>
              </div>
            );
          })}
        </div> */}
        </div>
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