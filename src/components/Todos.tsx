import React, { FC, Fragment } from "react";
import classes from "./Todos.module.css";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "./store/store";
import { todosActions } from "./store/todosSlice";
const Todos: FC = () => {
  interface Todo {
    id: string;
    title: string;
  }
  const todos = useSelector((state: RootState) => state.todo.items);
  console.log(todos);
  
  const dispatch = useDispatch();
  const deleteHandler = (id: string) => {
    dispatch(todosActions.removeTodo(id));
  };
  return (
    <Fragment>
      <div className={classes.container}>
        {todos.map((todo) => (
          <div className={classes.card} key={todo.id}>
            <p>{todo.title}</p>
            <button onClick={() => deleteHandler(todo.id)}>Delete</button>
          </div>
        ))}
      </div>
    </Fragment>
  );
};

export default Todos;
