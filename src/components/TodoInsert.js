import React, { useState, useCallback } from "react";
import { MdAdd } from "react-icons/md";
import "./TodoInsert.scss";

/*TodoInsert 
  새로운 항목을 입력하고 추가할 수 있는 컴포넌트
  state를 통해 input의 상태를 관리한다.
  */

const TodoInsert = ({ onInsert }) => {
  const [value, setValue] = useState("");

  const onChange = useCallback((e) => {
    setValue(e.target.value);
  }, []);

  // onClick 해도되는데 onSubmit으로 값을 전달하는 이유:
  // onSubmit 은 엔터를 쳐도 실행이 되기 때문.
  const onSubmit = useCallback(
    (e) => {
      onInsert(value);
      setValue(""); //value값 초기화

      //submit은 브라우저에서 새로고침을 발생시키므로
      e.preventDefault();
    },
    [onInsert, value]
  );

  return (
    <form className="TodoInsert" onSubmit={onSubmit}>
      <input
        placeholder="할일을 입력 하세요"
        value={value}
        onChange={onChange}
      />
      <button type="submit">
        <MdAdd />
      </button>
    </form>
  );
};

export default TodoInsert;
