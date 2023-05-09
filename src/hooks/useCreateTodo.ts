import { useMutation } from '@apollo/client'
import { v4 as uuidv4 } from 'uuid'
import TodoApi from 'api/todo.api'
import { TODO_INFO } from 'api/fragments/todo.fragments'
import { useSnackbar } from './index'

export const useCreateTodo = () => {
  const { showError, open: showMessage } = useSnackbar()

  const [createTodo] = useMutation(TodoApi.createTodo(), {
    update(cache, { data: { createTodo } }) {
      cache.modify({
        fields: {
          todos(existingTodos = []) {
            const newTodoRef = cache.writeFragment({
              data: createTodo,
              fragment: TODO_INFO,
            })
            return [newTodoRef].concat(existingTodos)
          },
        },
      })
    },
  })

  const handleCreateTodo = (title: string) =>
    createTodo({
      variables: { title, isCompleted: false },
      optimisticResponse: {
        createTodo: {
          id: uuidv4(),
          __typename: 'Todo',
          title,
          isCompleted: false,
        },
      },
      onError: (error) => showError(error.message),
      onCompleted: () => showMessage({ message: 'Created!', severity: 'success' }),
    })

  return { handleCreateTodo }
}
