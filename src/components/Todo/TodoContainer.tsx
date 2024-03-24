import React from "react";
import TodoCard from "./TodoCard";
import { Button } from "../ui/button";
import AddTodoModal from "./AddTodoModal";
import TodoFilter from "./TodoFilter";

const TodoContainer = () => {
  return (
    <div>
      <div className="flex justify-between mb-5">
        <AddTodoModal></AddTodoModal>
        <TodoFilter></TodoFilter>
      </div>
      <div className=" bg-primary-gradient p-2 w-full h-full rounded-xl  ">
        {/* <div className="bg-white p-3 flex justify-center items-center rounded-md text-2xl font-bold ">
          <p>There is no Task Pending</p>
        </div> */}
        <div className="bg-white p-5 space-y-3  w-full h-full rounded-lg">
          <TodoCard></TodoCard>
          <TodoCard></TodoCard>
          <TodoCard></TodoCard>
          <TodoCard></TodoCard>
        </div>
      </div>
    </div>
  );
};

export default TodoContainer;
