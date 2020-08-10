// 仅用于学习的模块
import { CHANGE_MSG, CNODE_LIST} from '../actionTypes'
import { getlist } from '@/utils/api'  // 引入封装好的方法
export function changeMsg(playload){
// 返回一个action
return {
    // type:1, // type发生变化,reducer的case也要发生变化
    type: CHANGE_MSG, 
    playload
  } 
}
// 封装一个方法,调接口  异步行为的解决方案
export function cnode(params){  // params是前端获取的(从页面中获取的)
  // 把api里面的方法,引入进来
  // dispatch是派发一个action 
  // 调接口 return一个方法  封装好一个调接口的方法,后面方便直接使用
  return function(dispatch){
    getlist(params).then(res=>{  // 成功之后,then方法
      // console.log(res,'getList')
      // 这是成功的结果
      // 第二个action 
      dispatch({
        type: CNODE_LIST,
        // 改变store,playload是从后端来的
        playload: res   // playload是异步行为调接口成功的结果  playload是从后端获取的 
      })
    }).catch(err=>{
      // 第三个action,失败的action
      dispatch({
        type: CNODE_LIST,
        // 改变store,playload是从后端来的
        playload: ''   // playload是异步行为调接口成功的结果  playload是从后端获取的 
      })
    })
  }
}
// 在需要的地方,去使用(在home组件中去引用)

// 1.在utils中,引用自己封装好的调接口的方法
// 2.在这里写好登入的接口,方便直接的调用,调接口要用到redux-thunk插件,在合并reducer中使用
export function  Onlogin(data){// 因为是post请求,所以是传data
  return function(dispatch){
    /* getlogin(data).then(res=>{
      dispatch({
      })
    })
    */
  //  登入成功后设置token
   setTimeout(()=>{
     localStorage.setItem('token',123)
   },3000)
  }
}
// A 
// 返回的是给dipatch({type: 1, '122'})  changeMsg的合并是,在其他的页面都可以使用
// dipatch(changeMsg('122'))
// B
// 返回的是给dipatch({type: 2, '233'}) 
// dipatch(changeMsg('233'))
// C
// 返回的是给dipatch({type: 3, '456'}) 
// dipatch(changeMsg('456'))// 封装成组件是可以复用,不封装改一个页面,三个页面都需要改