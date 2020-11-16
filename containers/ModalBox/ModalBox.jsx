import React, {useEffect, useRef} from 'react'
import { CSSTransition } from 'react-transition-group'

const ModalBox = (props) => {
    const outside = useRef();

    const handleClickOutside = e => {
        if (outside.current) {
            if (outside.current.contains(e.target)) {
                return
            }

            props.triggerSetter(false)
        }
    }

    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside)

        return () => {
            document.removeEventListener("mousedown", handleClickOutside)
        }
    }, [])

    return (
        <CSSTransition in={props.ontrigger} timeout={500} classNames="modal">
            <div className="fixed w-full h-full bg-black bg-opacity-50 -mx-5 top-0 left-1p25 hidden override-post-slug">
                <div
                    ref={outside}
                    className="w-9/10 md:w-8/12 lg:w-7/12 xl:w-5/12 px-5 py-3 md:px-8 md:py-5 bg-white absolute top-45/100 left-1/2 transform -translate-y-1/2 -translate-x-1/2 rounded-lg">
                    {props.children}
                </div>
            </div>
        </CSSTransition>
    )
}

export default ModalBox