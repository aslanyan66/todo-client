import React from 'react'
import ReactDOM from 'react-dom/client'
import { ApolloProvider } from '@apollo/client'
import { client as apolloClient } from './apollo'
import { CssBaseline } from '@mui/material'

import App from 'components/App'
import 'styles/index.css'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <ApolloProvider client={apolloClient}>
    <CssBaseline />
    <App />
  </ApolloProvider>,
)
