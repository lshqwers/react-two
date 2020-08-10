import {  
         Todo_ADD, 
         Todo_DEL,
         Todo_UPD, 
         Todo_CLEAR 
         } 
from '../actionTypes'
// action是复用的
export function addTodo(playload){
    return{
        type: Todo_ADD,
        playload
    }
}
export function delTodo(playload){
    return{
        type: Todo_DEL,
        playload
    }
}
export function updTodo(playload){
    return{
        type: Todo_UPD,
        playload
    }
}
export function clearTodo(playload){
    return{
        type: Todo_CLEAR,
        playload
    }
}