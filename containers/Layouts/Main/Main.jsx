import React, { useState } from 'react'
import Navbar from "../../../components/Navbar/Navbar"
import Footer from "../../../components/Footer/Footer"
import { Transition, CSSTransition } from 'react-transition-group'
import Head from "next/head";
import classes from './Main.module.scss'

const defaultStyle = {
    transition: 'all .5s ease-in-out',
    width: '3rem',
}

const transitionStyles = {
    entering: { width: '14rem' },
    entered: { width: '14rem' },
    exiting: { width: '3rem' },
    exited: { width: '3rem' },
};

const dFirstContainer = {
    transition: 'all .5s ease-in-out',
    padding: '0rem 0rem',
}

const tFirstContainer = {
    entering: { padding: '0rem 0rem' },
    entered: { padding: '0rem 0rem' },
    exiting: { padding: '0rem 0rem' },
    exited: { padding: '0rem 0rem' },
};

const dSecContainer = {
    transition: 'all .2s ease-in-out',
    flexDirection: 'column',
    marginLeft: 0,
}

const tSecContainer = {
    entering: {marginLeft: '1rem', flexDirection: 'row' },
    entered: {marginLeft: '1rem', flexDirection: 'row' },
    exiting: {marginLeft: 0, flexDirection: 'column' },
    exited: {marginLeft: 0, flexDirection: 'column' },
};

const dImgContainer = {
    transition: 'all .5s ease-in-out',
    width: '2rem',
    height: '2rem',
}

const tImgContainer = {
    entering: {
        width: '2.5rem',
        height: '2.5rem',
    },
    entered: {
        width: '2.5rem',
        height: '2.5rem',
    },
    exiting: {
        width: '2rem',
        height: '2rem',
    },
    exited: {
        width: '2rem',
        height: '2rem',
    },
};

const dText = {
    transition: 'height .5s ease-in-out, opacity .5s ease-in-out .5s',
    height: 0,
    opacity: 0,
}

const tText = {
    entering: {
        opacity: 1,
        height: 'auto',
    },
    entered: {
        opacity: 1,
        height: 'auto',
    },
    exiting: {
        opacity: 0,
        height: 0,
    },
    exited: {
        opacity: 0,
        height: 0,
    },
};

const dIconContainer = {
    transition: 'all .5s ease-in-out',
    flexDirection: 'column',
    padding: '0 0',
}

const tIconContainer = {
    entering: {
        flexDirection: 'row',
        padding: '.5rem 1.75rem'
    },
    entered: {
        flexDirection: 'row',
        padding: '.5rem 1.75rem'
    },
    exiting: {
        flexDirection: 'column',
        padding: '0 0'
    },
    exited: {
        flexDirection: 'column',
        padding: '0 0'
    },
};

const dIcon = {
    transition: 'all .5s ease-in-out',
    width: '50%'
}

const tIcon = {
    entering: {
        width: '16.666667%'
    },
    entered: {
        width: '16.666667%'
    },
    exiting: {
        width: '50%'
    },
    exited: {
        width: '50%'
    },
};

