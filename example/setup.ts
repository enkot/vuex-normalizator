import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'
import data1 from '../data1.json'
import data2 from '../data2.json'

// This sets the mock adapter on the default instance
const mock = new MockAdapter(axios)

// Mock any GET request to /data
// arguments for reply are (status, data, headers)
mock.onGet('/data1').reply(200, data1)
mock.onGet('/data2').reply(200, data2)
