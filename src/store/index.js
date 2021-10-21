import { createStore } from 'vuex'
import posts from './modules/posts'
import accounts from './modules/accounts'


export default createStore({
  modules: {
    posts : posts,
    accounts : accounts
  },
  //strict: process.env.NODE_ENV !== 'production'
})
