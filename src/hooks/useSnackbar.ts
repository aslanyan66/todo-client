import { useReactiveVar } from '@apollo/client'

import state, { snackbarInitialState } from 'apollo/state'
import { ISnackBarOptions } from 'models/snackbar'

export const useSnackbar = () => {
  const snackbarState = useReactiveVar(state.snackVar)
  const close = () => state.snackVar(snackbarInitialState)
  const open = ({ severity, message }: Omit<ISnackBarOptions, 'isOpen'>) => {
    state.snackVar({ severity, message, isOpen: true })
  }

  const showError = (message: string) =>
    state.snackVar({ severity: 'error', message, isOpen: true })

  return { close, open, showError, snackbarState }
}
