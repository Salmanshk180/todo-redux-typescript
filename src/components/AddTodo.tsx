import React, { FC, FormEvent, Fragment, useState } from "react";
import classes from "./AddTodo.module.css";
import { useDispatch } from "react-redux";
import { todosActions } from "./store/todosSlice";
const AddTodo: FC = () => {
  const [todo, setTodo] = useState<string>("");
  const dispatch = useDispatch();
  const submitHandler = (e: FormEvent) => {
    e.preventDefault();
    const id = Math.random() * 100;
    dispatch(todosActions.addTodo({ id: id.toFixed(2), title: todo }));
    setTodo("");
  };
  return (
    <Fragment>
      <div className={classes.container}>
        <form className={classes.input_form} onSubmit={submitHandler}>
          <input
            type="text"
            placeholder="Enter Todo"
            value={todo}
            onChange={(e) => {
              setTodo(e.target.value);
            }}
          />
          <button type="submit">Add</button>
        </form>
      </div>
    </Fragment>
  );
};

export default AddTodo;
