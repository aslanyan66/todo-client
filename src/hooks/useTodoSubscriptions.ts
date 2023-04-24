import { useApolloClient, useSubscription } from '@apollo/client'
import TodoApi from 'api/todo.api'
import { ITodo } from 'models/todos'
import { TODO_INFO } from 'api/fragments/todo.fragments'

const updateTodoListOnAdd = ({ id, title, isCompleted }: ITodo) => ({
  id: `${id}`,
  fragment: TODO_INFO,
  data: { id, title, isCompleted },
})

export const useTodoSubscriptions = () => {
  const client = useApolloClient()
  useSubscription(TodoApi.todoAddedSubscription(), {
    onSubscriptionData({ client: { cache }, subscriptionData }) {
      const { todoAdded } = subscriptionData.data
      const cachedList = cache.readQuery<{ todos: { edges: { node: ITodo }[] } }>({
        query: TodoApi.getTodos(),
      })

      const todoExits = cachedList?.todos?.edges?.some(
        ({ node: { id } }: { node: Partial<ITodo> }) => id === todoAdded.id,
      )

      if (todoExits) {
        cache.writeFragment(updateTodoListOnAdd(todoAdded))
      } else {
        client.refetchQueries({ include: [TodoApi.getTodos()] })
      }
    },
  })
}
