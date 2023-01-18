import React from "react";
import { isTemplateExpression } from "typescript";
import { PropsType, todoType } from "../../d";
import TodoFalse from "../todo/TodoFalse";
import TodoTrue from "../todo/TodoTrue";

const TodoList = (props: todoType, { todos, setTodos }: PropsType) => {
  const { title, contents, isDone, id } = props;
  return (
    <div>
      <div>
        <TodoFalse title={title} contents={contents} isDone={isDone} id={id} />
      </div>

      <div>
        <TodoTrue title={title} contents={contents} isDone={isDone} id={id} />
      </div>
    </div>
  );
};

export default TodoList;
