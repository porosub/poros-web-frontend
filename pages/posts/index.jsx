import React, { useState } from 'react'
import { useRouter } from 'next/router'
import { useCookies } from 'react-cookie'
import * as API from '../../apis/api'

import Main from '../../containers/Layouts/Main/Main'
import PageName from '../../components/PageName/PageName'
import Button from '../../components/Button/Button'
import Separator from '../../components/Separator/Separator'
import PostCard from '../../components/PostCard/PostCard'
import DeleteConfirmModal from '../../components/ModalContent/DeleteConfirmModal/DeleteConfirmModal'

const Posts = () => {
    const [modalState, setModalState] = useState({active: false, postId:-1, postTitle: ""})
    // const [deleteTitle, setDeleteTitle] = useState('')
    
    const router = useRouter()
    const [cookie, setCookie] = useCookies();
    const { myprofile: myProfile, isLoading: profileLoading, isError: profileError } = API.myProfile(cookie.token)
    const { posts, isLoading: postsLoading, isError: postsError } = API.getPosts(cookie.token)

    if (profileLoading || postsLoading) return <p>Loading...</p>

    if (profileError) {
        if (profileError.code == 401) {
            router.replace('/login', '/login')
            return <></>
        }
    }

    const handleDeletePostModal = (postId, postTitle) => {
        setModalState({active: true, postId, postTitle})
    }

    const handleDeletePost = async (postId) => {
        const deletePostRes = await API.deletePost(postId, cookie.token);
        if(deletePostRes.status == 'error'){
            router.replace("/login", "/login")
        }
        API.mutatePosts(); //trigger berguna untuk revalidasi (mengirim ulang request) tanpa reload
        setModalState({...modalState, active: false})
    }

    return (
        <Main title="Posts" userData={myProfile.data}>
            <div className="mb-6">
                <PageName pageName="Posts" />
            </div>
            <div className="flex w-full justify-end mb-5">
                <Button text="Create New Post" clicked={() => router.push('/create-post')} />
            </div>
            <div className="mb-5">
                <Separator text="overview" />
            </div>
            {/* <div className="mb-10 xl:inline-grid xl:grid-rows-1 xl:grid-cols-2"> */}
            <div className="mb-10 xl:flex xl:flex-wrap xl:justify-between xl:px-32">
                {/* {dummy.map(post => {
                    return <PostCard key={post.id} postData={post} ondelete={() => handleDeletePost(post.title)} />
                })} */}
                {posts.data.map(post => {
                    return <PostCard key={post.ID} postData={post} 
                        ondeletemodal={() => handleDeletePostModal(post.ID, post.title)} 
                     />
                })}
            </div>
            <DeleteConfirmModal todelete={modalState.postTitle} trigger={modalState.active} setTrigger={setModalState}
                confirmDeletion={() => handleDeletePost(modalState.postId)}/>
        </Main>
    )
}

export default Posts;