import { schema } from 'normalizr';

// Define a users schema
export const user = new schema.Entity('users');

// Define your comments schema
export const comment = new schema.Entity('comments', {
  commenter: user,
});

// Define your article
export const article = new schema.Entity('articles', {
  author: user,
  comments: [comment],
});
