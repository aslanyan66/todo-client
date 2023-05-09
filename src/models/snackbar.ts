import { AlertColor } from '@mui/material/Alert'

export interface ISnackBarOptions {
  severity: AlertColor | null
  message: string | null
  isOpen: boolean
}
