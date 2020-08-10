import  { createStore, combineReducers, applyMiddleware } from 'redux'
// 用于把异步行为(比如调接口)的action转化为三个同步的action
import thunk from 'redux-thunk'
// import reducer from './reducers/index.js'
// 分模块后的子reduer
import testReducer from './reducers/text.js'
import todoReducer from './reducers/todo.js'
import goodreducer from './reducers/good.js'
// let initState={
//     // a是跨组件共享的  初始化状态
//     a:1
// }
// reducer的作用是用来改变store  playload是需要改变的结果 各种电机事件传过来的
// function reducer(state,playload){
//     state=initState // 复初始值
//     state.a=playload
// }
// combineReducers把多个reducer,合并成一个大的reducer
const reducer=combineReducers({
    test:testReducer,
    todo:todoReducer,
    good:goodreducer // 合并key不能重复
})
// 创建store,主要是共享数据的存储中心 第一个参是必填的,它是reducer
const store = createStore(reducer,applyMiddleware(thunk)) // thunk是为了解决异步的action
export default store  // 根store

/*
    1.  reducer根据什么变量改成
    2.  playload是改变的结果,是改成什么样子的
    3.  reducer根据什么判断把store某个变量改成对应的变量


    总结
    reducer是用来改变,初始的状态
    1.复初始值
    2.使用action传来的playload,来修改

    高阶函数和组件是用来修饰类 
    就是纯函数,唯一的输入得到唯一的输出


    dispatch 发送一个action到redcer
    store的

    项目中有多个reducer,reducer合并
    1.合并好抛出去
    2.把它引入进来在抛出去

    combineReducers是合并成一个大的reduer,一些的switch的语句
    先合并在使用



    1. 定义一个actionTypes,里面多个变量
    2. 在每个模块去引入actionTypes,每个模块的case是actionTypes的变量
    3. 在统一的出口是,引用createStore, combineReducers,在把多个子模块合并,
    const store = createStore(reducer),暴露store
    4. 在需要的文件引入把actionType的方法,
    使用connect的高阶组件,并且定义2个方法
    function mapStateToProps(state){
    return {
        todolist:state.todo.list
      }
    }
    function mapActionToProps(dispatch){
    return{
        addTodo:(playload)=>dispatch(addTodo(playload)),
        delTodo:(playload)=>dispatch(delTodo(playload)),
        updTodo:(playload)=>dispatch(updTodo(playload)),
        clearTodo:(playload)=>dispatch(clearTodo(playload)),
    }
  } 
    暴露连接的组件
    export default connect(mapStateToProps,mapActionToProps )(Todo)
    5. 在app.js或main.js,中去引入store 
    import  store from '@/store'
    import  { Provider } from 'react-redux' 引用上下文
    6.
    
*/