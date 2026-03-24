import { useEffect, useState } from "react";
import TodoItem from "./TodoItem";

function TodoList() {
  const [todo, setTodo] = useState([]);
  useEffect(() => {
    async function getTodo() {
      try {
        const response = await fetch("http://localhost:4000/todos", {
          method: "GET",
        });
        const result = await response.json();
        setTodo(result);
      } catch (error) {
        console.log(error);
      }
    }

    getTodo();
  }, []);

  return (
    <>
      <section>
        <p> ── 할일 목록 ──</p>
        {todo.map(function (t) {
          if (t.completed === false)
            return (
              <div key={t.id}>
                <section>
                  <TodoItem
                    id={t.id}
                    title={t.title}
                    completed={t.completed}
                    createdAt={t.createdAt}
                  />
                </section>
              </div>
            );
        })}
      </section>

      <section>
        <p> ── 완료 목록 ──</p>
        {todo.map(function (t) {
          if (t.completed === true)
            return (
              <div key={t.id}>
                <section>
                  <TodoItem
                    id={t.id}
                    title={t.title}
                    completed={t.completed}
                    createdAt={t.createdAt}
                  />
                </section>
              </div>
            );
        })}
      </section>
    </>
  );
}

export default TodoList;
