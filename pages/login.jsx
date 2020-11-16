import React, { useState } from 'react'
import Head from "next/head";
import { useRouter } from 'next/router';
import { login } from '../apis/api';
import { useCookies } from 'react-cookie';
import { SyncLoader } from 'react-spinners';
import {CSSTransition} from 'react-transition-group';

const Login = () => {
    const [showPassword, toogleShowPassword] = useState(false)
    const [loginData, setLoginData] = useState({
        username: '',
        password: ''
    })
    const [loading, setLoading] = useState(false);
    const [loginFail, setLoginFail] = useState(false);
    const [loginSuccess, setLoginSuccess] = useState(false);
    const [cookie, setCookie] = useCookies()
    const router = useRouter()

    if(loginSuccess){
        router.push('/')
    }

    console.log('render login')
    
    const handleChange = e => {
        setLoginData({
            ...loginData,
            [e.target.name]: e.target.value,
        })
    }

    const handleLogin = async e => {
        e.preventDefault();
        setLoading(true)

        const loginRes = await login(loginData);
        console.log(loginRes)

        if (loginRes.status == "success") {
            // setCookie('token', loginRes.data.access_token, { path: '/', secure: process.env.NODE_ENV === 'production' })
            // setCookie('loggedUser', loginRes.data.user, { path: '/', secure: process.env.NODE_ENV === 'production' })
            setLoginSuccess(true)
            setCookie('token', loginRes.data.access_token, { path: '/', secure: true })
            setCookie('loggedUser', loginRes.data.user, { path: '/', secure: true })
        } else {
            setLoading(false);
            setLoginFail(true)

            setTimeout(() => {
                setLoginFail(false)
            }, 5000);
        }
    }

    return (
        <>
            <Head>
                <title>POROS Admin | Login</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className="h-screen w-full bg-login-img bg-white relative font-poros">
                <div className="absolute w-full transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 px-5">
                    <div className="flex flex-col items-center">
                        <h1 className="text-2xl font-bold text-green-800 mb-2 md:text-4xl xl:text-5xl xl:mb-2">Poros Web Admin</h1>
                        <form className="flex flex-col w-full items-center mb-6 xl:mb-8 relative" onSubmit={handleLogin}>
                            <CSSTransition in={loginFail} timeout={500} classNames="login-fail-card" mountOnEnter>
                                <div className="bg-red-200 rounded-md text-red-700 flex w-5/6 md:w-3/6 xl:w-3/12 text-xs md:text-sm justify-center px-5 py-3 overflow-hidden mb-3 absolute top-0">
                                    <p>Username or password is incorrect!"</p>
                                </div>
                            </CSSTransition>
                            <div className="flex w-5/6 md:w-3/6 xl:w-3/12 relative mb-3 mt-12 md:mt-12 md:mb-5 xl:mt-14">
                                <img src="/icons/id-card.svg" alt="" className="absolute w-5 md:w-6 top-1/2 left-1p5 transform -translate-x-1/2 -translate-y-1/2" />
                                <input type="text"
                                    className="w-full h-10 pl-12 rounded-lg border-0 outline-none px-5 md:py-6 border-gray-800 border-2 shadow-md transition-all duration-500 focus:border-green-500"
                                    placeholder="Username"
                                    name="username"
                                    onChange={handleChange}
                                    value={loginData.username} />
                            </div>
                            <div className="flex w-5/6 md:w-3/6 xl:w-3/12 relative">
                                <img src="/icons/password.svg" alt="" className="absolute w-5 md:w-6 top-1/2 left-1p5 transform -translate-x-1/2 -translate-y-1/2" />
                                <input type={showPassword ? "text" : "password"}
                                    placeholder="Password"
                                    name="password"
                                    onChange={handleChange}
                                    value={loginData.password}
                                    className="w-full h-10 pl-12 pr-16 rounded-lg border-0 outline-none px-5 border-gray-800 border-2 md:py-6  shadow-md transition-all duration-500 focus:border-green-500" />
                                <img src={showPassword ? "/icons/hide.svg" : "/icons/eye.svg"} alt=""
                                    onClick={() => toogleShowPassword(prevState => !prevState)}
                                    className="cursor-pointer absolute w-6 top-1/2 right-0 transform -translate-x-1/2 -translate-y-1/2 md:w-8" />
                            </div>
                            <button className="bg-gradient-to-r from-green-900 to-green-500 text-white text-lg px-10 py-2 rounded-xl
                        shadow-md font-semibold mt-10 xl:mt-8">{loading ? <SyncLoader
                                    size={7}
                                    color={"#fff"}
                                    loading={loading}
                                /> : "Sign Up"}</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login