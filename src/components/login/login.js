import React from 'react'
// import { Divider } from 'antd';
import { Form, Input, Button, Checkbox } from 'antd';
// 引入自己定义的样式
import '../style.scss'
// 把登入的接口,引入进来,没有全局的写法 
import  { getregist  }  from '@/utils/api'
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
export default  class Login extends React.Component {
  constructor(props){
      super(props)
      this.state={}
  }
  componentDidMount(){
    // 手动改变url改变 /login
    // this.props.history.replace('/todo/login')
    // this.props.history.push('/todo/login')
  }
  // sub(e){
  //   let  { user,pas }=this.state
  //   console.log('dains', user,pas)
  // }
  // onlogin是自定义的方法
  onregist(value){   // getregist
    console.log('注册122',value)
    getregist(value).then(res=>{ // 登入直接,获取到token
      console.log('注册成功',res)
      // localStorage.setItem('token',res.token)  
      // this.props.history.replace('/')  // 不能使用this.props.history.push是没有用的
      // this.props.onlogin()
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
          // 默认input的value
          initialValues={{ remember: true, username:'lsh' }}
          onFinish={this.onregist.bind(this)}
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
            {/*
               onClick={this.sub.bind(this)} 获取不到value 
               htmlType是相当于type
            */}
            <Button type="primary" htmlType="submit"> 
              Submit
            </Button>
          </Form.Item>
        </Form>
      </div>
    )
  }
}

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

// http://localhost:8999/#/todo/login
// http://localhost:8999/#/todo/login