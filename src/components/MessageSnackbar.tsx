import { SyntheticEvent } from 'react'
import Snackbar from '@mui/material/Snackbar'
import Alert, { AlertColor } from '@mui/material/Alert'
import { ISnackBarOptions } from 'models/snackbar'

interface IProps extends ISnackBarOptions {
  autoHideDuration?: number
  onClose(): void
}

const MessageSnackbar = ({ severity, autoHideDuration = 3000, message, onClose }: IProps) => {
  const handleClose = (event?: SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') {
      return
    }
    onClose()
  }

  return (
    <Snackbar open={true} autoHideDuration={autoHideDuration as number} onClose={handleClose}>
      <Alert onClose={handleClose} severity={severity as AlertColor} sx={{ width: '100%' }}>
        {message}
      </Alert>
    </Snackbar>
  )
}

export default MessageSnackbar
