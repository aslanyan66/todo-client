import { useQuery } from '@apollo/client'
import TodoApi from 'api/todo.api'

export const useTodos = () => {
  const { data, loading, error } = useQuery(TodoApi.getTodos())

  return { todos: data?.todos || [], loading, error }
}
