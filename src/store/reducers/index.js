// 初始化状态的赋值
let initState ={  // 分模块的为state
    msg:'hello redux',
    list:[]
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
        case 1:
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
    // 清空所有的todo
        default:
        // return false //  不能return为false
        return state
    }
}