import { Store } from 'vuex'
import { Schema } from 'normalizr'
import normalizator from './normalizator'
import fetch, { setStore } from './fetch'

export { fetch }

export default (schemas: Schema) => {
    return (store: Store<any>): void => {
        setStore(store)
        store.registerModule('n_entities', normalizator(schemas))
    }
}
