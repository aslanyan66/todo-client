import { ChangeEvent, useState } from 'react'
import { ITodo } from 'models/todos'
import { useDeleteTodo, useUpdateTodo } from 'hooks'
import { Checkbox, Box, TextField } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete'
import EditIcon from '@mui/icons-material/Edit'
import SaveAsIcon from '@mui/icons-material/SaveAs'
import { CustomButton } from './index'

type IProps = ITodo

const TodoItem = ({ title, isCompleted, id }: IProps) => {
  const { handleUpdateTodo } = useUpdateTodo()
  const { handleDeleteTodo } = useDeleteTodo()

  const [isEditTodo, setIsEditTodo] = useState(false)
  const [editingTitle, setEditingTitle] = useState(title)

  const toggleCompleted = (evt: ChangeEvent<HTMLInputElement>) => {
    handleUpdateTodo({ id, isCompleted: evt.target.checked, title })
  }
  const onTodoEdit = () => setIsEditTodo(true)

  const onTitleChange = (evt: ChangeEvent<HTMLInputElement>) => setEditingTitle(evt.target.value)
  const handleEditSave = () => {
    if (editingTitle.trim()) {
      setIsEditTodo(false)
      handleUpdateTodo({ id, isCompleted, title: editingTitle })
    }
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
            onChange={onTitleChange}
          />
        ) : (
          <p>{title}</p>
        )}
      </div>

      <Checkbox checked={isCompleted} onChange={toggleCompleted} />
      <Box sx={{ display: 'flex', columnGap: '5px' }}>
        {isEditTodo ? (
          <CustomButton color="primary" startIcon={<SaveAsIcon />} onClick={handleEditSave}>
            Save
          </CustomButton>
        ) : (
          <CustomButton color="primary" startIcon={<EditIcon />} onClick={onTodoEdit}>
            Edit
          </CustomButton>
        )}
        <CustomButton color="error" startIcon={<DeleteIcon />} onClick={() => handleDeleteTodo(id)}>
          Delete
        </CustomButton>
      </Box>
    </li>
  )
}

export default TodoItem
