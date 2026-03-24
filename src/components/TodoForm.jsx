import { useEffect, useState } from "react";

function TodoForm() {
  const [title, setTitle] = useState("");

  const addButton = async function addClickButton() {
    try {
      const response = await fetch("http://localhost:4000/todos", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title,
          completed: false,
          createdAt: new Date().toISOString(),
        }),
      });
      return response.json();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <input
        type="text"
        onChange={function (e) {
          setTitle(e.target.value);
        }}
      />
      <button onClick={addButton}>추가</button>
    </>
  );
}

export default TodoForm;
