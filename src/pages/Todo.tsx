import TodoContainer from "@/components/Todo/TodoContainer";
import Container from "@/components/ui/container";
import { ReactNode } from "react";

const Todo = () => {
  return (
    <Container>
      <h1 className="text-3xl font-semibold text-center my-10"> My Todos </h1>
      <TodoContainer></TodoContainer>
    </Container>
  );
};

export default Todo;
