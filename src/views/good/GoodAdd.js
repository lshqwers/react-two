import React from 'react'
import {
     Divider,
     Form,
     Input,
     Button, 
     Checkbox, 
     InputNumber,
     Upload
    } from 'antd';
/* 
    Attempted import error: '@/components'
    does not contain a default export (imported as 'CateSelect').
    引入方式要是对象的方式引入
*/ 
import { CateSelect }  from '@/components'
// 状态管理
import { connect } from 'react-redux'
// // 引入自己定义的方法
// import { getpinlei  }  from '@/store/actions/good'
const layout = {
    labelCol: { span: 4 },
    wrapperCol: { span: 8 },
};
const tailLayout = {
    wrapperCol: { offset: 4, span: 8 },
};
// mapStateToProps是要定义在export的外面
function mapStateToProps(state){
    // console.log(state,'staioeqwwqqw') // state里面是包含多个reducer
    return {
      
    }
}
function mapActionToProps(dispatch){
    return {
        // playload是返回的结果是playload,params是调接口的入参
        // getpinlei:(params)=>dispatch(getpinlei(params)) // getpinlei是自己在actions定义的方法
    }
}
// const Option=Select.Option
// const { Option } = Select;
const { TextArea } = Input;
function onFinish(value) {
    console.log('提交',value)
}
function onChanges(value){
    console.log(value)
}
// 用栅格系统
class GoodAdd extends React.Component {
    constructor(props){
        super(props)
        this.state={
            // 编辑的部分
            // cate:'a',
            imageUrl:''
        }
    }
    // 调接口
    componentDidMount(){
        // 调这个方法,被dispatch到reducer中去,在reducer中,去打印有没有收到数据
        // this.props.getpinlei({})
    }
    // 在这里调接口
    // componentDidMount(){
    //     // 调这个方法,被dispatch到reducer中去,在reducer中,去打印有没有收到数据
    //     this.props.getpinlei({})
    // }
    onChan(val){
        console.log(val,'-----------------')
        this.setState({
            cate:val
        })
        console.log('--------------',val)
    }   
    imgChange(e){
        console.log('图片上传成功之后调用',e)
    }
    render() {
        let { imageUrl  } =this.state
        return (
            /*
                下面不需要的部分,改为非必填 去掉required
            */
            <div className='goodadd'>
                <Divider orientation="left">添加商品</Divider>
                <Form className='centers'
                    {...layout}
                    name="basic"
                    initialValues={{ remember: true,cate:''}} //cate是设置初始值 cate:3 不能设置
                    onFinish={onFinish}
                >
                    <Form.Item
                        label="商品名称"
                        name="username"
                        // value={user} 不是这种获取input的value,而是通过onFinish这种回调value
                        rules={[{ required: true, message: 'Please input your username!' }]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        label="商品描述"
                        name="desc"
                        // value={user} 不是这种获取input的value,而是通过onFinish这种回调value
                        rules={[{ required: true, message: 'Please input your username!' }]}
                    >
                        <TextArea rows={4}/>
                    </Form.Item>

                    <Form.Item
                        label="商品价格"
                        name="username1"
                    >
                        <Input />
                        {/* 数字类型 */}
                    </Form.Item>
                    {/* eslint-disable */}
                    <Form.Item
                        label="手机号码"
                        name="mobile"
                        // rules中支持表达式  
                        rules={[{ required: true, pattern:/^[1][0-9]{10}$/,message: '请正确的输入11位的手机号码' }]}
                    >
                        <Input />
                    </Form.Item>
                    {/* eslint-enable */}
                    <Form.Item>
                     输入数量:  <InputNumber style={{marginLeft:'22px'}}
                      min={1} max={10} defaultValue={3} onChange={onChanges} ></InputNumber> 
                    </Form.Item>
                    <Form.Item label='选择品类' name='cate'>
                    {/* 
                        下拉选择框, 放在Form.Item表单中,自动取值,所以不需要
                        defaultValue="lucy" style={{ width: 120 }}
                        受控组件,需要加value和onchange
                        <Select  onChange={handleChange}>  from 组件自动的取值
                    */}
                    {/* <Select>  外面用了,用*/}
                        {/* <Option value="1">电子数码</Option>
                        <Option value="2">女士服装</Option>
                        <Option value="3">汽车之家</Option> */}
                        {/* 
                            下面的是把它封装出去了,因为其它的组件需要用到,
                            把它的初始值传过去 */}
                        <CateSelect 
                        value={this.props.cateArr}
                        // onChan是父组件定义的事件  自定义事件onChange,传过去   
                        onChange={this.onChan.bind(this)}
                        />
                    {/* </Select> */}
                    </Form.Item>

                    <Form.Item {...tailLayout} name="hot" valuePropName="checked">
                        <Checkbox>是否热销</Checkbox>
                    </Form.Item>
                    <Form.Item {...tailLayout}
                    style={{marginLeft:'100px'}}
                    >
                    <Upload
                        name="avatar"
                        listType="picture-card"
                        className="avatar-uploader"
                        showUploadList={false}
                        // http:localhost:9999/upload/img
                        action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                        // beforeUpload={beforeUpload}
                        onChange={this.imgChange.bind(this)}
                    >
        {/* {imageUrl ? <img src={imageUrl} alt="avatar" style={{ width: '100%' }} /> : uploadButton} */}
        <img src={imageUrl} alt="avatar" style={{ width: '100%' }} />
      </Upload>
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
export default connect(mapStateToProps,mapActionToProps)(GoodAdd)