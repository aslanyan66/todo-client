import { useMutation } from '@apollo/client'
import TodoApi from 'api/todo.api'
import { ITodo, ITodoUpdateAction } from 'models/todos'
import { useSnackbar } from './index'

export const useUpdateTodo = () => {
  const { showError, open: showMessage } = useSnackbar()

  const [updateTodo] = useMutation(TodoApi.updateTodo(), {
    update(cache, { data: { updateTodo } }) {
      cache.modify({
        id: cache.identify(updateTodo),
        fields: {
          isCompleted() {
            return updateTodo.isCompleted
          },
          title() {
            return updateTodo.title
          },
        },
      })
    },
  })

  const handleTodoUpdate = (todo: ITodo, actionName: ITodoUpdateAction) => {
    return updateTodo({
      variables: {
        ...todo,
        action: actionName,
      },
      optimisticResponse: {
        updateTodo: {
          __typename: 'Todo',
          ...todo,
        },
      },
      onError: (error) => showError(error.message),
      onCompleted: () => showMessage({ message: 'Updated!', severity: 'success' }),
    })
  }

  return { handleTodoUpdate }
}
