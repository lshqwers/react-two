import React from 'react';
import 'antd/dist/antd.css'; 
// 创建reducer   安装  cnpm i reducer -S
// react-redux 把reducer编写的store,和应用关联起来 cnpm i react-redux  store和react 
import  { Provider } from 'react-redux'
import  store from '@/store'
// import  { Home } from './views'
import  { Todo } from './views'
function App() {
  return (
    // Provider是上下文
    <Provider store={store}>
    <div className="App">
      <header className="App-header">
        <h1 className="tit">
          hello world
        </h1>
        {/* <Home></Home> */}
        <Todo></Todo>
      </header>
    </div>
    </Provider>
  );
}

export default App;
// 注意这里的是reducer使用的app.js
