import Counter from "./assets/Counter"
import Unicafe from "./assets/Unicafe"
import Anecdotes from "./assets/Anecdotes"
import Todo from "./assets/Todo"

const App = () => {
  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h1>حل وظائف الأسبوع الثاني</h1>

      <hr />
      <Counter />

      <hr />
      <Unicafe />

      <hr />
      <Anecdotes />

      <hr />
      <Todo />
    </div>
  )
}

export default App