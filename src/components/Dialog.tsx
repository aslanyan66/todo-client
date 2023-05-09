import { ComponentType } from 'react'
import {
  Dialog as MaterialDialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  IconButton,
  Button,
} from '@mui/material'
import { Close } from '@mui/icons-material'
import { IDialogOptions } from 'models/dialog'

interface IProps extends IDialogOptions {
  onClose(): void
  onSubmit(): void
  Component: ComponentType
}

const Dialog = ({ title, Component, onClose, onSubmit }: IProps) => {
  const handleSubmit = () => {
    onSubmit()
    onClose()
  }

  return (
    <MaterialDialog className="dialog" onClose={onClose} open={true}>
      {title && (
        <DialogTitle className="flex_container" sx={{ justifyContent: 'space-between' }}>
          <span className="dialog__title">{title}</span>
          <IconButton onClick={onClose}>
            <Close />
          </IconButton>
        </DialogTitle>
      )}
      <DialogContent>
        <Component />
      </DialogContent>

      <DialogActions>
        <Button onClick={onClose}>Cancel</Button>
        <Button onClick={handleSubmit}>Yes</Button>
      </DialogActions>
    </MaterialDialog>
  )
}

export default Dialog
