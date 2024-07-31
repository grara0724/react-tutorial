import { useState, useRef } from "react";
import TodoList from "./TodoList";
import { v4 as uuid4 } from "uuid";

function App() {
  // 初期のTodoリストを生成する関数
  const initialTodos = [
    { id: uuid4(), name: "Todo1", completed: false },
    { id: uuid4(), name: "Todo2", completed: false },
  ];

  // todos: 現在のTodoリストの状態を保持
  // setTodos: Todoリストの状態を更新する関数
  const [todos, setTodos] = useState(initialTodos);

  // todoNameRef: input要素への参照を保持
  const todoNameRef = useRef();

  // 新しいTodoを追加する関数
  const handleAddTodo = () => {
    const name = todoNameRef.current.value; // 入力されたタスク名を取得

    // 空のタスク名の場合は何もしない
    if (name === "") return;

    // 新しいTodoを既存のリストに追加
    setTodos((prevTodos) => {
      return [...prevTodos, { id: uuid4(), name: name, completed: false }];
    });

    // 入力フィールドをクリア
    todoNameRef.current.value = null;
  };

  // Todoの完了状態を切り替える関数
  const toggleTodo = (id) => {
    const newTodos = [...todos]; // 現在のTodoリストをコピー
    const todo = newTodos.find((todo) => todo.id === id); // idが一致するTodoを見つける

    // 該当するTodoが存在する場合、完了状態を切り替える
    if (todo) {
      todo.completed = !todo.completed;
      setTodos(newTodos); // Todoリストを更新
    }
  };

  // 完了したTodoを削除する関数
  const handleClear = () => {
    const newTodos = todos.filter((todo) => !todo.completed); // 未完了のTodoのみを残す
    setTodos(newTodos); // Todoリストを更新
  };

  // アプリケーションのUIをレンダリング
  return (
    <div>
      {/* Todoリストコンポーネントに現在のTodoリストとtoggleTodo関数を渡す */}
      <TodoList todos={todos} toggleTodo={toggleTodo} />

      {/* 新しいTodoを入力するためのテキストボックス */}
      <input type="text" ref={todoNameRef} />

      {/* 新しいTodoを追加するボタン */}
      <button onClick={handleAddTodo}>タスクを追加</button>

      {/* 完了したTodoを削除するボタン */}
      <button onClick={handleClear}>完了したタスクの削除</button>

      {/* 未完了のTodo数を表示 */}
      <div>残りのタスクを表示: {todos.filter((todo) => !todo.completed).length}</div>
    </div>
  );
}

export default App;
