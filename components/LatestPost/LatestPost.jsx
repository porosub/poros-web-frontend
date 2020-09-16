import React from 'react'

const LatestPost = (props) => {
    return (
        <div>
            <p className="mb-4 font-semibold md:mb-6 md:text-lg lg:text-xl">{props.title}</p>
            <div className="flex w-full pb-3">
                <div className="w-1/3">
                    <div className="flex justify-center items-center rounded-lg overflow-hidden w-full">
                        <img src={props.img} alt="w-full"/>
                    </div>
                </div>
                <div className="w-2/3 ml-4 md:ml-8 h-48 overflow-y-hidden relative">
                    <div className="bg-gradient-to-t from-white h-full w-full absolute top-0 left-0">
                    </div>
                    <p className="text-xs text-justify lg:text-base md:text-sm ">{props.desc}</p>
                </div>
            </div>   
        </div>
    )
}

export default LatestPost