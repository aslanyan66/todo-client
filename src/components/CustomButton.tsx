import React, { PropsWithChildren } from 'react'
import { Button, ButtonProps } from '@mui/material'

interface ICustomButtonProps extends ButtonProps {
  color: 'primary' | 'secondary' | 'inherit' | 'error'
  onClick: () => void
}

const CustomButton = ({
  color = 'primary',
  onClick,
  children,
}: PropsWithChildren<ICustomButtonProps>) => {
  return (
    <Button variant="contained" size="small" color={color} onClick={onClick}>
      {children}
    </Button>
  )
}

export default CustomButton
