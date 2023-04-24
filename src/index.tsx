import React from 'react'
import ReactDOM from 'react-dom/client'
import App from 'components/App'
import { ApolloProvider } from '@apollo/client'
import { client as apolloClient } from './apollo'
import { CssBaseline } from '@mui/material'

import 'styles/index.scss'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <ApolloProvider client={apolloClient}>
    <CssBaseline />
    <App />
  </ApolloProvider>,
)
