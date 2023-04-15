import request from '@/utils/request'
export const article = (obj) => {
  return request({
    method: 'get',
    url: 'interview/query',
    params: obj
  })
}
export const detail = (id) => {
  return request({
    method: 'get',
    url: 'interview/show',
    params: {
      id
    }
  })
}

export const updateLikeColl = (id, optType) => {
  return request({
    method: 'post',
    url: 'interview/opt',
    data: {
      id,
      optType
    }
  })
}

export const getArticlesCollect = (obj) => {
  return request({
    method: 'get',
    url: 'interview/opt/list',
    params: {
      optType: obj.optType,
      page: obj.page,
      pageSize: 10
    }
  })
}

export const getUser = () => {
  return request({
    method: 'get',
    url: 'user/currentUser'
  })
}
