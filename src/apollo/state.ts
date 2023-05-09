import { makeVar } from '@apollo/client'
import { ISnackBarOptions } from 'models/snackbar'
import { IDialogState } from 'models/dialog'
import { Fragment } from 'react'

export const snackbarInitialState: ISnackBarOptions = {
  severity: null,
  message: null,
  isOpen: false,
}

export const dialogInitialState: IDialogState = {
  options: {
    title: null,
    onSubmit: () => null,
    Component: Fragment,
  },
  isOpen: false,
}

export default {
  modalVar: makeVar(dialogInitialState),
  snackVar: makeVar(snackbarInitialState),
}
