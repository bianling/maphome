import request from "@/utils/request";

//获取房屋数据
export const getHouses = () => {
    return request({
        method: 'GET',
        url: '/houses/params'
    })
}