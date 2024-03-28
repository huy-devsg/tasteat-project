import React, { ButtonHTMLAttributes } from 'react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: string
}

const Button: React.FC<ButtonProps> = ({ variant = 'primary', ...props }) => {
  const buttonClass = `button ${variant}`

  return (
    <button className={buttonClass} {...props}>
      {props.children}
    </button>
  )
}

export default Button
