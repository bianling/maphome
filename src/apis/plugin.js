import request from "@/utils/request";

export const plugin = (file) => {
    return request({
        method: 'POST',
        url: '/houses/image',
        data: file
    })
} 