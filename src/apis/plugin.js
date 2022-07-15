const FormData = require('form-data');
import request from "@/utils/request";
let formData = new FormData();

export const plugin = (file) => {
    formData.append('file', file);

    return request({
        method: 'POST',
        url: '/houses/image',
        data: {
            file
        },
        headers: { 'Content-Type': 'multipart/form-data' }
    })
} 