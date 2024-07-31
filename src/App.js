import { useState, useRef } from "react";
import TodoList from "./TodoList";
import { v4 as uuid4 } from "uuid";

function App() {
  // useStateは変数を監視するのに使われる
  // todoの中にはname,id,completedのようなオブジェクトを格納する
  // const[A,B] =useState();はAが更新された際に再レンダリングされる。(リロードされる)
  const [todos, setTodos] = useState([
    { id: 1, name: "Todo1", completed: false },
    { id: 2, name: "Todo2", completed: false },]);

  // inputタイプの中にref={todoNameRef}と記載したものを取得できる
  const todoNameRef = useRef();

  const handleAddTodo = () => {
    // タスクを追加する
    const name = todoNameRef.current.value;
    if (name === "") return;
    setTodos((prevTodos) => {
      // prevTodosに右側の値を追加する
      // ...はスプレッド構文という
      //       const foo = [1, 2];

      // // 配列のクローン
      // const bar = [...foo]; // => [1, 2]

      // // 要素を追加して新しい配列を生成
      // const baz = [...foo, 3, 4]; // => [1, 2, 3, 4]

      // // 配列をマージ
      // const hoge = [...foo, ...bar]; // => [1, 2, 1, 2]
      return [...prevTodos, { id: uuid4(), name: name, completed: false }];
    });
    todoNameRef.current.value = null;
  }

  const toggleTodo = (id) => {
    const newTodos = [...todos];
    //todoにnweTodosの中から一つずつtodoとして取り出し、todo.idとidが一致していたらtodoに入れる
    const todo = newTodos.find((todo) => todo.id === id);
    todo.completed = !todo.completed;
    setTodos(newTodos);
  };

  const handleClear = () => {
    const newTodos = todos.filter((todo) => !todo.completed)
    setTodos(newTodos);
  }

  // リターンタグの一番外側にはdivを入れないと反映されない
  return (<div>
    {/* コンポーネントの部分にA={B}と記載することでAという名前でBを渡すという意味 */}
    {/* このコンポーネントが読み込まれるところで受け取る必要もある */}
    <TodoList todos={todos} toggleTodo={toggleTodo} />
    <input type="text" ref={todoNameRef} />
    <button onClick={handleAddTodo}>タスクを追加</button>
    <button onClick={handleClear}>完了したタスクの削除</button>
    {/* アロー関数でfilter関数でtodoのなかでコンプリートじゃないものの長さ */}
    <div>残りのタスクを表示:{todos.filter((todo) => !todo.completed).length}</div>
  </div>);
}

export default App;
