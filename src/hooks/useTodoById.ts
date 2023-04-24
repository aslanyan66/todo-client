import { useQuery } from '@apollo/client'
import TodoApi from 'api/todo.api'

export const useTodoById = (id: string) => {
  const { loading, error, data } = useQuery(TodoApi.getTodo(), {
    variables: { id },
  })

  return {
    loading,
    error,
    todo: data?.todo,
  }
}
