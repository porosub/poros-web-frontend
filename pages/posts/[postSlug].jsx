import React, { useRef, useEffect, useState } from 'react'
import { CSSTransition } from 'react-transition-group'
import Interweave from 'interweave'
import Main from "../../containers/Layouts/Main/Main";
import PageName from '../../components/PageName/PageName';
import moment from 'moment'

const dummy = {
    author: {
        username: "8tml",
        usrImg: "/icons/person.svg"
    },
    createdAt: "2020-09-08 20:59:32",
    updatedAt: "2020-09-18 20:59:32",
    title: "10 useful HTML5 features, you may not be using",
    content: `
    <p>I thought I simply bla bla bla...</p>

<h2>1. Its Slow<br>
</h2>
<div class="se-component se-image-container __se__float-none" style="width: 75%;" contenteditable="false">
    <figure style="margin: 0px; width: 100%;">
        <a href="https://res.cloudinary.com/practicaldev/image/fetch/s--T0bxys9T--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/i/61wy5nckh5bqdcxn307q.png" target="" data-image-link="image"><img src="https://res.cloudinary.com/practicaldev/image/fetch/s--T0bxys9T--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/i/61wy5nckh5bqdcxn307q.png" alt="" data-image-link="https://res.cloudinary.com/practicaldev/image/fetch/s--T0bxys9T--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/i/61wy5nckh5bqdcxn307q.png" data-proportion="true" data-align="none" data-index="0" data-file-name="61wy5nckh5bqdcxn307q.png" data-file-size="0" origin-size="880,373" data-origin="," data-size="75%," data-rotate="" data-rotatex="" data-rotatey="" style="width: 100%;" data-percentage="75,">
</a>
    </figure>
</div>
<p><br>
</p>

<p>test</p>

<p><br>
</p>

<p>53% of mobile users abandon websites that take longer than 3 seconds to load. For every additional second a page takes to load, 10 percent of users leave,&nbsp;<a href="https://dev.to/wgolledge/an-overview-of-performance-in-javascript-applications-2obb" target="">Performance is user experince</a>.</p>

<p><br>
</p>

<p>​<a href="https://aerotwist.com/blog/react-plus-performance-equals-what/" target="">Also read this</a><br>
</p>

`,
    tags: ["html", "webdev", "newbie"]
}

const PostDetail = () => {
    const [modalState, setModalState] = useState(false)
    const outside = useRef();

    const handleClickOutside = e => {
        if (outside.current) {
            if (outside.current.contains(e.target)) {
                return
            }

            console.log('test')
            setModalState(false)
        }
    }

    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside)

        return () => {
            document.removeEventListener("mousedown", handleClickOutside)
        }
    }, [])

    return (
        <Main title="Post Detail">
            <div className="relative">
                <div className="mb-10">
                    <PageName pageName="Post Detail" />
                </div>
                <div className="w-full flex justify-end mb-4">
                    <button className="px-5 py-2 text-sm rounded-md bg-gradient-to-r from-green-800 via-green-700 to-green-400 text-white font-semibold outline-none mr-4">Edit</button>
                    <button className="px-5 py-2 text-sm rounded-md bg-gradient-to-r from-red-700 via-red-500 to-red-300 text-white font-semibold outline-none" onClick={() => setModalState(true)}>Delete</button>
                </div>
                <div className="xl:flex xl:justify-center">
                    <div className="xl:w-8/12">
                        <div className="w-full bg-gray-200 rounded-lg px-3 py-3 text-sm shadow-lg border-2 border-black mb-10 md:px-8 md:py-6">
                            <p className="text-2xl font-bold mb-4 md:text-3xl md:mb-8">{dummy.title}</p>
                            <div className="flex text-xs flex-wrap mb-2 md:text-sm">
                                {/* <p className="px-3 py-1 bg-gray-300 mr-2 mb-2 rounded-2xl">#webdev</p>*/}
                                {
                                    dummy.tags.map((t, idx) => {
                                        return <p key={idx} className="px-3 py-1 bg-gray-400 mr-2 mb-2 rounded-2xl md:mr-4">#{t}</p>
                                    })
                                }
                            </div>
                            <div className="mb-16 md:flex items-center">
                                <div className="flex items-center ml-2 mb-2 md:mb-0 md:mr-4">
                                    <div className="flex justify-center rounded-full border-2 border-black overflow-hidden w-12/100 md:w-10">
                                        <img src={dummy.author.usrImg} alt={dummy.author.username} />
                                    </div>
                                    <p className="ml-2">{dummy.author.username}</p>
                                </div>
                                <div className="flex text-xs ml-2 md:text-sm">
                                    <p>{moment(dummy.createdAt).format('MMM DD, yyyy')} &nbsp;</p>
                                    {dummy.updatedAt ?
                                        <p><em>Updated on {moment(dummy.updatedAt).format('MMM DD, yyyy')}</em></p>
                                        : null
                                    }
                                </div>
                            </div>
                            <div id="wysiwyg-content" className="md:text-base">
                                <Interweave content={dummy.content} />
                            </div>
                        </div>
                    </div>
                </div>
                <CSSTransition in={modalState} timeout={500} classNames="modal">
                    <div className="fixed w-full h-full bg-black bg-opacity-50 -mx-5 top-0 left-1p25 hidden override-post-slug">
                            <div
                                ref={outside}
                                className="w-9/10 md:w-8/12 lg:w-7/12 xl:w-5/12 px-5 py-3 md:px-8 md:py-5 bg-white absolute top-45/100 left-1/2 transform -translate-y-1/2 -translate-x-1/2 rounded-lg">
                                <p className="text-sm text-justify mb-5 md:mb-10 md:text-base">Apa Anda yakin ingin menghapus "{dummy.title}".</p>
                                <div className="w-full flex justify-between">
                                    <button className="rounded-lg bg-green-500 px-5 py-1 md:py-3 w-2/6 font-semibold text-white">Ya</button>
                                    <button className="rounded-lg bg-red-500 px-5 py-1 md:py-3 w-2/6 font-semibold text-white" onClick={() => setModalState(false)}>Tidak</button>
                                </div>
                            </div>
                    </div>
                </CSSTransition>

                {/* {
                    modalState ?
                        <div className="fixed w-full h-full bg-black bg-opacity-50 -mx-5 top-0 left-1p25">
                            <CSSTransition in={modalState} timeout={500} classNames="modal-overlay">
                                <div
                                    ref={outside}
                                    className="w-9/10 md:w-8/12 lg:w-7/12 xl:w-5/12 px-5 py-3 md:px-8 md:py-5 bg-white absolute top-45/100 left-1/2 transform -translate-y-1/2 -translate-x-1/2 rounded-lg">
                                    <p className="text-sm text-justify mb-5 md:mb-10 md:text-base">Apa Anda yakin ingin menghapus "{dummy.title}".</p>
                                    <div className="w-full flex justify-between">
                                        <button className="rounded-lg bg-green-500 px-5 py-1 md:py-3 w-2/6 font-semibold text-white">Ya</button>
                                        <button className="rounded-lg bg-red-500 px-5 py-1 md:py-3 w-2/6 font-semibold text-white" onClick={() => setModalState(false)}>Tidak</button>
                                    </div>
                                </div>
                            </CSSTransition>
                        </div>
                        : null
                } */}
            </div>
        </Main>
    )
}

export default PostDetail