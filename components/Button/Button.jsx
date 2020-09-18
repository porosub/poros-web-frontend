import React from 'react'

const Button = (props) => {
    return (
        <button onClick={props.clicked} className="px-5 py-2 text-sm rounded-md bg-gradient-to-r from-green-800 via-green-700 to-green-400 text-white font-semibold outline-none">
            {props.text}
        </button>
    )
}

export default Button