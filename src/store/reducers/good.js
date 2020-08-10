import { GET_CATES } from '../actionTypes.js' // 引入自己定义的变量
let initstate={
    cateArr:[]
}
// reducer是一个纯函数,reducer是接受state,action这两个参数,里面是一堆的switch
// export暴露,要{}对象的方式引入
export default function goodreducer(state=initstate,action){ //一个子的reducer,要记得去在index.js中去合并
switch(action.type){// 不是action,而是action
    case GET_CATES: // 判断变量
      console.log('收到了信息',action)
      let newState=JSON.parse(JSON.stringify(state))
      newState.cateArr=action.playload
      return newState
      default:
      // break不需要,一定要return 
      return state
  }
}