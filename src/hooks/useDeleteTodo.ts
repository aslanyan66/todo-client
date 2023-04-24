import { useMutation } from '@apollo/client'
import TodoApi from 'api/todo.api'
import { ITodo, IUniqueId } from 'models/todos'

export const useDeleteTodo = () => {
  const [deleteTodo] = useMutation(TodoApi.deleteTodo())

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
    })

  return { handleDeleteTodo }
}
