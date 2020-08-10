import  React from 'react'
import './style.scss'
import { Layout, Menu } from 'antd';
const { Header } = Layout;
// 下面是类组件
export default class QfHeader extends  React.Component{
    constructor(props){
        super(props)
        this.state={}
    }
    render(){
        return(
            <Header className="header">
                <div className="logo" />
                <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
                <Menu.Item key="1">nav 1</Menu.Item>
                <Menu.Item key="2">nav 2</Menu.Item>
                <Menu.Item key="3">nav 3</Menu.Item>
                </Menu>
            </Header>
        )
    }
}