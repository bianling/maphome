import request from '@/utils/request'

export const login = (username, password) => {
    console.log(username, password)
    return request({
        method: 'POST',
        url: '/user/login',
        data: {
            username,
            password
        }
    })
}
