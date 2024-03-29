import { FormEvent, useState } from "react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { Button } from "../ui/button";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { useAppDispatch,  } from "@/Redux/features/hook";
import { addTodo } from "@/Redux/features/todoSlice";
import { useAddTodoMutation } from "@/Redux/features/api/api";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "../ui/select";


const AddTodoModal = () => {
  const [task, setTask] = useState("");
  const [description, setDescription] = useState("");
  const [priority, setPriority] = useState("");

  console.log(priority)

  //!For local state management
  // const dispatch = useAppDispatch();



  //^ For server
  //*[actualFunctionForPost,{data,isLoading,isError}]
  const[addTodo,{data,isLoading,isError,isSuccess}] =useAddTodoMutation()

  console.log({data,isLoading,isSuccess,isError})
  

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();

    // const randomString = Math.random().toString(36).substring(2, 7);

    const taskDetails = {
      // id: randomString,
      title: task,
      description ,
      isCompleted:false,
      priority
     
      
    };

    // console.log(taskDetails); 
    //! for local state management
    // dispatch(addTodo(taskDetails));

    console.log("InsideModal", taskDetails)

    //*For server
    addTodo(taskDetails)
  };
  return (
    <div>
      <Dialog>
        <DialogTrigger asChild>
          <Button className="bg-primary-gradient font-semibold text-lg">
            Add Todo
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Add Task</DialogTitle>
            <DialogDescription>
              Add your task that you want to finish
            </DialogDescription>
          </DialogHeader>
          <form onSubmit={onSubmit} className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="task" className="text-right">
                Task
              </Label>
              <Input
                onBlur={(e) => setTask(e.target.value)}
                id="task"
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="description" className="text-right">
                Description
              </Label>
              <Input
                onBlur={(e) => setDescription(e.target.value)}
                id="description"
                className="col-span-3"
              />
              
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label  className="text-right">
                Priority
              </Label>
              <Select onValueChange={(value)=>setPriority(value)}>
      <SelectTrigger className="col-span-3">
        <SelectValue placeholder="Select Priority" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Priority</SelectLabel>
          <SelectItem value="High">High</SelectItem>
          <SelectItem value="Medium">Medium</SelectItem>
          <SelectItem value="Low">Low</SelectItem>
       
        </SelectGroup>
      </SelectContent>
    </Select>
           

            </div>

            <DialogFooter>
              <DialogClose asChild>
                <Button type="submit">Save changes</Button>
              </DialogClose>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default AddTodoModal;
