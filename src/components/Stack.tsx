import { CSSProperties, FC, PropsWithChildren } from "react";

interface StackProps extends PropsWithChildren {
  orientation: 'horizontal' | 'vertical';
}

const Stack: FC<StackProps> = ({ orientation = 'horizontal', children }) => {
  const orientationStyles: Record<StackProps['orientation'], CSSProperties> = {
    horizontal: {
      display: 'flex',
      flexDirection: 'row',
      gap: '10px',
    },
    vertical: {
      display: 'flex',
      flexDirection: 'column',
      gap: '10px',
    },
  }
  return (
    <div style={{ ...orientationStyles[orientation] }}>{children}</div>
  )
}
export default Stack