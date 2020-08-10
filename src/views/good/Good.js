import React from 'react'
// import moment from 'moment';
// import { CateSelect } from '@/components'
import img from '@/utils/img'
import '@/assets/style/style.scss'
import {
    Table,
    Divider,
    Row,
    Col,
    Input,
    DatePicker,
    Modal,
    Button  
} from 'antd';
import { CateSelect }  from '@/components'
const { RangePicker } = DatePicker;
// function  onChange(dates, dateStrings) {
//     console.log('From: ', dates[0], ', to: ', dates[1]);
//     console.log('From: ', dateStrings[0], ', to: ', dateStrings[1]);
// }
// import { CateSelect } from '@/components'
export default class Good extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            cate:'', // 初始值为空
            visible:false, // 默认为false
            bol:false,
            data: [
                {
                    key: '1',
                    name: 'John Brown',
                    age: 32,
                    address: 'New York No. 1 Lake Park',
                    tags: ['nice', 'developer'],
                },
                {
                    key: '2',
                    name: 'Jim Green',
                    age: 42,
                    address: 'London No. 1 Lake Park',
                    tags: ['loser'],
                }
            ]
        }
    }
    // 品类筛选
    cateFilter(val){
     this.setState({
         cate:val
     })
    //  调接口进行筛选   this.props.cateFilter
    }
    //  日期筛选
    //  定义好的方法,不能使用在外面定义 
    dateFilter(dates){
        console.log('dates',dates)
        console.log(dates[0],)
        let startTime=dates[0].format('YYY-MM-DD HH:mm:ss')
        let endTime=dates[1].valueOf()
        // YYYY-MM-DD HH:mm:ss
        // 做一些时间格式化的处理工作
        // 调接口进行筛选
        console.log(startTime,endTime)
    }
    // 表格行的操作
    tableRowHandle(type,row){
        switch(type){
            case 'edit':
            this.setState({visible:true,row:row,bol:true})
            break;
            default:
        }
    }
    skip(){
        this.props.history.push('/good/add')
    }
    // 编辑弹框
    modelBtnClick(type){
        switch(type){
            case 'ok':
            // 提交接口
            this.setState({visible: false,bol:true})
            break;
            case 'cancel':
            // 取消弹框
            this.setState({visible:false})
            break;
            default:
        }
    }

    // remder组件内部,外包部的内容不可控制
    render() {
        const { data,cate,visible,row,bol } = this.state
        // console.log(row,'wwww')
        // 定义的内容部
        const columns = [
            {
                title: 'Name',
                dataIndex: 'name',
                key: 'name',
                // render是渲染图片,渲染各种的内容
                render:(text,row,index)=>{
                    // console.log(row,'rowx')
                    return(
                        <div>
                            <img style={{ display: 'inline-block', width: '50px', height: '50px' }}
                            src={img.abc} alt=''/>
                            <div>{text}</div>
                        </div>
                    )
                }
            },
            {
                title: 'Age',
                dataIndex: 'age',
                key: 'age'
            },
            {
                title: 'Address',
                dataIndex: 'address',
                key: 'address'
            },
            {
                title: '操作',
                dataIndex: 'handle',
                key: 'handle',
                render: (text, row) => {
                    // console.log(row,'row1qwqww')
                    return (
                        <div className='table-handle'>
                            {/* eslint-disable */}
                            <a onClick={this.tableRowHandle.bind(this,'edit', row)}
                            >编辑</a>
                            {/* 样式是驼峰命名法  href={{javascript:0}}*/}
                            <a style={{ paddingLeft: '10px' }}>删除</a>
                            {/* eslint-enable */}
                        </div>
                    )
                }
            },
        ];
        return ( 
            <div> 
                <div style={{marginTop:'20px',marginLeft:'0px'}}>  
                     <Button onClick={this.skip.bind(this)} size="small">新增</Button>
                </div>
                <>
                    {/* 有线,注意背景的颜色*/}
                    <Divider>商品列表</Divider>
                </>
                <div style={{ marginTop: '20px', marginBottom: '20px' }}>
                    {/*
                        row表示行 col表示列  Grid栅格,进行布局
                         align='middle'中部对齐
                    */}
                    <Row align='middle'>
                        <Col span={2}>
                           <span>搜索名称:</span> 
                        </Col>
                        <Col span={3}>
                            {/* 要引入input */}
                           <Input allowClear={true}></Input>
                        </Col>
                        {/* span是它的宽度 */}
                        <Col span={2}>
                            <span>品类筛选:</span> 
                        </Col>
                        {/* 下拉框 */}
                        <Col span={4}>
                            {/* 调用组件，CateSelect是自定义的组件,封装的时候,给了value */}
                            <CateSelect  style={{width:'100%'}} value={cate} onChange={this.cateFilter.bind(this)}></CateSelect>
                        </Col>
                    </Row>
                    {/*  用row来换行  */}  
                    <Row align='bottom'>
                        <Col span={2}>
                            <span>日期选择:</span>
                        </Col>
                        <Col span={8} style={{marginTop:'20px'}}>
                            <RangePicker
                                format='YYYY-MM-DD HH:mm:ss'
                                showTime
                                onChange={this.dateFilter.bind(this)}
                        />
                        </Col>  
                    </Row>
                </div>
                {/* 表格的显示,表格中自带分页器显示 */}
                <Table columns={columns} dataSource={data}></Table>
                {/* 弹框功能 */}
                <Modal
                title="商品操作"
                visible={visible}
                // modelBtnClick方法的复用
                onOk={this.modelBtnClick.bind(this,'ok')}
                onCancel={this.modelBtnClick.bind(this,'cancel')}
                >
                <p>{bol?row.name:""}</p>
                <p>{bol?row.address:""}</p>
                {/* <p>{this.state.row}</p> */}
                </Modal>
            </div>
        )
    }
}
// 能用函数组件的尽量使用函数组件，这样可以避免 class 组件继承大量无关的内容。 
// 6.子组件视图选择性更新，只有当组件的 state 或者 props 发生改变时才更新，这样可以避免 
// 页面不必要的渲染带来的性能消耗 
// 7.路由缓存，一些组件的数据在一段时间内不会更新，我们可以进行缓存，这样可以避免每 
// 次进入页面时，反复请求数据，浪费性能