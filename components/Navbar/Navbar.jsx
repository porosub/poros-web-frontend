import React, { useState } from 'react'
import { Transition, CSSTransition } from 'react-transition-group'
import '../../styles/hamburgers.min.css'
import classes from './Navbar.module.scss'

const Navbar = (props) => {
    const [isHamburger, toggleHamburger] = useState(false);
    const [isDropDown, toggleDropDown] = useState(false);

    const hamburgerClass = [
        "hamburger", "hamburger--collapse", "lg:hidden", "z-30", "absolute", "self-end", "focus:outline-none",
        "md:self-center"
    ];

    if (isHamburger) {
        hamburgerClass.push('is-active')
    }

    const handleHamburger = () => {
        toggleHamburger(prevState => !prevState)
    }

    const handleDropDown = () => {
        toggleDropDown(prevState => !prevState)
    }

    const defaultStyle = {
        opacity: 0,
        transform: "translateX(-90%)",
        transition: "all .4s ease"
    }

    const transitionStyles = {
        entering: { opacity: 1, transform: "translateX(0)" },
        entered: { opacity: 1, transform: "translateX(0)" },
        exiting: { opacity: 0, transform: "translateX(-90%)" },
        exited: { opacity: 0, transform: "translateX(-90%)" }
    };

    return (
        <nav className="w-full shadow-lg top-0 bg-white z-10 fixed">
            <div className="flex w-full">
                <div className="px-6 py-3 flex flex-row-reverse w-full md:px-10">
                    <button className={hamburgerClass.join(" ")} type="button" onClick={handleHamburger}>
                        <span className="hamburger-box lg:hidden">
                            <span className="hamburger-inner lg:hidden"></span>
                        </span>
                    </button>
                    <div className="flex flex-col justify-center items-center relative outline-none no-outline">
                        <CSSTransition in={isDropDown} timeout={500} classNames="dropdown-btn">
                            <button className="outline-none no-outline hidden lg:block" onClick={handleDropDown}>
                                <img src="/icons/dropdown.svg" alt="" className="w-8 outline-none no-outline" />
                            </button>
                        </CSSTransition>
                        <CSSTransition in={isDropDown} timeout={500} classNames="dropdown">
                            <div className="absolute overflow-hidden bg-white shadow-md rounded-b-2xl rounded-tl-2xl right-0 top-2p5 min-w-0 w-0 h-0 border-2 border-white hidden lg:block">
                                <CSSTransition in={isDropDown} timeout={500} classNames="dropdown-menu">
                                    <div className="flex flex-col">
                                        <div className="flex items-center mb-4 cursor-pointer">
                                            <img src="/icons/profile_setting-black.svg" alt="" className="mr-3 w-6" />
                                            <p>Profile Setting</p>
                                        </div>
                                        <div className="flex flex items-center cursor-pointer">
                                            <img src="/icons/logout-black.svg" alt="" className="mr-3 w-6" />
                                            <p>Logout</p>
                                        </div>
                                    </div>
                                </CSSTransition>
                            </div>
                        </CSSTransition>
                    </div>
                    <div className="flex w-full justify-center mr-1 lg:justify-start">
                        <div className="w-8 lg:mr-4 lg:w-8 lg:ml-0 md:w-16 md:ml-2">
                            <img src="https://static.ivqonsanada.com/poros/img/logo poros.svg" alt="" className="w-full lg:w-full" />
                        </div>
                        <p className="font-bold size text-xl hidden lg:inline-block">Poros Web Admin</p>
                    </div>
                </div>
                <Transition in={isHamburger} timeout={500}>
                    {state => (
                        <div className="fixed left-0 top-0 z-20 w-full h-full translate-x-5 bg-primary overflow-x-hidden flex flex-col justify-start pt-20 items-center lg:hidden"
                            style={{
                                ...defaultStyle,
                                ...transitionStyles[state]
                            }}>
                            <div className="w-5/6 flex-wrap flex min-w-full justify-around px-8 md:px-24">
                                <div className="w-full mb-16 flex flex-col justify-center items-center md:mb-20">
                                    <div className="bg-white rounded-full overflow-hidden md:w-24 md:h-24 w-16 h-16 border-2 border-yellow-500 flex justify-center">
                                        <img src="/icons/person.svg" alt="" className="w-full" />
                                    </div>
                                </div>
                                <div className={classes.Wrapper}>
                                    <div className="w-full mb-8 flex flex-col items-center md:mb-16">
                                        <img src="/icons/dashboard.svg" alt="" className="md:w-3/12 w-2/6" />
                                        <p className="text-white font-semibold mt-2 md:text-lg md:mt-3 text-xs">Dashboard</p>
                                    </div>
                                </div>
                                <div className={classes.Wrapper}>
                                    <div className="w-full mb-8 flex flex-col items-center md:mb-16">
                                        <img src="/icons/posts.svg" alt="" className="md:w-3/12 w-2/6" />
                                        <p className="text-white font-semibold mt-2 md:text-lg md:mt-3 text-xs">Posts</p>
                                    </div>
                                </div>
                                <div className={classes.Wrapper}>
                                    <div className="w-full mb-8 flex flex-col items-center md:mb-16">
                                        <img src="/icons/project.svg" alt="" className="md:w-3/12 w-2/6" />
                                        <p className="text-white font-semibold mt-2 md:text-lg md:mt-3 text-xs">Projects</p>
                                    </div>
                                </div>
                                <div className={classes.Wrapper}>
                                    <div className="w-full mb-8 flex flex-col items-center md:mb-16">
                                        <img src="/icons/achievements.svg" alt="" className="md:w-3/12 w-2/6" />
                                        <p className="text-white font-semibold mt-2 md:text-lg md:mt-3 text-xs">Achievements</p>
                                    </div>
                                </div>
                                <div className={classes.Wrapper}>
                                    <div className="w-full mb-8 flex flex-col items-center md:mb-16">
                                        <img src="/icons/users.svg" alt="" className="md:w-3/12 w-2/6" />
                                        <p className="text-white font-semibold mt-2 md:text-lg md:mt-3 text-xs">Users</p>
                                    </div>
                                </div>
                                <div className={classes.Wrapper}>
                                    <div className="w-full mb-8 flex flex-col items-center md:mb-16">
                                        <img src="/icons/web_setting.svg" alt="" className="md:w-3/12 w-2/6" />
                                        <p className="text-white font-semibold mt-2 md:text-lg md:mt-3 text-xs">Web Settings</p>
                                    </div>
                                </div>
                                <div className={classes.Wrapper}>
                                    <div className="w-full flex flex-col items-center">
                                        <img src="/icons/profile_setting.svg" alt="" className="md:w-3/12 w-2/6" />
                                        <p className="text-white font-semibold mt-2 md:text-lg md:mt-3 text-xs">Profile Settings</p>
                                    </div>
                                </div>
                                <div className={classes.Wrapper}>
                                    <div className="w-full flex flex-col items-center">
                                        <img src="/icons/logout.svg" alt="" className="md:w-3/12 w-2/6" />
                                        <p className="text-white font-semibold mt-2 md:text-lg md:mt-3 text-xs">Logout</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </Transition>
            </div>
        </nav>
    )
}

export default Navbar