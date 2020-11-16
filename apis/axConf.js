import axios from 'axios';

export const instance = axios.create({
    baseURL: "https://cors-anywhere.herokuapp.com/https://poros-backend-test.herokuapp.com/",
    headers: {}
})

export const testInstance = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com/",
    headers: {}
})

export const fetcher = async url => {
    const res = await instance.get(url, {validateStatus: false});
    if(res.data.status == 'error'){
        const error= new Error()
        error.status = res.data.status
        error.code = res.status
        error.message = res.data.message
        throw error
    }
    return res.data
}





// ################# TESTING ONLY #############
export const testFetch = async url => {
    const res = await testInstance.get(url);
    return res.data;
}

export const testPost = async (url, postData, config) => {
    const res = await testInstance.post(url, postData, config);
    return res.data
}