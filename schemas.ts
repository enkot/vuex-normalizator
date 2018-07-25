import { schema } from 'normalizr'

export const user = new schema.Entity('users')

export const comment = new schema.Entity('comments', {
  commenter: user,
})

export const article = new schema.Entity('articles', {
  author: user,
  comments: [comment],
})
