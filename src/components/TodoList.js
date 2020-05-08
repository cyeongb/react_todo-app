import React from "react";
import TodoListItem from "./TodoListItem";
import "./TodoList.scss";

/* TodoList
  todos배열을 props로 받아온 후 
  내장 배열함수 map을 사용해서 여러개의 TodoListItem 컴포넌트로 변환해서 보여준다.
*/

const TodoList = ({ todos, onRemove, onToggle }) => {
  return (
    <div className="TodoList">
      {todos.map((todo) => (
        <TodoListItem
          todo={todo}
          key={todo.id}
          onRemove={onRemove}
          onToggle={onToggle}
        />
      ))}
    </div>
  );
};

export default TodoList;
