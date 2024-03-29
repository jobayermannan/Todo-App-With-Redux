import TodoCard from "./TodoCard";

import AddTodoModal from "./AddTodoModal";
import TodoFilter from "./TodoFilter";
import { useAppSelector } from "@/Redux/features/hook";
import { useGetTodosQuery } from "@/Redux/features/api/api";
import { JSX } from "react/jsx-runtime";

const TodoContainer = () => {

  //*From Server
    const {data:todos,isError,isLoading} =useGetTodosQuery(undefined,{pollingInterval:1000});
    console.log(todos)

    if(isLoading){
      return <p>Loading...</p>
    }


  //* //local State
  // const { todos } = useAppSelector((state) => state.todos);
  return (
    <div>
      <div className="flex justify-between mb-5">
        <AddTodoModal></AddTodoModal>
        <TodoFilter></TodoFilter>
      </div>
      <div className=" bg-primary-gradient p-2 w-full h-full rounded-xl  ">
      
       
        
        <div className="bg-white p-5 space-y-3  w-full h-full rounded-lg">
          {todos?.data?.map((item: JSX.IntrinsicAttributes & { id: string; title: string; description: string; isCompleted?: boolean | undefined; priority: string; }) => (
            <TodoCard key={item.id}  {...item}></TodoCard>
          ))}
        </div>
    

    
        
      </div>
    </div>
  );
};

export default TodoContainer;


