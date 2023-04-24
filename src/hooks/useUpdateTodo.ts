import { useMutation } from '@apollo/client'
import TodoApi from 'api/todo.api'
import { ITodo } from 'models/todos'

export const useUpdateTodo = () => {
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
    onError: (error) => {
      console.log(error.message)
    },
  })

  const handleUpdateTodo = (variables: ITodo) => {
    return updateTodo({
      variables,
      optimisticResponse: {
        updateTodo: {
          __typename: 'Todo',
          ...variables,
        },
      },
    })
  }

  return { handleUpdateTodo }
}
