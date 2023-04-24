import { ApolloClient, createHttpLink, from, InMemoryCache, split } from '@apollo/client'
import { getMainDefinition } from '@apollo/client/utilities'
import { GraphQLWsLink } from '@apollo/client/link/subscriptions'
import { createClient } from 'graphql-ws'
import { onError } from '@apollo/client/link/error'

const graphQLRoot = process.env.REACT_APP_API_ROOT

const cache = new InMemoryCache({
  resultCaching: true,
  addTypename: true,
})

const wsLink = new GraphQLWsLink(
  createClient({
    url: process.env.REACT_APP_SUBSCRIPTIONS_ROOT as string,
  }),
)

const httpLink = createHttpLink({
  uri: graphQLRoot,
})

const errorLink = onError(({ graphQLErrors }) => {
  console.log('graphQLErrors', graphQLErrors)
})

const splitLink = split(
  ({ query }) => {
    const definition = getMainDefinition(query)
    return definition.kind === 'OperationDefinition' && definition.operation === 'subscription'
  },
  wsLink,
  httpLink,
)

export const client = new ApolloClient({
  cache,
  connectToDevTools: process.env.NODE_ENV === 'development',
  link: from([errorLink, splitLink]),
})
