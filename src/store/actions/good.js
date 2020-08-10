import {  getAllCates } from '@/utils/api.js' // 引入调接口的方法
import {  GET_CATES } from '../actionTypes.js' // 引入变量
// 封装一个action
export function getpinlei(params){
    // 异步的action转换为3个同步的action 
    // console.log('123')
    return function(dispatch){
        getAllCates(params).then(res=>{// params是入参数
            // dispatch是派发两个action  进入到状态管理工具中
            // console.log('res',res)
            dispatch({
               type:GET_CATES, // 是变量 触发这个接口
               // playload是返回的结果    
               playload:res    // 第二action是把后端请求的结果发送到reducer中去
          })
        })
    }
}