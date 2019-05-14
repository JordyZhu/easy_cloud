import createRequest from '@/utils/request'

export const createPost = body => createRequest({
  method: 'post',
  endpoint: '/api/v1/post/add',
  body
})

export const fetchPosts = query => createRequest({
  endpoint: '/api/v1/posts',
  query
})

