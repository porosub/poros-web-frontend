import React from 'react'
// import SunEditor, { buttonList } from 'suneditor-react'
import Main from '../containers/Layouts/Main/Main'
import PageName from '../components/PageName/PageName'
// import Button from '../components/Button/Button'
import PostForm from '../components/PostForm/PostForm'
import {useRouter} from 'next/router'
import { useCookies } from 'react-cookie';
import * as API from '../apis/api';


const CreatePost = () => {
    const router = useRouter()

    const [cookie, setCookie] = useCookies();
    const { myprofile: myProfile, isLoading: profileLoading, isError: profileError } = API.myProfile(cookie.token)
    const { posttypes: postTypes, isLoading: postTypesLoading, isError: postTypesError } = API.getPostTypes(cookie.token)

    if (profileLoading || postTypesLoading) return <p>Loading...</p>

    if (profileError) {
        if (profileError.code == 401) {
            router.replace('/login', '/login')
            return <></>
        }
    }

    const handleSubmit = async inputVal => {
        console.log(inputVal)
        console.log(myProfile.data.id)
        
        var postBody = new FormData();
        postBody.append("title", inputVal.title);
        postBody.append("content", inputVal.content);
        postBody.append("user_id", myProfile.data.id)
        postBody.append("post_type_id", inputVal.postType)
        // postBody.append("images", "")

        const postRes = await API.postPost(postBody, cookie.token)
        if(postRes.status == 'error'){
            router.replace("/login", "/login")
            return <></>
        }
        
        router.push("/posts")
    }

    return (
        <Main title="Dashboard" userData={myProfile.data}>
            <div className="mb-6 xl:mb-16">
                <PageName pageName="Create Post" />
            </div>
            <div className="flex justify-center">
                <div className="flex justify-center mb-12 xl:w-4/6">
                    {/* <form className="w-full bg-gray-200 px-5 py-8 shadow-lg rounded-2xl border-black border-2">
                        <div className="mb-5 md:mx-4">
                            <p className="text-2xl font-semibold text-primary mb-2 ml-3">Title</p>
                            <input type="text" className="w-full rounded-xl px-3 py-2 border-black border-2" required />
                        </div>
                        <div className="mb-10">
                            <p className="text-2xl font-semibold text-primary mb-2 ml-3 md:ml-6">Content</p>
                            <div className="flex justify-center mr-2 md:mr-0">
                                <SunEditor lang="id" placeholder="Isi Post ..." setOptions={{
                                    buttonList: buttonList.complex
                                }} 
                                width="100%"
                                height="27rem"
                                setDefaultStyle="font-family: 'Montserrat';" />
                            </div>
                        </div>
                        <div className="flex justify-end outline-none md:pr-4">
                            <Button text="Submit" clicked={handleSubmit} />
                        </div>
                    </form> */}
                    <PostForm submitted={handleSubmit} postTypes={postTypes.data}/>
                </div>
            </div>
        </Main>
    )
}

export default CreatePost;