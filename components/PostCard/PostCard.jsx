import React from 'react'
import moment from 'moment'

const PostCard = (props) => {
    return (
        <div className="w-full bg-gray-200 flex flex-col items-center px-4 py-3 rounded-lg shadow-lg border-2 border-gray-600 mb-5">
            {/* <div> */}
            <div className="flex justify-start items-center w-full mb-5">
                <div className="w-10 h-10 rounded-full mr-2 border-2 border-black overflow-hidden bg-white flex justify-center items-center">
                    <img src={props.userImg} alt={props.username} className="w-full" />
                </div>
                <div>
                    <p className="text-sm">{props.username}</p>
                    <p className="text-xs">{moment(props.created).fromNow()}</p>
                </div>
            </div>
            {/* </div> */}
            <div className="md:w-full md:pl-12">
                <div>
                    <p className="text-xl font-bold md:text-2xl">{props.title}</p>
                </div>
                <div className="flex text-xs flex-wrap mt-4 mb-5">
                    {
                        props.tag.map((t, idx) => {
                            return (
                                <p key={idx} className="mr-2 px-3 mb-2 bg-gray-400 rounded-2xl">#{t}</p>
                            )
                        })
                        // console.log(props.tag)
                    }
                    {/* <p className="mr-2 px-3 mb-2 bg-gray-400 rounded-2xl">#{props.tag}</p>
                    <p className="mr-2 px-3 mb-2 bg-gray-400 rounded-2xl">#flutter</p>
                    <p className="mr-2 px-3 mb-2 bg-gray-400 rounded-2xl">#dart</p>
                    <p className="mr-2 px-3 mb-2 bg-gray-400 rounded-2xl">#ios</p> */}
                </div>
                <div className="w-full flex justify-end">
                    <button className="px-4 py-1 bg-green-500 rounded-lg font-semibold text-white mr-3">Edit</button>
                    <button className="px-4 py-1 bg-red-500 rounded-lg font-semibold text-white">Delete</button>
                </div>
            </div>
        </div>
    )
}

export default PostCard