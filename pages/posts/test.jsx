import React from 'react'

import Main from '../../containers/Layouts/Main/Main'
import * as API from '../../apis/api';

const Posts = () => {
    const {posts, isLoading, isError} = API.testGetPosts('initokyen')
    console.log(posts)
    if (isLoading) return <p>Loading ...</p>
    if (isError) return <p>Error occured {isError}</p>
    return (
        <Main title="test posts">
            {posts.map(post => {
                return <p key={post.id}>{post.title}</p> 
            })}           
        </Main>
    )
}

export default Posts;