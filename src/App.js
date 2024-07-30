import { useState, useRef } from "react";
import TodoList from "./TodoList";

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

  }

  // リターンタグの一番外側にはdivを入れないと反映されない
  return (<div>
    {/* コンポーネントの部分にA={B}と記載することでAという名前でBを渡すという意味 */}
    {/* このコンポーネントが読み込まれるところで受け取る必要もある */}
    <TodoList todos={todos} />
    <input type="text" ref={todoNameRef} />
    <button onClick={handleAddTodo}>タスクを追加</button>
    <button>完了したタスクの削除</button>
    <div>残りのタスクを表示:0</div>
  </div>);
}

export default App;
