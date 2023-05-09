import { useReactiveVar } from '@apollo/client'
import state, { dialogInitialState } from 'apollo/state'
import { IDialogState } from 'models/dialog'

export const useDialog = () => {
  const { options, isOpen } = useReactiveVar(state.modalVar)
  const close = () => state.modalVar(dialogInitialState)
  const open = ({ options }: Omit<IDialogState, 'isOpen'>) =>
    state.modalVar({ options, isOpen: true })

  return { open, close, options, isOpen }
}
