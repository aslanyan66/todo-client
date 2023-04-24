import { Header, TodoInputForm, TodoList } from './index'

const App = () => {
  return (
    <>
      <Header />
      <div className="container">
        <TodoInputForm />
        <TodoList />
      </div>
    </>
  )
}

export default App
