import useSWR from 'swr';
import * as Conf from './axConf';


// #############################################
// ###             AUTH SECTOR               ###
// #############################################

// GET METHOD:

export function myProfile(token) {
    Conf.instance.defaults.headers.Authorization = `Bearer ${token}`
    const { data, error } = useSWR('/auth/me', Conf.fetcher)
    return {
        myprofile: data,
        isLoading: !error && !data,
        isError: error
    }
}

export function logout() {
    const { data, error } = useSWR('/auth/logout', Conf.fetcher)
    return {
        logout: data,
        isLoading: !error && !data,
        isError: error
    }
}

// POST METHOD:

export async function login(loginData) {
    const res = await Conf.instance.post('/auth/login', loginData, {validateStatus: false});
    return res.data
}


export function getUsers() {
    const { data, error } = useSWR('/users', Conf.fetcher)
    return {
        users: data,
        isLoading: !error && !data,
        isError: error
    }
}

export function getUser(id) {
    const { data, error } = useSWR(`/users/${id}`, Conf.fetcher)
    return {
        user: data,
        isLoading: !error && !data,
        isError: error
    }
}

export function getUserTypes() {
    const { data, error } = useSWR(`/usertype`, Conf.fetcher)
    return {
        usertypes: data,
        isLoading: !error && !data,
        isError: error
    }
}

export function getUserType(id) {
    const { data, error } = useSWR(`/usertype/${id}`, Conf.fetcher)
    return {
        usertype: data,
        isLoading: !error && !data,
        isError: error
    }
}

// ############# TAGS SECTOR ############

export function getTags() {
    const { data, error } = useSWR('/tags', Conf.fetcher)
    return {
        tags: data,
        isLoading: !error && !data,
        isError: error
    }
}

export function getTag(id) {
    const { data, error } = useSWR(`/tags/${id}`, Conf.fetcher)
    return {
        tag: data,
        isLoading: !error && !data,
        isError: error
    }
}

// ############# POSTTYPE SECTOR ############
export function getPostTypes() {
    const { data, error } = useSWR('/posttypes', Conf.fetcher)
    return {
        posttypes: data,
        isLoading: !error && !data,
        isError: error
    }
}

export function getPostType(id) {
    const { data, error } = useSWR(`/posttypes/${id}`, Conf.fetcher)
    return {
        posttype: data,
        isLoading: !error && !data,
        isError: error
    }
}


// ############# POSTS SECTOR ############
export function getPosts() {
    const { data, error } = useSWR('/posts', Conf.fetcher)
    return {
        posts: data,
        isLoading: !error && !data,
        isError: error
    }
}

export function getPost(id) {
    const { data, error } = useSWR(`/posts/${id}`, Conf.fetcher)
    return {
        post: data,
        isLoading: !error && !data,
        isError: error
    }
}

// ############# TESTING ONLY ############
export function testGetPosts(token) {
    Conf.testInstance.defaults.headers.Authorization = `Bearer ${token}`
    const { data, error } = useSWR('/posts', Conf.testFetch)
    return {
        posts: data,
        isLoading: !error && !data,
        isError: error
    }
}