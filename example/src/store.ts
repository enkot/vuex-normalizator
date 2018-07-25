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
          Vue.set(state, 'articleIds', payload)
        },
      },
      actions: {
        async fetchFirstData({ commit }) {
          const response = await fetch(
            {
              method: 'get',
              url: '/data1',
            },
            [article],
          )

          commit('GET_ARTICLES', response)
        },
        async fetchSecondData({ commit }) {
          const response = await fetch(
            {
              method: 'get',
              url: '/data2',
            },
            article,
          )
        },
      },
      getters: {
        getEntitiesState: (state: any, getters: any, rootState: any, rootGetters: any) => {
          return rootState
        },
      },
    },
  },
  plugins: [normalizatorPlugin],
})
