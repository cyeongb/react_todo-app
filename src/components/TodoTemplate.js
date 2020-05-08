import React, { Fragment } from "react";
import "./TodoTemplate.scss";

/* TodoTemplate 
 화면을 가운데로 정렬시켜 주고 , 일정 관리를 보여준다.
 children으로 내부 JSX를 props로 받아와서 렌더링 해 준다.
*/

const TodoTemplate = ({ children }) => {
  return (
    <div className="TodoTemplate">
      <div className="app-title"> 일정 관리</div>
      <div className="content">{children}</div>
    </div>
  );
};

export default TodoTemplate;
