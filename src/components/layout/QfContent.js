import  React from 'react'
import './style.scss'
// 引入路由的api
import { Route,Switch, Redirect} from 'react-router-dom'
// 引入配置好的路由路径
import routes from '@/views'
// 下面是类组件
export default class QfContent extends  React.Component{
    constructor(props){
        super(props)
        this.state={}
    }
    // 写一个方法,生成视图容器
    createRoutes(){  // 如果用这个递归createRoutes,会把res重置
        var res=[]
        // 递归函数
        function create(arr){
            arr.map(ele=>{
                // 把路由视图,push到
                res.push(
                    <Route
                     exact
                     path={ele.path}
                     component={ele.component}
                     key={ele.id}
                    >
                    </Route>
                )   
                    // {/* 递归一定要有结束条件 */}
                    if(ele.children){
                        create(ele.children)
                    }
                    return false
            })
        }
        routes.map(ele=>{
            create(ele.children) // 调用递归函数
            return false // 必须要return false,否则eslint报错
        })
        return res
    }
    render(){
        return(
         <div className='qf-content'>
            <Switch>
                   {/* 公共组件渲染视图 */}
                   { this.createRoutes() }
                  {/* <h1>QfContent</h1> */}
                  <Redirect from='/*' to='/'></Redirect>
            </Switch>
         </div>
        )
    }
}