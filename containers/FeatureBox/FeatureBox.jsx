import React from 'react'

const FeatureBox = (props) => {
    return (
        <div className="overflow-x-hidden rounded-xl flex border-2 border-gray-700 flex flex-col xl:h-373p">
            <div className="bg-gray-300 px-5 w-full py-3 border-b-2 border-gray-700 md:py-5 md:px-8">
                <p className="text-lg md:text-xl font-bold text-green-800">{props.featureTitle}</p>
            </div>
            <div className="px-5 w-full py-3 md:py-5 md:px-8">
                {props.children}
            </div>
        </div>
    )
}

export default FeatureBox