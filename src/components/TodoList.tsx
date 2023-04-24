import Todo from './TodoItem'
import { useTodos, useTodoSubscriptions } from 'hooks'
import { ITodo } from 'models/todos'
import { Box, CircularProgress } from '@mui/material'

const TodoList = () => {
  const { todos, loading } = useTodos()
  useTodoSubscriptions()

  return (
    <ul className="todos">
      {loading ? (
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            with: '100%',
            height: '100%',
          }}
        >
          <CircularProgress />
        </Box>
      ) : (
        todos.map((todo: ITodo) => <Todo key={todo.id} {...todo} />)
      )}
    </ul>
  )
}

export default TodoList
