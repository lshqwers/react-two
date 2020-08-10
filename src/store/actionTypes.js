// 把整个应用程序中,所有的action,type都写在这里 action是给dispatch使用  type是给reducer使用
export const CHANGE_MSG='800'
// 下面是用action的增删改
export const Todo_ADD='Todo_ADD'
export const Todo_DEL='Todo_DELL'
export const Todo_UPD='Todo_UPD'
export const Todo_CLEAR='Todo_CLEAR'
// 封装actionType,如果有相同的变量,直接会报错,保证action Type是唯一的,不重突和重复
// 可以保证 action Type永远不会重复和冲突
// 给action的使用和reducer使用

// cnode调接口的方法
export const CNODE_LIST = 'CNODE_LIST'  // 在外面用
// 定义常量,避免冲突
export const GET_CATES='GET_CATES'