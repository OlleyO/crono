import { Link } from '@tanstack/react-router'
import { type ReactNode } from 'react'
import cn from 'classnames'

interface ButtonProps {
  className?: string
  to?: string
  color?: 'primary' | 'yellow' | 'ghost'
  variant?: 'filled' | 'link'
  size?: 'default' | 'sm'
  children: ReactNode
  icon?: boolean
  onClick?: () => void
}

export default function AppButton({
  to,
  color = 'primary',
  variant = 'filled',
  size = 'default',
  children,
  icon,
  className,
  onClick,
}: ButtonProps) {
  const base =
    'rounded font-medium transition-colors duration-150 flex items-center justify-center gap-1'

  const sizes = {
    default: icon
      ? 'size-8 rounded-full [&>svg]:w-4 [&>svg]:h-4' // 16px (w-4 h-4)
      : 'h-8 text-sm px-3 rounded-4xl [&>svg]:w-4 [&>svg]:h-4',
    sm: icon
      ? 'size-6 rounded-full [&>svg]:w-3 [&>svg]:h-3' // 12px (w-3 h-3)
      : 'h-6 text-xs px-2 rounded-sm [&>svg]:w-3 [&>svg]:h-3',
  }

  const styles = {
    primary: {
      filled: 'bg-java text-white hover:bg-primary focus:bg-primary',
      link: 'text-primary !p-0 hover:text-java focus:text-java',
    },
    yellow: {
      filled: 'bg-yellow text-white hover:bg-dark-yellow focus:dark-yellow',
      link: '!p-0',
    },
    ghost: {
      filled: 'bg-gray-7 text-gray-1 hover:bg-gray-6 focus:bg-gray-6',
      link: '!p-0',
    },
  }

  const classNames = `${base} ${sizes[size]} ${styles[color][variant]}`

  if (to) {
    return (
      <Link to={to} className={cn(classNames, className)}>
        {children}
      </Link>
    )
  }

  return (
    <button onClick={onClick} className={cn(classNames, className)}>
      {children}
    </button>
  )
}
