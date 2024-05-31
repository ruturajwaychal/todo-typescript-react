import AddTodo from "./components/AddTodo"
import Navbar from "./components/Navbar"
import Todos from "./components/Todos"
import "./App.css"

const App = () => {
  return (
    <>
    <main>
      <h1>ToDO Typescript</h1>
      <Navbar />
      <AddTodo />
      <Todos />
    </main>
    </>
  )
}

export default App