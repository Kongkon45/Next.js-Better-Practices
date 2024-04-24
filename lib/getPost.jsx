

// const getPost = async (id) => {
//     const result = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
//    return result.json();
// };

// export default getPost;

import axios from "axios";
const getPost = async (id) => {
    try {
        const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
        return response.data;
    } catch (error) {
        throw new Error(error)
    }
};

export default getPost;