const Main = (props) => {
    const [isEntering, setIsEntering] = useState(false)

    return (
        <div>
            <Head>
                <title>POROS Admin | {props.title}</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className="flex flex-col font-poros">
                <Navbar />
                <div className={classes.Content}>
                    <div className="flex">
                        <Transition in={isEntering} timeout={500}>
                            {state => (
                                <div
                                    style={{
                                        ...defaultStyle,
                                        ...transitionStyles[state]
                                    }}
                                    className="lg:flex w-0 h-full fixed bg-primary hidden lg:hidden lg:w-24 xl:block lg:flex-col pb-32 pt-8 xl:w-12 overflow-x-hidden lg:z-10 test" onMouseEnter={() => setIsEntering(true)} onMouseLeave={() => setIsEntering(false)}>

                                    <Transition in={isEntering} timeout={500}>
                                        {state => (
                                            <div style={{
                                                ...dFirstContainer,
                                                ...tFirstContainer[state]
                                            }}
                                                className="">
                                                <Transition in={isEntering} timeout={200}>
                                                    {state => (
                                                        <div
                                                            style={{
                                                                ...dSecContainer,
                                                                ...tSecContainer[state]
                                                            }}
                                                            className="flex flex-col items-center mb-8 xl:mb-10 ml-4">
                                                            <Transition in={isEntering} timeout={500}>
                                                                {state => (
                                                                    <div
                                                                        style={{
                                                                            ...dImgContainer,
                                                                            ...tImgContainer[state]
                                                                        }}
                                                                        className="rounded-full overflow-x-hidden border-2 border-yellow-500 bg-white xl:w-8 xl:h-8">
                                                                        <img src="/icons/person.svg" alt="" className="w-full" />
                                                                    </div>
                                                                )}
                                                            </Transition>
                                                            <Transition in={isEntering} timeout={500}>
                                                                {state => (
                                                                    <div
                                                                        style={{
                                                                            ...dText,
                                                                            ...tText[state]
                                                                        }}
                                                                        className="h-auto overflow-hidden"
                                                                    >
                                                                        <p

                                                                            className="ml-3 font-semibold text-white">Jane Smith
                                                                    </p>
                                                                    </div>
                                                                )}
                                                            </Transition>
                                                        </div>
                                                    )}
                                                </Transition>
                                                <Transition in={isEntering} timeout={500}>
                                                    {state => (
                                                        <div
                                                            style={{
                                                                ...dIconContainer,
                                                                ...tIconContainer[state]
                                                            }}
                                                            className="flex items-center mb-8 xl:mb-6 transition duration-200 hover:bg-green-700 rounded-r-full px-3 py-2 cursor-pointer">
                                                            <Transition in={isEntering} timeout={500}>
                                                                {state => (
                                                                    <img
                                                                        style={{
                                                                            ...dIcon,
                                                                            ...tIcon[state]
                                                                        }}
                                                                        src="/icons/dashboard.svg" alt="" className="w-2/6 xl:w-1/2 xl:w-1/6" />
                                                                )}
                                                            </Transition>
                                                            {/* <p className="text-white font-bold text-md ml-4">Dashboard</p>
                                                             */}
                                                            <Transition in={isEntering} timeout={500}>
                                                                {state => (
                                                                    <div
                                                                        style={{
                                                                            ...dText,
                                                                            ...tText[state]
                                                                        }}
                                                                        className="h-auto overflow-hidden"
                                                                    >
                                                                        <p

                                                                            className="ml-3 font-semibold text-white">Dashboard
                                                                    </p>
                                                                    </div>
                                                                )}
                                                            </Transition>
                                                        </div>
                                                    )}
                                                </Transition>
                                                <Transition in={isEntering} timeout={500}>
                                                    {state => (
                                                        <div
                                                            style={{
                                                                ...dIconContainer,
                                                                ...tIconContainer[state]
                                                            }}
                                                            className="flex items-center mb-8 xl:mb-6 transition duration-200 hover:bg-green-700 rounded-r-full px-3 py-2 cursor-pointer">
                                                            <Transition in={isEntering} timeout={500}>
                                                                {state => (
                                                                    <img
                                                                        style={{
                                                                            ...dIcon,
                                                                            ...tIcon[state]
                                                                        }}
                                                                        src="/icons/posts.svg" alt="" className="w-2/6 xl:w-1/2 xl:w-1/6" />
                                                                )}
                                                            </Transition>
                                                            {/* <p className="text-white font-bold text-md ml-4">Dashboard</p>
                                                             */}
                                                            <Transition in={isEntering} timeout={500}>
                                                                {state => (
                                                                    <div
                                                                        style={{
                                                                            ...dText,
                                                                            ...tText[state]
                                                                        }}
                                                                        className="h-auto overflow-hidden"
                                                                    >
                                                                        <p

                                                                            className="ml-3 font-semibold text-white">Posts
                                                                    </p>
                                                                    </div>
                                                                )}
                                                            </Transition>
                                                        </div>
                                                    )}
                                                </Transition>
                                                <Transition in={isEntering} timeout={500}>
                                                    {state => (
                                                        <div
                                                            style={{
                                                                ...dIconContainer,
                                                                ...tIconContainer[state]
                                                            }}
                                                            className="flex items-center mb-8 xl:mb-6 transition duration-200 hover:bg-green-700 rounded-r-full px-3 py-2 cursor-pointer">
                                                            <Transition in={isEntering} timeout={500}>
                                                                {state => (
                                                                    <img
                                                                        style={{
                                                                            ...dIcon,
                                                                            ...tIcon[state]
                                                                        }}
                                                                        src="/icons/project.svg" alt="" className="w-2/6 xl:w-1/2 xl:w-1/6" />
                                                                )}
                                                            </Transition>
                                                            {/* <p className="text-white font-bold text-md ml-4">Dashboard</p>
                                                             */}
                                                            <Transition in={isEntering} timeout={500}>
                                                                {state => (
                                                                    <div
                                                                        style={{
                                                                            ...dText,
                                                                            ...tText[state]
                                                                        }}
                                                                        className="h-auto overflow-hidden"
                                                                    >
                                                                        <p

                                                                            className="ml-3 font-semibold text-white">Projects
                                                                    </p>
                                                                    </div>
                                                                )}
                                                            </Transition>
                                                        </div>
                                                    )}
                                                </Transition>
                                                <Transition in={isEntering} timeout={500}>
                                                    {state => (
                                                        <div
                                                            style={{
                                                                ...dIconContainer,
                                                                ...tIconContainer[state]
                                                            }}
                                                            className="flex items-center mb-8 xl:mb-6 transition duration-200 hover:bg-green-700 rounded-r-full px-3 py-2 cursor-pointer">
                                                            <Transition in={isEntering} timeout={500}>
                                                                {state => (
                                                                    <img
                                                                        style={{
                                                                            ...dIcon,
                                                                            ...tIcon[state]
                                                                        }}
                                                                        src="/icons/achievements.svg" alt="" className="w-2/6 xl:w-1/2 xl:w-1/6" />
                                                                )}
                                                            </Transition>
                                                            {/* <p className="text-white font-bold text-md ml-4">Dashboard</p>
                                                             */}
                                                            <Transition in={isEntering} timeout={500}>
                                                                {state => (
                                                                    <div
                                                                        style={{
                                                                            ...dText,
                                                                            ...tText[state]
                                                                        }}
                                                                        className="h-auto overflow-hidden"
                                                                    >
                                                                        <p

                                                                            className="ml-3 font-semibold text-white">Achievements
                                                                    </p>
                                                                    </div>
                                                                )}
                                                            </Transition>
                                                        </div>
                                                    )}
                                                </Transition>
                                                <Transition in={isEntering} timeout={500}>
                                                    {state => (
                                                        <div
                                                            style={{
                                                                ...dIconContainer,
                                                                ...tIconContainer[state]
                                                            }}
                                                            className="group flex items-center mb-8 xl:mb-6 transition duration-200 hover:bg-green-700 rounded-r-full px-3 py-2 cursor-pointer">
                                                            <Transition in={isEntering} timeout={500}>
                                                                {state => (
                                                                    <img
                                                                        style={{
                                                                            ...dIcon,
                                                                            ...tIcon[state]
                                                                        }}
                                                                        src="/icons/users.svg" alt="" className="w-2/6 xl:w-1/2 xl:w-1/6" />
                                                                )}
                                                            </Transition>
                                                            <Transition in={isEntering} timeout={500}>
                                                                {state => (
                                                                    <div
                                                                        style={{
                                                                            ...dText,
                                                                            ...tText[state]
                                                                        }}
                                                                        className="h-auto overflow-hidden"
                                                                    >
                                                                        <p

                                                                            className="ml-3 font-semibold text-white">Users
                                                                    </p>
                                                                    </div>
                                                                )}
                                                            </Transition>
                                                        </div>
                                                    )}
                                                </Transition>
                                                <Transition in={isEntering} timeout={500}>
                                                    {state => (
                                                        <div
                                                            style={{
                                                                ...dIconContainer,
                                                                ...tIconContainer[state]
                                                            }}
                                                            className="flex items-center mb-8 xl:mb-6 transition duration-200 hover:bg-green-700 rounded-r-full px-3 py-2 cursor-pointer">
                                                            <Transition in={isEntering} timeout={500}>
                                                                {state => (
                                                                    <img
                                                                        style={{
                                                                            ...dIcon,
                                                                            ...tIcon[state]
                                                                        }}
                                                                        src="/icons/web_setting.svg" alt="" className="w-2/6 xl:w-1/2 xl:w-1/6" />
                                                                )}
                                                            </Transition>
                                                            {/* <p className="text-white font-bold text-md ml-4">Dashboard</p>
                                                             */}
                                                            <Transition in={isEntering} timeout={500}>
                                                                {state => (
                                                                    <div
                                                                        style={{
                                                                            ...dText,
                                                                            ...tText[state]
                                                                        }}
                                                                        className="h-auto overflow-hidden"
                                                                    >
                                                                        <p

                                                                            className="ml-3 font-semibold text-white">Web Setting
                                                                    </p>
                                                                    </div>
                                                                )}
                                                            </Transition>
                                                        </div>
                                                    )}
                                                </Transition>
                                            </div>
                                        )}
                                    </Transition>
                                </div>
                            )}
                        </Transition>

                        <div className="lg:flex w-0 h-full fixed bg-primary hidden lg:w-24 lg:block xl:hidden lg:flex-col pb-32 pt-8 xl:w-12 xl:w-48 z-10" onMouseEnter={() => setIsEntering(true)} onMouseLeave={() => setIsEntering(false)}>
                            <div>
                                <div className="flex flex-col items-center mb-8 xl:mb-10">
                                    <div className="rounded-full overflow-x-hidden w-12 h-12 border-2 border-yellow-500 bg-white xl:w-8 xl:h-8">
                                        <img src="/icons/person.svg" alt="" className="w-full" />
                                    </div>
                                </div>
                                <div className="flex flex-col items-center mb-8 xl:mb-10">
                                    <img src="/icons/dashboard.svg" alt="" className="w-2/6 xl:w-1/2" />
                                    <p className="text-white font-bold text-tiny mt-2 hover:text-yellow-500 xl:hidden">Dashboard</p>
                                </div>
                                <div className="flex flex-col items-center mb-8 xl:mb-10">
                                    <img src="/icons/posts.svg" alt="" className="w-2/6 xl:w-1/2" />
                                    <p className="text-white font-bold text-tiny mt-2 xl:hidden">Posts</p>
                                </div>
                                <div className="flex flex-col items-center mb-8 xl:mb-10">
                                    <img src="/icons/project.svg" alt="" className="w-2/6 xl:w-1/2" />
                                    <p className="text-white font-bold text-tiny mt-2 xl:hidden">Projects</p>
                                </div>
                                <div className="flex flex-col items-center mb-8 xl:mb-10">
                                    <img src="/icons/achievements.svg" alt="" className="w-2/6 xl:w-1/2" />
                                    <p className="text-white font-bold text-tiny mt-2 xl:hidden">Achievements</p>
                                </div>
                                <div className="flex flex-col items-center mb-8 xl:mb-10">
                                    <img src="/icons/users.svg" alt="" className="w-2/6 xl:w-1/2" />
                                    <p className="text-white font-bold text-tiny mt-2 xl:hidden">Users</p>
                                </div>
                                <div className="flex flex-col items-center mb-8 xl:mb-10">
                                    <img src="/icons/web_setting.svg" alt="" className="w-2/6 xl:w-1/2" />
                                    <p className="text-white font-bold text-tiny mt-2 xl:hidden">Web Settings</p>
                                </div>
                            </div>
                        </div>
                        <CSSTransition in={isEntering} timeout={500} classNames="off-canvas">
                            {/* <div className="lg:ml-24 bg-blue-400 w-full flex flex-col xl:ml-12"> */}
                            <div className="lg:ml-24 bg-transparent w-full flex flex-col xl:ml-12 px-5 pt-5 md:px-10 md:pt-10 lg:px-12 xl:px-16">
                                {props.children}
                            </div>
                        </CSSTransition>
                        {/* <Transition in={isEntering} timeout={500}>
                            {state => (
                                <div
                                    style={{
                                        ...dMainContent,
                                        ...tMainContent[state]
                                    }}
                                    className="lg:ml-24 bg-blue-400 w-full flex flex-col xl:ml-12">
                                    {props.children}
                                </div>
                            )}
                        </Transition> */}
                    </div>
                </div>
                <Footer />
            </div>
        </div>
    )
}

export default Main