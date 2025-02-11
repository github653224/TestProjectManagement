import request from '@/utils/request'

export function requestStacked(data) {
  return request({
    url: '/api/dashboard/stacked',
    method: 'post',
    data
  })
}

export function requestMetaData(data) {
  return request({
    url: '/api/dashboard/metadata',
    method: 'post',
    data
  })
}
