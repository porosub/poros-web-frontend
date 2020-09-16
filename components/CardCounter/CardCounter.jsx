import React from 'react'

const CardCounter = (props) => {
    
    let containerClass = `rounded-xl px-8 py-3 bg-${props.containerColor}-${props.containerColorValue} text-${props.textColor}-${props.textColorValue} shadow-md`

    return (
        <div className={containerClass}>
            <p className="text-2xl md:text-4xl font-bold lg:text-5xl lg:mb-4">{props.total}</p>
            <p className="font-semibold lg:text-xl">Total {props.itemName}</p>
        </div>
    )
}

export default CardCounter;