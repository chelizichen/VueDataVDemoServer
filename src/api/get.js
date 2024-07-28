import request from '../utils/request'

export function allMakersEquipment(){
    return request({
        url:"/test_optical_fibre/allMakersEquipment",
        method:'get'
    })
}