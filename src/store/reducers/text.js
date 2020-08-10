// // import { CHANGE_MSG } from ''
// let initState ={
//     msg:'hello redux',
//     list:[]
// }
// // action的作用,给reducer一个改变数据的信号
// // 你要改变哪个变量？
// // 你改变的结果是什么？
// // reducer(state=this.initState) 是es6的语法
// export default function reducer(state=initState,action){
//   switch (action.type){
//     //   case CHANGE_MSG:
//     case 1:
//           console.log('收到了',action)
//       // 深复制 
//      let newState=JSON.parse(JSON.stringify(state))  
//      newState.msg=action.playload
//      // 改变msg
//     //  state.msg=action.playload
//     return newState 
//     case 2:
//         // 增加一条todo 要改变的对象
//         // state.list.push(action.playload)
//     return state
//     case 2:
//         // 删除一条todo 要改变的对象
//         // state.list.splice(action.playload)
//     return state
//     default:
//     return state
//     }  
// }
// 引入自己封装的actionTypes
import { CHANGE_MSG,CNODE_LIST } from '../actionTypes'
// 初始化状态的赋值
let initState ={  // 分模块的为state
    msg:'hello redux',
    list:[],
    cnodelist: [] // 请求回来的数据,走状态管理
}    
// export default function reducer(state=initState,playload) 局部的变量等于外部的变量 es6的写法
/*  
   action={
       type:1,  // 1 改变msg
       playload: 'hello 2002'
   }
   action={
       type:2,  // 2 增加一条msg
       playload: 'hello 2003'
   }
   action={
       type:3,  // 3 删除一条msg
       playload: {id:111,title:'吃饭'}
   }
*/
// reducer是有很多switch  switch比if的效率高 性能更好
// action的作用,给reducer一个改变数据的信号
// 改变哪个变量？
// 改变的结果
export default function reducer(state=initState,action){// action是触发reducer执行的信号
    switch(action.type){
        case CHANGE_MSG:
        console.log('收到了',action)
        // 深复制
        let newState = JSON.parse(JSON.stringify(state))
        newState.msg=action.playload
    // 改变msg  注意: return和break,不能同时使用
        // state.msg=action.playload
        return newState
        // return state
        case 2:
    // 增加一条todo
        // state.list.push(action.playload)
        return state
    // 删除一条todo
        case 3:
        // state.list.splice(action.playload,1)
        return state
        case CNODE_LIST:
        console.log('cnode',action)
        return {...state,...{cnodelist:action.playload}} // 不生成副本 
    // 清空所有的todo
        default:
        // return false //  不能return为false
        return state
    }
}