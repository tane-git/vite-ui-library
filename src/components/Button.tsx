import React, { ReactNode } from 'react'
import { Button as AntdButton } from 'antd'
import { ButtonProps } from 'antd/lib/button'

interface IButton extends ButtonProps {
  children: ReactNode;
}

export const Button: React.FC<IButton> = (props) => {
  return (
    <AntdButton {...props} >
      {props.children}
    </AntdButton>
  )
}