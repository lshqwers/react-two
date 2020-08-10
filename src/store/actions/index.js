export function changeMsg(playload){
    // 返回一个action
    return {
        type:1,
        playload
    }
}

// 在app.js中,去引入action的方法