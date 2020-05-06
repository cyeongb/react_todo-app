import React, { useState, useRef, useCallback } from "react";
import TodoTemplate from "./components/TodoTemplate";
import TodoInsert from "./components/TodoInsert";
import TodoList from "./components/TodoList";

const App = () => {
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: "리액트의 기초",
      checked: true,
    },
    {
      id: 2,
      text: "컴포넌트 스타일링",
      checked: true,
    },
    {
      id: 3,
      text: "일정관리 앱 만들기",
      checked: false,
    },
  ]);

  // id는 고유의 값
  // ref를 이용해서 변수를 담는다.
  const nextId = useRef(4);

  const onInsert = useCallback(
    (text) => {
      const todo = {
        id: nextId.current,
        text,
        checked: false,
      };
      setTodos(todos.concat(todo));
      nextId.current += 1;
    },
    [todos]
  );

  // filter 를 이용해 지우기 구현
  const onRemove = useCallback(
    (id) => {
      setTodos(todos.filter((todo) => todo.id !== id));
    },
    [todos]
  );

  //수정기능 - onToggle 구현하기
  // 특정 id를 가지고 있는 객체의 checked값을 반전 시켜 준다.
  // todo.id 와 현재 파라미터로 사용된 id값이 같을 때만 변화를 주기 때문에
  // map을 사용해서 변화가 없을때는 그냥 todo를 반환한다.
  const onToggle = useCallback(
    (id) => {
      setTodos(
        todos.map((todo) =>
          todo.id === id ? { ...todo, checked: !todo.checked } : todo
        )
      );
    },
    [todos]
  );

  return (
    <TodoTemplate>
      <TodoInsert onInsert={onInsert} />
      <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle} />
    </TodoTemplate>
  );
};

export default App;
