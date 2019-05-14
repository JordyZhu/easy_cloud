import { Vue } from 'vue-property-decorator'

export default ({
  method = 'get',
  endpoint,
  query = {},
  body
}) => {
  const finalMethod = method.toLocaleLowerCase()
  const queryString = Object.keys(query).reduce(
    (result, key) => `${result}${result ? '&' : ''}${key}=${query[key]}`,
    ''
  )
  const finalUrl = queryString ? `${endpoint}?${queryString}` : endpoint
  let finalRequest = null

  switch(finalMethod) {
    case 'delete':
    case 'get': {
      finalRequest = () => Vue.http.get(finalUrl)
      break
    }
    case 'put':
    case 'post': {
      finalRequest = () => Vue.http.post(endpoint, body)
      break
    }
    default: {
      finalRequest = () => Vue.http.get(finalUrl)
    }
  }

  return finalRequest().then(res => {
    if (res.body && res.body.errorCode === 100000) {
      return Promise.resolve(res.body)
    } else {
      return Promise.reject(res.body)
    }
  })
}
