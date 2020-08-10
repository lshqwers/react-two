// 统一的出口
import loadable from '@loadable/component'
// 动态加载
// import Home from './home'
const Home=loadable(()=>import('./home/Home'))
const Todo=loadable(()=>import('./todo/Todo'))
export {
    Home,
    Todo
}