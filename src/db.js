const users = [
  {
    id: '1',
    name: 'Utkarsh',
    email: 'utkarsh@example.com',
    age: 21,
  },
  {
    id: '2',
    name: 'Andrew',
    email: 'andrew@example.com',
    age: 27,
  },
  {
    id: '3',
    name: 'Sara',
    email: 'sara@example.com',
  },
];

const posts = [
  {
    id: '1',
    title: 'GraphQL 101',
    body: 'Basic GraphQL..',
    published: true,
    author: '1',
  },
  {
    id: '2',
    title: 'GraphQL 201',
    body: 'Advanced GraphQL..',
    published: false,
    author: '1',
  },
  {
    id: '3',
    title: 'Programming Music',
    body: '',
    published: true,
    author: '2',
  },
];

const comments = [
  {
    id: '1',
    text: 'Amazing Post',
    author: '3',
    post: '1',
  },
  {
    id: '2',
    text: 'Good Thinking',
    author: '1',
    post: '1',
  },
  {
    id: '3',
    text: 'Little old school',
    author: '2',
    post: '2',
  },
  {
    id: '4',
    text: 'This did not work',
    author: '1',
    post: '3',
  },
];

const db = {
  users,
  posts,
  comments,
};

export { db as default };
