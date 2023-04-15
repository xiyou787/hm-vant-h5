import request from '@/utils/request'
export const register = (data) => {
  return request({
    method: 'post',
    url: 'user/register',
    data
  })
}

export const login = (data) => {
  return request({
    method: 'post',
    url: 'user/login',
    data
  })
}
