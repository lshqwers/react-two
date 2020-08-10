// api.js文件主要是用于封装一些方法
// 引入axios
import axios from './axios' // 引入axios的文件,有封装,响应拦截
// /api/v1/topics
export function getlist(params){
 return axios ({
     url:'/api/v1/topics',
     method:'GET',
     params
 })
}
// /jd/user/login 这里写好的方法直接使用,不需要要第二次的封装
export function getlogin(data){
    return axios ({
        url:'/jd/user/login',  // /jd/user/login
        method:'POST',
        data
    })
}
// /jd/user/regist
export function getregist(data){
    return axios ({
        url:'/jd/user/regist',
        method:'POST',
        data
    })
}
// /jd/addGood
export function addGood(data){
    return axios ({
        url:'/jd/user/regist',
        method:'POST',
        data
    })
}
// /jd/delGood
export function delGood(params){
    return axios ({
        url:'/jd/delGood',
        method:'GET',
        params
    })
}
// /jd/getHotGoodList
export function getHotGoodList(params){
    return axios ({
        url:'/jd/getHotGoodList',
        method:'GET',
        params
    })
}
// /jd/getAllCates
export function getAllCates(params){
    return axios ({
        url:'/jd/getAllCates',
        method:'GET',
        params
    })
}
// /jd/getCateGoodList
export function getCateGoodList(params){
    return axios ({
        url:'/jd/getCateGoodList',
        method:'GET',
        params
    })
}
// /jd/getGoodDetail
export function getGoodDetail(params){
    return axios ({
        url:'/jd/getGoodDetail',
        method:'GET',
        params
    })
}