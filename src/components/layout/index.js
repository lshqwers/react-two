import React from 'react'
import QfHeader from './QfHeader'
import QfContent from './QfContent'
import QfAsider  from './QfAsider'
import './style.scss'
import { Layout } from 'antd';
// 引这个3个部分
const { Header, Sider, Content } = Layout
// 注意暴露的方式   
export default class QfLayout extends React.Component {
    render() {
        return (
            <Layout>
                {/* 要认真看文档,否则要改样式改半天,  width={150}是最大的宽度 */}
                  <Sider width={150} className="site-layout-background">
                    <QfAsider>
                    </QfAsider>
                  </Sider>
                {/* <QfHeader></QfHeader> 放在这里布局有问题 */}
                <Layout>
                    <Header>
                        <QfHeader></QfHeader> 
                    </Header>
                        <Content>
                            <QfContent></QfContent>
                        </Content>
                </Layout>
            </Layout>
         )
    }
}
