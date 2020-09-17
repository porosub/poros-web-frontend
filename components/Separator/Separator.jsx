import React from 'react'

const Separator = (props) => {
    return (
        <div className="flex items-center">
            <div className="pr-3 text-gray-600">
                <p className="uppercase text-sm md:text-base">{props.text}</p>
            </div>
            <div className="w-full h-2px roundeed-lg bg-gray-600"></div>
        </div>
    )
}

export default Separator;