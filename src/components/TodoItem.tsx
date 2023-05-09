import { ChangeEvent, useEffect, useState } from 'react'
import { ITodo } from 'models/todos'
import { useDeleteTodo, useDialog, useUpdateTodo } from 'hooks'
import { Checkbox, Box, TextField } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete'
import EditIcon from '@mui/icons-material/Edit'
import SaveAsIcon from '@mui/icons-material/SaveAs'
import { CustomButton } from './index'

type IProps = ITodo

const TodoItem = ({ title, isCompleted, id }: IProps) => {
  const { open: openDialog } = useDialog()

  const { handleTodoUpdate } = useUpdateTodo()
  const { handleDeleteTodo } = useDeleteTodo()

  const [isEditTodo, setIsEditTodo] = useState(false)
  const [editingTitle, setEditingTitle] = useState(title)

  const onToggleCompleted = (evt: ChangeEvent<HTMLInputElement>) => {
    handleTodoUpdate({ id, isCompleted: evt.target.checked, title }, 'toggle-completed')
  }

  const onTodoEdit = () => setIsEditTodo(true)
  const onTodoTitleChange = (evt: ChangeEvent<HTMLInputElement>) =>
    setEditingTitle(evt.target.value)

  const onEditSave = () => {
    const currentValue = editingTitle.trim()
    if (currentValue && currentValue !== title) {
      handleTodoUpdate({ id, isCompleted, title: currentValue }, 'edit-title')
      setEditingTitle(title)
    }
    setIsEditTodo(false)
  }

  useEffect(() => {
    setEditingTitle(title)
  }, [title])

  const onDelete = () => {
    openDialog({
      options: {
        onSubmit: () => handleDeleteTodo(id),
        title: 'Are you sure?',
        // There we can use any component as we need
        Component: () => (
          <p>
            Make sure that you need to remove <b>{title}</b> item.
          </p>
        ),
      },
    })
  }

  return (
    <li className="todo">
      <div className="text">
        {isEditTodo ? (
          <TextField
            type="text"
            variant="standard"
            autoFocus
            fullWidth
            value={editingTitle}
            onChange={onTodoTitleChange}
          />
        ) : (
          <p>{title}</p>
        )}
      </div>

      <Checkbox checked={isCompleted} onChange={onToggleCompleted} />
      <Box sx={{ display: 'flex', columnGap: '5px' }}>
        {isEditTodo ? (
          <CustomButton color="primary" startIcon={<SaveAsIcon />} onClick={onEditSave}>
            Save
          </CustomButton>
        ) : (
          <CustomButton color="primary" startIcon={<EditIcon />} onClick={onTodoEdit}>
            Edit
          </CustomButton>
        )}
        <CustomButton color="error" startIcon={<DeleteIcon />} onClick={onDelete}>
          Delete
        </CustomButton>
      </Box>
    </li>
  )
}

export default TodoItem
