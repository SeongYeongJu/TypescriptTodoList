import React from "react";
import { todoType } from "../../d";

const TodoFalse = (props: todoType) => {
  const { title, contents, isDone, id } = props;

  const delelteOnClick = () => {};
  return (
    <div key={id}>
      <h4>Done!</h4>
      <p>제목: {title}</p>
      <p>내용: {contents}</p>
      <button>삭제하기</button>
      <button>완료하기</button>
    </div>
  );
};

export default TodoFalse;
