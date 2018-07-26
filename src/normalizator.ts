import Vue from 'vue'
import { denormalize } from 'normalizr'

export default (schemas: any) => {
    return {
        state: Object.keys(schemas).reduce((acc: any, entity) => {
            acc[entity] = {}
            return acc
        }, {}),
        mutations: {
            N_ENTITIES_UPDATE(state: any, entities: any): void {
                Object.keys(entities).forEach((entity: string) => {
                    Object.keys(entities[entity]).forEach((item: string) => {
                        Vue.set(state[entity], item, {
                            ...entities[entity][item],
                        })
                    })
                })
            },
            N_ENTITIES_DELETE(state: any, entities: any): void {
                console.log(entities)
                // Object.keys(entities).forEach((entity: string) => {
                //     Object.keys(entities[entity]).forEach((item: string) => {
                //         Vue.delete(state[entity], id)
                //     })
                // })
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
