///src/api/api.js
import axiosInstance from './index'

const axios = axiosInstance

//后端提供url
export const getBlog = () => {return axios.get(`http://localhost:8000/api/books/`)}

export const submitBlog = (Blog) => {return axios.post(`http://localhost:8000/api/books/`,
  {Blog})}
