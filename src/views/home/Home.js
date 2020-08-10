import  React  from 'react'
import { connect } from 'react-redux'
// import  { changeMsg  }  from '@/store/actions'
// import  { changeMsg }  from '@/store/actions/testAction'
import { changeMsg,cnode } from '@/store/actions/testAction'
//  mapStateToProps是把状态管理的数据,映射进来,映射到props中 state是状态管理的state
//  把state中的数据,变成当前组件的props
function mapStateToProps(state){
    return{
        msg:state.test.msg,
        msg2:state.todo.msg,
        cnodelist:state.test.cnodelist // 定义变量
    }
}
// mapActionToProps是触发它的方法
// 把action中的方法,放在当前组件的props  通过this.props来访问
// dispatch是一个函数,这个方法的接受一个actions
function mapActionToProps(dispatch){
    return{
        xx:(playload)=>dispatch(changeMsg(playload)),
        // cnode是textaction定义的方法,我们要触发这个调接口的方法cnode(params)
        cnodeAjax:(params)=>dispatch(cnode(params)) // 发第一个action,在页面
        // changeMsg:()=>{
            // 派发action到reducer去
            // console.log('changeMsg')
        // }
        /*
            return{
                // 把action弄出去,是因为action可以复用
                xx:(playload)=>dispatch(changeMsg(playload)) { type:1,playload }
                // xx:(playload)=>dispatch(type:1,playload)
            }   
            ispatch(type:1,playload)这个结果是
            action={
            type:1,  // 1 改变msg
            playload: 'hello 2002'
        }
        */
    }
}
class Home extends React.Component{
    constructor(props){
        super(props)
        this.state={

        }
    }
    clicks(){
        this.props.xx('hello 2323322112')
    }
    // componentDidMount 调接口执行两次
    // 所有的接口都执行reducer 
    componentDidMount(){
        //  this.props {history: {…}, location: {…}, match: {…}, staticContext: undefined, msg: "hello redux", …}
        // console.log(this.props,'props-home')
        // 调接口   调用cnodeAjax这个方法,因为cnodeAjax这个方法在mapActionToProps定义了
        this.props.cnodeAjax({page:1,limit:5,tab:''})
        // getlist解决直接在这里调接口,两次的效果 getlist()
    }
    // 把请求的数据,渲染到页面上
    createCnodeList(){
       return  this.props.cnodelist.map(ele=>(
        <div key={ele.id}>{ele.title}</div>
        ))
    }
    render(){
        // console.log('-------',this.props,'122112')
        return(
            <div>
                <h1>首页</h1>
                <h1>{this.props.msg}</h1>
                <hr/>
                <h1>{this.props.msg2}</h1>
                <button onClick={this.clicks.bind(this,'hello 2323322112')}>修改msg</button>
                {/* 
                    <h1>{this.props.msg}</h1>
                    <button onClick={this.props.xx('hello 2323322112')}>修改msg</button>
                */}
                <hr/>
                {this.createCnodeList()}
            </div>
        )
    }
}
// connect(mapStateToProps,mapActionToProps)  调用第一次,得到的是一个高阶组阶 高阶组件是修饰组件的
export default connect(mapStateToProps,mapActionToProps)(Home)
// connect是高阶函数组件
// mongod --dbpath "D:\mongodb\data" 启动服务器