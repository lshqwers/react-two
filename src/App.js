import React from 'react'
import 'antd/dist/antd.css'; 
import store from '@/store'
import { QfLayout } from './components'
import  { Provider } from 'react-redux'
// 引入路由
import { HashRouter } from 'react-router-dom'
/* Attempted import error: '@/components/login/login' 
 does not contain a default export (imported as 'Login').
 这种错误是,没有在组件中暴露login
*/
import Logins from '@/components/login/logins.js' // 还是要注意,url
// 无状态组件,无状态组件里面是不能使用方法,没有cons
export default class App extends React.Component{
    constructor(props){
        super(props)
        // 初始化的数据,要在constructor中定义
        this.state=({
            token:localStorage.getItem('token')  // login只是存储,并不会触发state,中的变化 
        })
    }
    // 这个方法登入的时候才调用  改变初始化token,token是控制是否显示登入页面  (利用的是父子通信)
    LoginHandle(){
      // 登入成功获取token  react 没有路由守卫,手写    
      this.setState({token:localStorage.getItem('token')})
    }
    render(){
        let { token }=this.state
        return(
            <div>
                <Provider store={store}>
                    <HashRouter>
                        <div className='App'>
                            {/* onLogin是自定义事件,LoginHandle自定义的方法 */}
                            { 
                                token 
                                ?
                                <QfLayout></QfLayout>
                                // 定义自定义的事件
                                :<Logins onLogin={this.LoginHandle.bind(this)} > 
                                </Logins>
                            }
                        </div>
                    </HashRouter>
                </Provider>
            </div>
        )
    }
}

// function App(){  这种是错误的,要把render去掉
//     render(){
//         return(
//             <div>
//                 <h1>App</h1>
//             </div>
//         )
//     }
// }
/*
  redux-thunk可以在里面请求数据
  cnpm i redux-thunk -S
  在store中的根目录,
  import thunk from 'redux-thunk'
  使用中间件
  mongod --dbpath "D:\mongodb\data"
*/