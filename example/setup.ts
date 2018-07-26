import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'
import articles from '../data/articles.json'
import article from '../data/article.json'
import comment from '../data/comment.json'

// This sets the mock adapter on the default instance
const mock = new MockAdapter(axios)

// Mock any GET request to /data
// arguments for reply are (status, data, headers)
mock.onGet('/articles').reply(200, articles)
mock.onPost('/article').reply(200, article)
mock.onPost('/comment').reply(200, comment)
mock.onDelete('/comment').reply(200, 251)
