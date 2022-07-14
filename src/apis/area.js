import request from '@/utils/request'

//获取小区名
export const getCommunity = (name) => {
    return request({
        method: 'GET',
        url: '/area/community',
        params: {
            name,
            id: 1
        }
    })
}