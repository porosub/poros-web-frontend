import React, {useEffect, useRef} from 'react'
import { CSSTransition } from 'react-transition-group'

const ModalBox = (props) => {
    const outside = useRef();

    const handleClickOutside = e => {
        if (outside.current) {
            if (outside.current.contains(e.target)) {
                return
            }

            // console.log('test')
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
                    {/* <p className="text-sm text-justify mb-5 md:mb-10 md:text-base">Apa Anda yakin ingin menghapus "{deleteTitle}".</p>
                    <div className="w-full flex justify-between">
                        <button className="rounded-lg bg-green-500 px-5 py-1 md:py-3 w-2/6 font-semibold text-white">Ya</button>
                        <button className="rounded-lg bg-red-500 px-5 py-1 md:py-3 w-2/6 font-semibold text-white" onClick={() => setModalState(false)}>Tidak</button>
                    </div> */}
                    {props.children}
                </div>
            </div>
        </CSSTransition>
    )
}

export default ModalBox