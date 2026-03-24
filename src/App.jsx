import "./App.css";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

function App() {
  return (
    <>
      <header></header>
      <main>
        <TodoForm />
        <TodoList />
      </main>
      <footer></footer>
    </>
  );
}

export default App;
