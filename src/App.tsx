import React, { useState } from "react";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import "./App.css";
import TodoList from "./components/todoList/TodoList";
import { todoType } from "./d";

const initialState: todoType[] = [
  {
    id: 1,
    title: "제목입니다1",
    contents: "내용입니다1",
    isDone: false,
  },
  {
    id: 2,
    title: "제목입니다2",
    contents: "내용입니다2",
    isDone: false,
  },
  {
    id: 3,
    title: "제목입니다3",
    contents: "내용입니다3",
    isDone: true,
  },
];

function App() {
  const [todos, setTodos] = useState(initialState);
  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");

  const titleChangeHandler = (event: React.FormEvent<HTMLInputElement>) => {
    const {
      currentTarget: { value },
    } = event;

    setTitle(value);
  };

  const contentsChangeHandler = (event: React.FormEvent<HTMLInputElement>) => {
    const {
      currentTarget: { value },
    } = event;

    setContents(value);
  };

  const onSubmitTodos = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const todoId = Math.floor(Math.random() * 100);

    const newTodo: todoType = {
      id: todoId,
      title,
      contents,
      isDone: false,
    };

    setTodos([...todos, newTodo]);
    setTitle("");
    setContents("");
  };

  return (
    <>
      <Header />
      <div className="main-container">
        <div>My TodoList</div>
        <div>
          <form onSubmit={onSubmitTodos}>
            <span>제목: </span>
            <input
              type="text"
              placeholder="제목을 입력하세요."
              onChange={titleChangeHandler}
              value={title}
            />
            <span>내용: </span>
            <input
              type="text"
              placeholder="내용을 입력하세요."
              onChange={contentsChangeHandler}
              value={contents}
            />
            <button>My Todo 입력하기</button>
          </form>
        </div>
        {todos.map((item) => {
          return (
            <TodoList
              id={item.id}
              title={item.title}
              contents={item.contents}
              isDone={item.isDone}
            />
          );
        })}
      </div>
      <Footer />
    </>
  );
}

export default App;
