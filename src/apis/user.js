import request from '@/utils/request'

/**
 * 登录
 * @param {String} username 用户账号
 * @param {String} password 用户密码
 * @returns  用户token
 */
export const login = (username, password) => {
    return request({
        method: 'POST',
        url: '/user/login',
        data: {
            username,
            password
        }
    })
}

// 登出  /user/logout
export const logout = () => {
    return request({
        method: 'POST',
        url: '/user/logout'
    })
}

/**
 *
 * @returns 获取用户资料
 */
export const userInfo = () => {
    return request({
        method: 'GET',
        url: '/user'
    })
}

// 查看用户收藏列表
export const favorateList = () => {
    return request({
        method: 'GET',
        url: '/user/favorites'
    })
}

// 获取房屋出租列表 /user/houses
export const housesList = () => {
    return request({
        method: 'GET',
        url: '/user/houses'
    })
}
