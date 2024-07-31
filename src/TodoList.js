import React from 'react'
import Todo from './Todo';

// ここで（）の中身に好きな名前を割り当て、文中で｛｝を使って取り出せる
// {}はこの中でJsを書けるということ<php?みたいなもの
// 今回は({todes})で直接todosを渡している
const TodoList = ({ todos, toggleTodo }) => {
    // mapは配列の中身を一つずつ取り出す
    // 取り出した値をTodo.jsに送っている
    // mapで送る際にはそれぞれのオブジェクトを識別するためのkeyをつける
    return todos.map((todo) => <Todo todo={todo} key={todo.id} toggleTodo={toggleTodo} />);
};

export default TodoList;