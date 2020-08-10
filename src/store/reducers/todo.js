import {  
    Todo_ADD, 
    Todo_DEL,
    Todo_UPD, 
    Todo_CLEAR 
    } 
from '../actionTypes'
let initState={
    msg:'hello todo',
    list:[
        {id:1,task:'学习'},
        {id:2,task:'看书'}
    ]
}
export default  function reducer(state=initState,action){
    // state只读的,所以需要深复制
    let newState = JSON.parse(JSON.stringify(state))   
    // let newState=Object.assign({},state)  对象嵌套很深会出现问题 abc:{ac:{cde:{frt:{}}}}
    // let newState={...state,list}          对象嵌套很深会出现问题 abc:{ac:{cde:{frt:{}}}}
    switch(action.type){
        case  Todo_ADD:
        newState.list.push(action.playload)
        return newState
        case  Todo_DEL:
        console.log('收到了',action)
        // let newState1=JSON.parse(JSON.stringify(state))  
        //  newState.list.splice((ele,idx,arr)=>{} 这种是错误的,会把所有的都删除
        newState.list.map((ele,idx,arr)=>{ 
            if(ele.id===action.playload){
                arr.splice(idx,1);
            }
            return false  // 箭头函数 不用return false  eslint会报错
        })
        return newState //  初始化的时候,执行的数据都是default,否则是没有值 
        case  Todo_UPD:
        return state
        case  Todo_CLEAR:
        return {...newState,...{list:[]}}
        default :
        return state
        /*
            Error: Reducer "todo" returned undefined during initialization. 
            If the state passed to the reducer is undefined, 
            you must explicitly return the initial state. The initial state may not be undefined.
             If you don't want to set a value for this reducer, you can use null instead of undefined
             这个是初始化 没有返回值
        */

        /*
            面试题
            对象递归
            在react数据流,都是要走reducer,当多个功能同时操作state,会出现各种的问题,每次都要做副本的
            复制,当一个东西做完之后,另外一个东西,才可以接着做,避免数据的混乱,所以store是只读的
        
        */ 
    }
}