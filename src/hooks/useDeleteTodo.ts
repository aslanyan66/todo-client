import { useMutation } from '@apollo/client'
import TodoApi from 'api/todo.api'
import { ITodo, IUniqueId } from 'models/todos'
import { useSnackbar } from './index'

export const useDeleteTodo = () => {
  const [deleteTodo] = useMutation(TodoApi.deleteTodo())
  const { showError, open: showMessage } = useSnackbar()

  const handleDeleteTodo = (id: IUniqueId) =>
    deleteTodo({
      variables: { id },
      update(cache) {
        const normalizedId = cache.identify({ id, __typename: 'Todo' })
        cache.evict({ id: normalizedId })
        cache.gc()
      },
      optimisticResponse: ({ id }: Partial<ITodo>) => ({
        deleteTodo: {
          __typename: 'Todo',
          id,
        },
      }),
      onError: (error) => showError(error.message),
      onCompleted: () => showMessage({ message: 'Removed!', severity: 'success' }),
    })

  return { handleDeleteTodo }
}
