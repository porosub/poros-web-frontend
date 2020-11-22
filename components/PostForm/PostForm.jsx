import React, { useState } from 'react'
import SunEditor, { buttonList } from 'suneditor-react'
import Button from '../../components/Button/Button'

const PostForm = (props) => {

    const [formContent, setFormContent] = useState({ title: "", postType: "2" });
    const [editorContent, setEditorContent] = useState(props.initContent ? props.initContent : "")
    // const [title, setTitle] = useState(props.initTitle ? props.initTitle : "" )
    // const [content, setContent] = useState(props.initContent ? props.initContent : "")

    const handleSubmit = (e) => {
        e.preventDefault();
        props.submitted({title: formContent.title, content: editorContent, postType: formContent.postType})
    }

    const handleChange = e => {
        setFormContent({
            ...formContent,
            [e.target.name]: e.target.value,
        })
    }

    const handleEditorChange = content => {
        setEditorContent(content)
    }

    return (
        <form className="w-full bg-gray-200 px-5 py-8 shadow-lg rounded-2xl border-black border-2" onSubmit={handleSubmit}>
            <div className="mb-5 md:mx-4">
                <p className="text-2xl font-semibold text-primary mb-2 ml-3">Title</p>
                {/* <input type="text" className="w-full rounded-xl px-3 py-2 border-black border-2" required name="titleValue" value={inputState.titleValue} onChange={handleTitleChange} /> */}
                <input type="text" className="w-full rounded-xl px-3 py-2 border-black border-2" required name="title" value={formContent.title} onChange={handleChange} />
            </div>
            <div className="mb-10 md:mx-4 mt-10">
                <label className="text-2xl font-semibold text-primary mb-2 ml-3" htmlFor="postT">Post Type: </label>
                <select name="postType" id="postT" value={formContent.postType} onChange={handleChange} className="px-3 py-2 rounded-md">
                    {
                        props.postTypes.map(pt => {
                            return <option key={pt.id} value={`${pt.id}`}>{pt.name}</option>
                        })
                    }
                </select>
            </div>
            <div className="mb-10">
                <p className="text-2xl font-semibold text-primary mb-2 ml-3 md:ml-6">Content</p>
                <div className="flex justify-center mr-2 md:mr-0">
                    <SunEditor lang="id" placeholder="Isi Post ..." setOptions={{
                        buttonList: buttonList.complex
                    }}
                        name="content"
                        width="100%"
                        height="27rem"
                        setDefaultStyle="font-family: 'Montserrat'; border: 2px solid black;"
                        // setContents={inputState.contentValue}
                        setContents={editorContent}
                        onChange={handleEditorChange}
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

