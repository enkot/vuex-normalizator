import Vue from 'vue';
import Vuex from 'vuex';
import normalizator, { fetch } from '../../src';
import { user, comment, article } from './schemas';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  plugins: [
    normalizator({
      users: user,
      comments: comment,
      articles: article,
    }),
  ],
});
