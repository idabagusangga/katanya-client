import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import jwt from 'jsonwebtoken'
import facebookLogin from 'facebook-login'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    articles: '',
    user: '',
    token: '',
    userId: '',
    isLoggedin: false,
    msg: 'Selamat DatanG',
    article: '',
    role: ''
  },
  mutations: {
    setArticles (state, payload) {
      state.articles = payload
    },
    setArticle (state, payload) {
      state.article = payload
    },
    setMsg (state, payload) {
      state.msg = payload
    },
    setUserId (state, payload) {
      state.userId = payload
    },
    setUser (state, payload) {
      state.user = payload
    },
    setToken (state, payload) {
      state.token = payload
    },
    setIsLoggedin (state, payload) {
      state.isLoggedin = payload
    },
    setRole (state, payload) {
      state.role = payload
    }
  },
  actions: {
    getAllArticles ({ commit }, state) {
      axios.get(`http://35.185.177.146:3000/articles`)
        .then(response => {
          console.log(response.data)
          commit('setArticles', response.data)
        })
        .catch(err => {
          console.log(err)
        })
    },
    getArticle ({ commit }, id) {
      axios.get(`http://35.185.177.146:3000/articles/${id}`)
        .then(response => {
          console.log(response)
          commit('setArticle', response.data.article)
        })
        .catch(err => {
          console.log(err)
          commit('setMsg', err)
        })
    },
    login ({ commit }, payload) {
      axios.post(`http://35.185.177.146:3000/users/login`, payload)
        .then(response => {
          let decoded = jwt.verify(response.data.token, 'rahasia')
          commit('setToken', response.data.token)
          localStorage.setItem('token', response.data.token)
          commit('setUser', decoded.email)
          commit('setUserId', decoded.id)
          commit('setRole', decoded.role)
          commit('setIsLoggedin', true)
        })
        .catch(err => {
          commit('setMsg', err.data.msg)
        })
    },
    fbLogin ({ commit }) {
      const api = facebookLogin({ appId: 857148194465924 })
      api.login('email')
        .then(response => {
          commit('setUserId', response.authResponse.userID)
          commit('setUser', 'FB' + response.authResponse.userID)
          commit('setIsLoggedin', true)
          axios.post(`http://35.185.177.146:3000/users`, {email: response.authResponse.userID, password: response.authResponse.userID})
            .then(response => {
              localStorage.setItem('token', response.data.token)
            })
            .catch(err => {
              commit('setMsg', err)
            })
        })
    },
    register ({ commit }, payload) {
      if (!payload || payload === undefined || payload.email === '' || payload.password === '') {
        commit('setMsg', 'please enter a valid email and password')
      } else {
        axios.post(`http://35.185.177.146:3000/users`, payload)
          .then(response => {
            commit('setMsg', 'New User Created Please Log In')
          })
          .catch(err => {
            commit('setMsg', err)
          })
      }
    },
    postNewArticle ({ commit }, payload) {
      if (!payload || payload === undefined || payload.title === '') {
        commit('setMsg', 'Write something to post an article!')
      } else {
        axios.post(`http://35.185.177.146:3000/articles`, payload)
          .then(response => {
            commit('setMsg', response.data.msg)
            axios.get(`http://35.185.177.146:3000/articles`)
              .then(response => {
                console.log(response.data)
                commit('setArticles', response.data)
              })
              .catch(err => {
                console.log(err)
              })
          })
          .catch(err => {
            commit('setMsg', err)
          })
      }
    },
    checkLoginState ({ commit }) {
      if (localStorage.getItem('token')) {
        commit('setIsLoggedin', true)
      }
    },
    destroyArticle ({ commit }, id) {
      axios.delete(`http://35.185.177.146:3000/articles/${id}`)
        .then(response => {
          console.log(response.data)
        })
        .catch(err => {
          console.log(err)
        })
    },
    changeIsLoggedIn ({ commit }, payload) {
      commit('setIsLoggedin', payload)
    }
  }
})
