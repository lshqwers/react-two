import  React from 'react'
import './style.scss'
// import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons';
import { NavLink } from 'react-router-dom'
// 引入自己配置好的路由
import routes from '@/views'
import { Menu } from 'antd';
import SubMenu from 'antd/lib/menu/SubMenu'
// 下面是类组件
export default class QfAsider extends  React.Component{
    constructor(props){
        super(props)
        this.state={}
    }
    // 生成二级菜单
    createMenuItem(children){
      return children.map(ele=>(
        <Menu.Item key={ele.id}>
          {/* to表示跳转的路径 */}
            <NavLink to={ele.path}>{ele.text}</NavLink>
        </Menu.Item>
      ))
    }
    // 定义一个方法,必须要有返回值  生成右侧的菜单
    createLink(){
    // 记得要有返回值
     return routes.map(ele=>(
        // 根据下面的
        <SubMenu key={ele.id+''} title={ele.title}>
          {this.createMenuItem(ele.children)}
        </SubMenu>
      ))
    }
    render(){
      // console.log(routes)
        return( 
          <div className='qf-sider'>
            {/* logo */}
            <Menu
                  mode="inline"
                  defaultSelectedKeys={['1']}
                  defaultOpenKeys={['3']} // 设置默认展开,如果展不开,把它设置为ele.id+'' 把id转为字符串
                  style={{ height: '100%', borderRight: 0 }}
            > 
             {/* 使用递归,遍历二级路由routes里面是配置好的路由 */}
            {this.createLink()}
            </Menu> 
          </div>
        )
    }
}