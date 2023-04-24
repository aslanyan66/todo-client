import { useMutation } from '@apollo/client'
import TodoApi from 'api/todo.api'
import { TODO_INFO } from 'api/fragments/todo.fragments'

export const useCreateTodo = () => {
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
    onError: (error) => {
      console.log(error.message)
    },
  })

  const handleCreateTodo = (title: string) =>
    createTodo({
      variables: { title, isCompleted: false },
      optimisticResponse: {
        createTodo: {
          id: 'temp-id',
          __typename: 'Todo',
          title,
          isCompleted: false,
        },
      },
    })

  return { handleCreateTodo }
}
