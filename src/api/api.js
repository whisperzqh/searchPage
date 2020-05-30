import axiosInstance from './index'

const axios = axiosInstance

// 登录
export const postUser = (username, password) => {
  return axios.post('http://127.0.0.1:8000/login/', {
    'username': username, 'password': password
  })
}

// 注册
export const postNewUser = (username, password, pwd2, tel, email) => {
  return axios.post('http://127.0.0.1:8000/users/', {
    'username': username, 'password': password, 'pwd2': pwd2, 'tel': tel, 'email': email
  })
}

// 修改个人信息
/* export const changeUserInfo = () => {
  return axios.post('http://127.0.0.1:8000/users', {
})
} */
// 获取个人信息 后端少了一个头像、关注数、粉丝数
export const getUserInfo = () => {
  return axios.get('http://127.0.0.1:8000/users/1')
}

// 获取博客详情 id也是随便写了
export const getBlog = () => {
  return axios.get('http://127.0.0.1:8000/list/1')
}

// 获取搜索结果 ?
/* export const getSearchResult = () => {
  return axios.get('http://127.0.0.1:8000/list/', {
    params: {
      search: '',
      category: undefined,
      ordering: '',
      p: undefined,
      page_size: undefined
    }
  })
} */

// 获取所有类别（主页）
export const getCategory = () => {
  return axios.get('http://127.0.0.1:8000/category/')
}

// 后端提供url
// export const getBlog = () => { return axios.get(`http://localhost:8000/api/books/`) }

// export const submitBlog = (Blog) => {
// return axios.post(`http://localhost:8000/api/books/`,
// {Blog})
// }
