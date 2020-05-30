import Vue from 'vue'
import Router from 'vue-router'
import SearchResult from '../components/SearchComponents/SearchResult'
import ViewMain from '../components/ViewComponents/ViewMain'
import EditBlog from '../components/EditComponents/EditBlog'
import MainPage from '../components/MainPageComponents/MainPage'
import Login from '../components/MainPageComponents/Login'
import Register from '../components/MainPageComponents/Regist'
import Classify from '../components/MainPageComponents/Classify'
import UserInfo from '../components/UserComponents/UserInfo'
import UserBlog from '../components/UserComponents/UserBlog'
import ChangeInfo from '../components/UserComponents/ChangeInfo'
import UploadedFiles from '../components/UserComponents/UploadedFiles'
import DeleteUser from '../components/UserComponents/DeleteUser'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/MainPage',
      name: 'MainPage',
      component: MainPage
    },
    {
      path: '/',
      name: 'MainPage',
      component: MainPage
    },
    {
      path: '/SearchResult',
      name: 'SearchResult',
      component: SearchResult
    },
    {
      path: '/ViewMain/:AuthorId/:BlogTitle',
      name: 'ViewMain',
      component: ViewMain
    },
    {
      path: '/EditBlog/:UserId',
      name: 'EditBlog',
      component: EditBlog
    },
    {
      path: '/Login',
      name: 'Login',
      component: Login
    },
    {
      path: '/Register',
      name: 'Register',
      component: Register
    },
    {
      path: '/Classify/:ClassifyId',
      name: 'Classify',
      component: Classify
    },
    {
      path: '/UserCenter/UserInfo/:UserId',
      name: 'UserInfo',
      component: UserInfo
    },
    {
      path: '/UserCenter/BlogList/:UserId',
      name: 'UserBlog',
      component: UserBlog
    },
    {
      path: '/UserCenter/ChangeInfo/:UserId',
      name: 'ChangeInfo',
      component: ChangeInfo
    },
    {
      path: '/UserCenter/UploadedFiles/:UserId',
      name: 'UploadedFiles',
      component: UploadedFiles
    },
    {
      path: '/UserCenter/DeleteUser/:UserId',
      name: 'DeleteUser',
      component: DeleteUser
    }
  ]
})

const originalPush = Router.prototype.push
Router.prototype.push = function push (location) {
  return originalPush.call(this, location).catch(err => err)
}

// 导航守卫 使用router.beforeEach注册一个全局前置守卫，判断用户是否登录
router.beforeEach((to, from, next) => {
  if (to.path === '/Login') {
    next()
  } else {
    let token = localStorage.getItem('Authorization')

    if (token === null || token === '') {
      next('/Login')
    } else {
      next()
    }
  }
})

export default router
