import React from 'react'

const PageName = (props) => {
    return (
        <div>
            <h1 className="text-4xl font-bold text-primary md:text-5xl">{props.pageName}</h1>
            {props.inclUser ? <p className="text-gray-700 md:text-lg">{`Welcome back, ${props.username}`}!</p> : null}
        </div>
    )
}

export default PageName;