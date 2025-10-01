import cn from 'classnames'

interface BadgeProps {
  className?: React.HTMLAttributes<HTMLDivElement>['className']
  children?: React.ReactNode
  dot?: boolean
  value: string | number
}

export default function Badge({ children, value, dot, className }: BadgeProps) {
  return (
    <div
      className={cn(
        'bg-yellow text-xs text-white rounded-xl flex justify-center items-center px-2 py-0.5',
        {
          'rounded-full size-3 !p-0 -translate-x-full': dot,
        },
        className,
      )}
    >
      {dot ? undefined : value ? value : children}
    </div>
  )
}
