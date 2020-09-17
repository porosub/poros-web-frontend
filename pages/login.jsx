import React, {useState} from 'react'
import Head from "next/head";

const Login = () => {
    const [showPassword, toogleShowPassword] = useState(false)

    return (
        <>
            <Head>
                <title>POROS Admin | Login</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className="h-screen w-full bg-login-img bg-white relative font-poros">
                <div className="absolute w-full transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 px-5">
                    <div className="flex flex-col items-center">
                        <h1 className="text-2xl font-bold text-green-800 mb-8 md:text-4xl xl:text-5xl xl:mb-12">Poros Web Admin</h1>
                        <form action="POST" className="flex flex-col w-full items-center mb-6 xl:mb-8">
                            <div className="flex w-5/6 md:w-3/6 xl:w-3/12 relative mb-3 md:mb-5">
                                <img src="/icons/id-card.svg" alt="" className="absolute w-5 md:w-6 top-1/2 left-1p5 transform -translate-x-1/2 -translate-y-1/2"/>
                                <input type="text" className="w-full h-10 pl-12 rounded-lg border-0 outline-none px-5 md:py-6 border-gray-800 border-2 shadow-md transition-all duration-500 focus:border-green-500"
                                    placeholder="Username"/>
                            </div>
                            <div className="flex w-5/6 md:w-3/6 xl:w-3/12 relative">
                                <img src="/icons/password.svg" alt="" className="absolute w-5 md:w-6 top-1/2 left-1p5 transform -translate-x-1/2 -translate-y-1/2" />
                                <input type={showPassword ? "text" : "password"}
                                    placeholder="Password"
                                    className="w-full h-10 pl-12 pr-16 rounded-lg border-0 outline-none px-5 border-gray-800 border-2 md:py-6  shadow-md transition-all duration-500 focus:border-green-500"/>
                                <img src={showPassword ? "/icons/hide.svg" : "/icons/eye.svg"} alt="" 
                                    onClick={() => toogleShowPassword(prevState => !prevState)}
                                    className="cursor-pointer absolute w-6 top-1/2 right-0 transform -translate-x-1/2 -translate-y-1/2 md:w-8"/>
                            </div>
                        </form>
                        <button className="bg-gradient-to-r from-green-900 to-green-500 text-white text-lg px-10 py-2 rounded-xl
                        shadow-md font-semibold">Sign In</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login