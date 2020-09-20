import React, { useState } from 'react'
import SunEditor, { buttonList } from 'suneditor-react'
import Button from '../../components/Button/Button'

const PostForm = (props) => {

    const [title, setTitle] = useState(props.initTitle ? props.initTitle : "" )
    const [content, setContent] = useState(props.initContent ? props.initContent : "")

    const handleSubmit = (e) => {
        e.preventDefault();
        props.submitted({title, content})
    }

    const handleTitleChange = (e) => {
        setTitle(e.target.value)
    }

    const handleContentChange = (e) => {
        setContent(e)
    }

    return (
        <form className="w-full bg-gray-200 px-5 py-8 shadow-lg rounded-2xl border-black border-2" onSubmit={handleSubmit}>
            <div className="mb-5 md:mx-4">
                <p className="text-2xl font-semibold text-primary mb-2 ml-3">Title</p>
                {/* <input type="text" className="w-full rounded-xl px-3 py-2 border-black border-2" required name="titleValue" value={inputState.titleValue} onChange={handleTitleChange} /> */}
                <input type="text" className="w-full rounded-xl px-3 py-2 border-black border-2" required name="titleValue" value={title} onChange={handleTitleChange} />
            </div>
            <div className="mb-10">
                <p className="text-2xl font-semibold text-primary mb-2 ml-3 md:ml-6">Content</p>
                <div className="flex justify-center mr-2 md:mr-0">
                    <SunEditor lang="id" placeholder="Isi Post ..." setOptions={{
                        buttonList: buttonList.complex
                    }}
                        name="contentValue"
                        width="100%"
                        height="27rem"
                        setDefaultStyle="font-family: 'Montserrat'; border: 2px solid black;"
                        // setContents={inputState.contentValue}
                        setContents={content}
                        onChange={handleContentChange}
                    />
                </div>
            </div>
            <div className="flex justify-end outline-none md:pr-4">
                <Button text="Submit" />
            </div>
        </form>
    )
}

export default PostForm

