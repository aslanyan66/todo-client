import { ComponentType } from 'react'

export interface IDialogOptions {
  title: string | null
  onSubmit: () => void
  Component: ComponentType<any>
}

export interface IDialogState {
  options: IDialogOptions
  isOpen: boolean
}
