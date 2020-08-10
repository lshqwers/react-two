import loadable from '@loadable/component'
// 动态加载路由
const Home = loadable(() => import('./home/Home'))
const Good = loadable(() => import('./good/Good'))
const GoodAdd = loadable(() => import('./good/GoodAdd'))
const Todo = loadable(()=>import('./todo/Todo'))
// const Login =loadable(()=>import('@/components) 这是错误的路径
const Login =loadable(()=>import('@/components/login/login')) 
// 下面是写好的路由,这种写好方便路由的递归
export default [
    {
        id: 1,
        title: '统计概况',
        children: [
            {
                id: 10,
                path:'/',
                component:Home,
                text:'首页统计',
            },
            {
                id: 101,
                path:'/dis',
                // component:,
                text:'数据展示',
            }
        ]
    },
    {
        id:2,
        title:'测试管理',
        children:[
            {
                id:20,
                path:'/todo',
                component: Todo,
                text:'todolist'            
            },
            {
                id:2010,
                path:'/todo/logins',
                component:Login,
                text:'login'
            }
        ]
    },
    {
        id:3,
        title:'商品管理',
        children:[
            {
                id:301,
                path:'/good',
                component:Good,
                text:'商品列表',
            },
            {
                id:3010,
                path:'/good/add',
                component:GoodAdd,
                text:'商品添加'
            }
        ]
    }
]