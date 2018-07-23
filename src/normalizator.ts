import Vue from 'vue'
import { denormalize } from 'normalizr'

export default (schemas: any) => {
  return {
    state: {},
    mutations: {
      N_ENTITIES_UPDATE(state: any, entities: any): void {
        Object.keys(entities).forEach((key: string) => {
          Vue.set(state, key, {
            ...(state[key] || {}),
            ...entities[key],
          })
        })
      },
    },
    getters: {
      nGetItems: (state: any, getters: any, rootState: any) => (
        type: string,
        ids: number[] | number,
      ): any => {
        if (!rootState.n_entities[type]) {
          return null
        }

        const schema = Array.isArray(ids) ? [schemas[type]] : schemas[type]

        return denormalize(ids, schema, rootState.n_entities)
      },
    },
  }
}
