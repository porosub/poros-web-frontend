import React from 'react'
import Main from '../containers/Layouts/Main/Main'
import PageName from '../components/PageName/PageName'
import Button from '../components/Button/Button'
import Separator from '../components/Separator/Separator'
import PostCard from '../components/PostCard/PostCard'

const dummy = [
    {
        id: 123,
        userImg: "/icons/person.svg",
        username: "King Kringe",
        created: "2020-09-15 20:59:32",
        title: "How to appreciate people (for dummies)",
        tag: ["selfdevelopment", "respect", "attitude"]
    },
    {
        id: 234,
        userImg: "/img/reactjs.png",
        username: "Fake Fam",
        created: "2020-08-06 20:59:32",
        title: "Why you should learn to read",
        tag: ["selfdevelopment", "improvement", "messages"]
    },
    {
        id: 345,
        userImg: "/img/ternyataaa.png",
        username: "Takumi",
        created: "2019-12-25 20:59:32",
        title: "Learn how asynchronous javascript works",
        tag: ["development", "javascript", "webdev"]
    }
]

const CreatePost = () => {
    return (
        <Main title="Dashboard">
            <div className="mb-6">
                <PageName pageName="Posts" />
            </div>
            <div className="flex w-full justify-end mb-5">
                <Button text="Create New Post" />
            </div>
            <div className="mb-5">
                <Separator text="overview" />
            </div>
            {/* <div className="mb-10 xl:inline-grid xl:grid-rows-1 xl:grid-cols-2"> */}
            <div className="mb-10 xl:flex xl:flex-wrap xl:justify-between xl:px-32">
                {/* <PostCard userImg="/icons/person.svg" username="King Kringe" created="2020-09-15 20:59:32" title="How to appreciate people (for dummies)" tag="selfdevelopment" />
                <PostCard userImg="/icons/person.svg" username="King Kringe" created="2020-09-15 20:59:32" title="aku adalah anak gemabala selalu riang serta gembira" tag="selfdevelopment" />
                <PostCard userImg="/icons/person.svg" username="King Kringe" created="2020-09-15 20:59:32" title="How to appreciate people (for dummies)" tag="selfdevelopment" /> */}
                {dummy.map(post => {
                   return <PostCard key={post.id} userImg={post.userImg} username={post.username} created={post.created} title={post.title} tag={post.tag} /> 
                })}
            </div>
        </Main>
    )
}

export default CreatePost;