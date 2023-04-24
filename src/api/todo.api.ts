import { gql } from '@apollo/client'
import { TODO_INFO } from 'api/fragments/todo.fragments'

class TodoApi {
  getTodos() {
    return gql`
      ${TODO_INFO}
      query GetTodos {
        todos {
          ...TodoFields
        }
      }
    `
  }

  getTodo() {
    return gql`
      ${TODO_INFO}
      query GetTodo($id: ID!) {
        todo(id: $id) {
          ...TodoFields
        }
      }
    `
  }

  createTodo() {
    return gql`
      ${TODO_INFO}
      mutation CreateTodo($title: String!, $isCompleted: Boolean!) {
        createTodo(title: $title, isCompleted: $isCompleted) {
          ...TodoFields
        }
      }
    `
  }

  updateTodo() {
    return gql`
      ${TODO_INFO}
      mutation UpdateTodo($id: ID!, $title: String, $isCompleted: Boolean) {
        updateTodo(id: $id, title: $title, isCompleted: $isCompleted) {
          ...TodoFields
        }
      }
    `
  }

  deleteTodo() {
    return gql`
      mutation DeleteTodo($id: ID!) {
        deleteTodo(id: $id)
      }
    `
  }

  todoAddedSubscription() {
    return gql`
      ${TODO_INFO}
      subscription TodoAdded {
        todoAdded {
          ...TodoFields
        }
      }
    `
  }
}

export default new TodoApi()
