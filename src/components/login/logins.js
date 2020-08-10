import React from 'react'
// import { Divider } from 'antd';
import { Form, Input, Button, Checkbox } from 'antd';
// 引入自己定义的样式
import '../style.scss'
// 引入高阶组件,没有用路由包裹,可以用withRouter
// import withRouter from 'react-router-dom'
import { withRouter } from "react-router-dom";

// 把登入的接口,引入进来,没有全局的写法 
import  { getlogin  }  from '@/utils/api'
const layout = {
  labelCol: { span: 4 },
  wrapperCol: { span:8 },
};
const tailLayout = {
  wrapperCol: { offset: 4, span: 8 },
};
// const Demo = () => {
//   const onFinish = values => {
//     console.log('Success:', values);
//   };
//   const onFinishFailed = errorInfo => {
//     console.log('Failed:', errorInfo);
//   };
// }
class Logins extends React.Component {
  constructor(props){
      super(props)
      this.state={}
  }
  componentDidMount(){
    // 手动改变url改变 /todo/login 手动添加一个url
    // app
    this.props.history.replace('/todo/logins')
  }
  // sub(e){
  //   let  { user,pas }=this.state
  //   console.log('dains', user,pas)
  // }
  // onlogin是自定义的方法
  onlogin(value){
    console.log('登入122',value)
    getlogin(value).then(res=>{ // 登入直接,获取到token
      console.log('登入成功',res.token)  //  如果res.token是undefined,则登入失败
      // 如果res.token是undefined,则是不可以加入到localStorage中
      if(res.token!==undefined){
        localStorage.setItem('token',res.token)
      }
      this.props.history.replace('/good') // 跳转页面
      // this.props.onlogin()
      // 注意  注意是触发自定义的事件,才能props中获取。
      this.props.onLogin()  //  调用父组件<layout></layout>,传来的事件
    })
  }
  render() {
    //  把要定义的内容,写在render的return的同级
    let { user,pas }=this.state
    return (
      <div className="qf-login">
        <Form className='centers'
          {...layout}
          name="basic"
          initialValues={{ remember: true, }}
          onFinish={this.onlogin.bind(this)}
        >
          <Form.Item
            label="Username"
            name="username"
            value={user}
            rules={[{ required: true, message: 'Please input your username!' }]}  
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Password"
            name="password"
            value={pas}
            // rules
            rules={[{ required: true, message: 'Please input your password!' }]}
          >
            <Input.Password />
          </Form.Item>
          <Form.Item {...tailLayout} name="remember" valuePropName="checked">
            <Checkbox>Remember me</Checkbox>
          </Form.Item>
          <Form.Item {...tailLayout}>
            {/* onClick={this.sub.bind(this)} 获取不到value */}
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </div>
    )
  }
}
export default  withRouter(Logins)
// export default class Login extends React.Component {
//   constructor(props){
//       super(props)
//       this.state={
//       }
//   }
//   render(){
//     return (
//       <div>13334</div>
//     );
//   }
// }



// http://ant-design.gitee.io/index-cn   andt的官网
// 管理系统很少有注册
// 8.未注册的用户在登入时自动注册,登入后用编程式导航跳转首页并且缓存后端传来的token
/*
    3. 使用vue-cli对页面进行组件化开发。
    4. 使用vue-router实现SPA单页面应用开发。
    5. 使用vuex状态管理模式,方便数据共享和传递。
    6. 使用axios插件与后台开发工程师协作完成各种数据交互，动态展现和用户的互动。
    8. 负责项目后期页面的性能优化和维护。
    9. 对网站进行易维护性重构以及更新，优化网站，增强网站的用户体验。


    . 运用了betterScroll,Seiper 等插件对轮播图滑动等功能快速建立。
    5. 运用了vuex 方便组件之间的数据传输。
    6. 使用mock进行数据模拟,使用Promise进行数据异步处理。
    1. 项目采用common来整理全局使用的部分css样式统一化
    2. 传值方面使用路由传值以及emit和on来传入和接收实现页面传值和收货地址管理
*/