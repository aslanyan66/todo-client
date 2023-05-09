import { Header, TodoInputForm, TodoList } from './index'
import { MessageSnackbar, Dialog } from 'components/index'
import { useSnackbar, useDialog } from 'hooks'

const App = () => {
  const { close: closeSnack, snackbarState } = useSnackbar()
  const { close: closeDialog, options: dialogOptions, isOpen: isDialogOpen } = useDialog()

  return (
    <>
      {isDialogOpen && <Dialog onClose={closeDialog} {...dialogOptions} />}
      {snackbarState.isOpen && <MessageSnackbar onClose={closeSnack} {...snackbarState} />}
      <Header />
      <div className="container">
        <TodoInputForm />
        <TodoList />
      </div>
    </>
  )
}

export default App
