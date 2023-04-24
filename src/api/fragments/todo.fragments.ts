import { gql } from '@apollo/client'

export const TODO_INFO = gql`
  fragment TodoFields on Todo {
    id
    title
    isCompleted
  }
`
