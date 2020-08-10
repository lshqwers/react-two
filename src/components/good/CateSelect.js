import React from 'react'
// Select是ui组件,它是从antd组件库中引入进来的
import { Select } from 'antd' 
// 状态管理
import { connect } from 'react-redux'
// 引入自己定义的方法
import { getpinlei  }  from '@/store/actions/good'
const  { Option  } = Select
// const Option=Select.Option
// 1.业务组件 自己封装的组件,可以在其他组件引用
// 2.可以使用Prop-Types进行属性验证,默认值
function mapStateToProps(state){
    // console.log(state.good.cateArr,'staioe') // state里面是包含多个reducer
    return {
        cateArr:state.good.cateArr
    }
}
function mapActionToProps(dispatch){
    return {
        // playload是返回的结果是playload,params是调接口的入参
        getpinlei:(params)=>dispatch(getpinlei(params)) // getpinlei是自己在actions定义的方法
    }
}
class CateSelect extends React.Component{
    constructor(props){
        super(props)
        this.state={
            cates:[
                { id:1, cate:'a', cate_zh:'手机数码' },
                { id:2, cate:'b', cate_zh:'汽车之家' },
                { id:3, cate:'c', cate_zh:'男女之家' }
            ]
        }
    }
     // 在这里调接口
    componentDidMount(){
        // 调这个方法,被dispatch到reducer中去,在reducer中,去打印有没有收到数据
        this.props.getpinlei({})
    }
    createSelect(){
        //  cateArr:state.good.cateArr 生成cartArr
        let { cateArr } =this.props // 不是从this.state中取,而是从this.props
        return cateArr.map(ele=>(
        // mongond是_id 
        <Option key={ele._id} value={ele.cate}>{ele.cate_zh}</Option>
        ))
    }
    cateChange(val){
        // 父组件要传过来的东西 不需要e.target.value
        this.props.onChange(val)  
        console.log('cateSelect',this.props.onChange(), val)
    }
    render(){
        let  { value }=this.props
        value=value||''
        // console.log('---------------------cateSelect',value)
        return(
            // 受控表单必须要onChange
            // 自定义事件,可以是写成箭头函数的形式 onChange={(val)=>this.props.cateChange.bind(this)}
           <div>
                <Select value={value} onChange={this.cateChange.bind(this)}>
                    {this.createSelect()}
                </Select>
           </div>
        )
    }
}
// 高阶组件
export default connect(mapStateToProps,mapActionToProps)(CateSelect)