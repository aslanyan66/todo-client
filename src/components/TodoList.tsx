import { useSnackbar, useTodos, useTodoSubscriptions } from 'hooks'
import { ITodo } from 'models/todos'
import { Loader, Todo } from './index'

const TodoList = () => {
  const { todos, loading, error } = useTodos()
  const { showError } = useSnackbar()

  useTodoSubscriptions()

  if (error) {
    showError(error.message)
    return null
  }

  if (loading) return <Loader />

  return (
    <ul className="todos">
      {todos.map((todo: ITodo) => (
        <Todo key={todo.id} {...todo} />
      ))}
    </ul>
  )
}

export default TodoList
