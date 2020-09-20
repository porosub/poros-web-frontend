import React from 'react'

const Footer = (props) => {
    return (
        <footer className="bg-black flex w-full py-3 px-5 justify-between items-center md:py-4 md:px-6 lg:z-10 z-1">
            <p className="text-white font-semibold inline-block">&copy; POROS 2020</p>
            <div className="flex items-center">
                <div className="w-6 mr-4 cursor-pointer">
                    <img src="https://static.ivqonsanada.com/poros/img/line-brands.svg" alt="" className="w-full"/>
                </div>
                <div className="w-6 mr-4 cursor-pointer">
                    <img src="https://static.ivqonsanada.com/poros/img/instagram-brands.svg" alt="" className="w-full"/>
                </div>
                <div className="w-8 cursor-pointer">
                    <img src="https://static.ivqonsanada.com/poros/img/youtube-brands.svg" alt="" className="w-full"/>
                </div>
            </div>
        </footer>
    )
}

export default Footer