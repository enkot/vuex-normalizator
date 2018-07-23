import { Store } from 'vuex'
import { normalize, Schema } from 'normalizr'
import axios, { AxiosRequestConfig } from 'axios'

let nStore: Store<any>

export const setStore = (store: Store<any>): void => {
  nStore = store
}

export default async (
  config: AxiosRequestConfig,
  schema?: Schema,
): Promise<any> => {
  const { data: response } = await axios(config)

  if (!schema) {
    return response
  }

  // const { method } = config
  // let mutation: string

  // switch (method) {
  //   case 'POST':
  //     mutation = 'N_ENTITIES_UPDATE'
  //     break
  //   default:
  //     mutation = 'N_ENTITIES_UPDATE'
  //     break
  // }

  const { entities, result } = normalize(response, schema)

  nStore.commit('N_ENTITIES_UPDATE', entities)

  return result
}
