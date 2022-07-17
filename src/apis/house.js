import request from "@/utils/request";

//获取房屋数据
export const getHouses = () => {
    return request({
        method: 'GET',
        url: '/houses/params'
    })
}

//获取房屋查询条件
export const getCondition = (id) => {
    return request({
        method: 'GET',
        url: '/houses/condition',
        params: {
            id
        }
    })
}