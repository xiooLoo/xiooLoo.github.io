import http from './axios'

export function test_getList(params: any) {
  return http.get('/api/getList', { params })
}

export default {
  test_getList
}