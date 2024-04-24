

// const getAllPosts = async () => {
//    const result = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=10");
//    return result.json();
// };

// export default getAllPosts;


import axios from "axios";
const getAllPosts = async () => {
  try {
      const response = await axios.get("https://jsonplaceholder.typicode.com/posts?_limit=10");
      return response.data;
  } catch (error) {
    throw new Error(error)
  }
};

export default getAllPosts;