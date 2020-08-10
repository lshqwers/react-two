import React from 'react'
// 引入样式
import './style.scss'
// 把actionType引入进来
import { addTodo, delTodo, updTodo,clearTodo } from '@/store/actions/todo'
import { connect } from 'react-redux'
// import { compose } from 'redux'
// connect要绑定两个方法
function mapStateToProps(state){
    return {
        todolist:state.todo.list
    }
}
function mapActionToProps(dispatch){
    return{
        addTodo:(playload)=>dispatch(addTodo(playload)),
        delTodo:(playload)=>dispatch(delTodo(playload)),
        updTodo:(playload)=>dispatch(updTodo(playload)),
        clearTodo:(playload)=>dispatch(clearTodo(playload)),
    }
} 
class Todo extends React.Component{
    constructor(props){
        super(props)
        this.state={
            task:'',
            list:[]
        }
    }
    componentDidMount(){
        console.log('props',this.props)
    }
    // 渲染todolist 
    createTodoList(){
        let { todolist } =this.props  // 它把
        return todolist.map(ele=>( // 把元素和index索引传过去
            <div key={ele.id} className='row'>
                <span>{ele.id}</span>
                <span>-</span>
                <span>{ele.task}</span>
                <span onClick={this.del.bind(this,ele.id)}>删除</span>
            </div>
        ))
    }
    // 删除
    del(id){
    //     下面的这种写法不是,用reducer
    //     console.log(ind,this.props.todolist)
    //     let {  todolist } = this.props
    //    var todolist1=todolist.splice(ind,1)   // 在reducer统一做,删除
    //     this.setState({
    //         todolist:todolist1
    //     })
    // splice(ind,1) 
        console.log(id)
        this.props.delTodo(id)   // props有reducer的所有方法
    }
    // 清除todo 
    clearTodo(){
        this.props.clearTodo()   // 直接调用reducer的方法
    } 
    // 受控表单(取值)
    inputChange(e){
        // setState是异步的
        this.setState({
            task:e.target.value
        })
    }
    // 添加todo 
    inputEnter(e){
        let { task }= this.state
        if(e.keyCode===13){
            console.log('enter')
            // 添加一条todo
            // dispatch一个addtodo
            this.props.addTodo({id:Date.now(),task})
            this.setState({
                task:'' // 在reducer中去添加push
            })
        }
    }
    render(){
        // 把task解构
        let { task } =this.state
        return(
            <div>
                <h1>todolist</h1>
                <input 
                      value={task} 
                      onChange={this.inputChange.bind(this)}
                      onKeyUp={this.inputEnter.bind(this)}
                      type="text"
                />
                {this.createTodoList()}
                <button onClick={this.clearTodo.bind(this)}>清除所有的</button>
            </div>
        )
    }
}

export default connect(mapStateToProps,mapActionToProps)(Todo)