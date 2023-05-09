import { useApolloClient, useSubscription } from '@apollo/client'
import TodoApi from 'api/todo.api'
import { ITodo } from 'models/todos'
import { TODO_INFO } from 'api/fragments/todo.fragments'
import { useSnackbar } from './index'

const updateTodoListOnAdd = ({ id, title, isCompleted }: ITodo) => ({
  id: `${id}`,
  fragment: TODO_INFO,
  data: { id, title, isCompleted },
})

export const useTodoSubscriptions = () => {
  const { showError, open: showMessage } = useSnackbar()

  const client = useApolloClient()
  useSubscription(TodoApi.todoAddedSubscription(), {
    onData({ client: { cache }, data }) {
      const { todoAdded } = data.data
      const cachedList = cache.readQuery<{ todos: ITodo[] }>({
        query: TodoApi.getTodos(),
      })

      const todoExits = cachedList?.todos.some(({ id }: ITodo) => id === todoAdded.id)

      if (todoExits) {
        cache.writeFragment(updateTodoListOnAdd(todoAdded))
      } else {
        client.refetchQueries({ include: [TodoApi.getTodos()] })
      }
      showMessage({ message: 'Added random todo!', severity: 'info' })
    },
    onError: (error) => showError(error.message),
  })
}
