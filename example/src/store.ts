import Vue from 'vue'
import Vuex from 'vuex'
import '../setup'

import normalizator, { fetch } from '../../src'
import { user, comment, article } from '../../schemas'

Vue.use(Vuex)

const normalizatorPlugin = normalizator({
  users: user,
  comments: comment,
  articles: article,
})

export default new Vuex.Store({
  modules: {
    articles: {
      state: {},
      mutations: {
        GET_ARTICLES(state, payload) {
          Vue.set(state, 'response', payload)
        },
      },
      actions: {
        async fetchAllArticles({ commit }) {
          await fetch(
            {
              method: 'get',
              url: '/articles',
            },
            [article],
          )
          const response = await fetch({
            method: 'get',
            url: '/articles',
          })

          commit('GET_ARTICLES', response)
        },
        async fetchArticle({ commit }) {
          const response = await fetch(
            {
              method: 'post',
              url: '/article',
            },
            article,
          )
        },
        async fetchComment({ commit }) {
          const response = await fetch(
            {
              method: 'post',
              url: '/comment',
            },
            comment,
          )
        },
      },
      getters: {
        getEntitiesState: (
          state: any,
          getters: any,
          rootState: any,
          rootGetters: any,
        ) => {
          return rootState
        },
      },
    },
  },
  plugins: [normalizatorPlugin],
})
