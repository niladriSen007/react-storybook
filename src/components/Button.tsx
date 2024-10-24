import { CSSProperties, FC, PropsWithChildren } from 'react';

interface ButtonProps extends PropsWithChildren {
  onClick?: () => void;
  variant: 'primary' | 'secondary';
  size: 'small' | 'medium' | 'large';
}

const Button: FC<ButtonProps> = ({ onClick, children, size, variant }) => {

  const variantStyles: Record<ButtonProps['variant'], CSSProperties> = {
    primary: {
      backgroundColor: 'blue',
      color: 'white',
    },
    secondary: {
      backgroundColor: 'white',
      color: 'blue',
    },
  }

  const sizeStyles: Record<ButtonProps['size'], CSSProperties> = {
    small: {
      padding: '5px 10px',
      fontSize: '12px',
    },
    medium: {
      padding: '10px 15px',
      fontSize: '14px',
    },
    large: {
      padding: '15px 20px',
      fontSize: '16px',
    },
  }
  return (
    <button
      style={{
        outline: 'none',
        border: 'none',
        cursor: 'pointer',
        borderRadius: '5px',
        ...variantStyles[variant],
        ...sizeStyles[size],
      }}
      onClick={onClick}
    >{children}</button>
  )
}
export default Button