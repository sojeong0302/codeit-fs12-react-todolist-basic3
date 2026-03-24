function TodoItem({ title, completed, createdAt, id }) {
  return (
    <>
      <p>{title}</p>
      <p>{completed}</p>
      <p>{createdAt}</p>
      <button>완료</button>
      <button
        onClick={function (id) {
          try {
            fetch(`http://localhost:4000/todos/${id}`, {
              method: "DELETE",
              headers: {
                "Content-Type": "application/json",
              },
            });
          } catch (error) {
            console.log(error);
          }
        }}
      >
        삭제
      </button>
    </>
  );
}

export default TodoItem;
