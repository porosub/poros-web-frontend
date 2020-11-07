import React from 'react'
import ModalBox from '../../../containers/ModalBox/ModalBox'
const DeleteConfirmModal = (props) => {
    return (
        <ModalBox ontrigger= {props.trigger} triggerSetter={props.setTrigger}>
            <p className="text-sm text-justify mb-5 md:mb-10 md:text-base">Apa Anda yakin ingin menghapus "{props.todelete}".</p>
            <div className="w-full flex justify-between">
                <button className="rounded-lg bg-green-500 px-5 py-1 md:py-3 w-2/6 font-semibold text-white">Ya</button>
                <button className="rounded-lg bg-red-500 px-5 py-1 md:py-3 w-2/6 font-semibold text-white" onClick={() => props.setTrigger(false)}>Tidak</button>
            </div>
        </ModalBox>
    )
}

export default DeleteConfirmModal