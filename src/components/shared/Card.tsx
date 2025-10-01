import cn from 'classnames'

interface CardProps {
  children: React.ReactNode
  className?: React.HTMLAttributes<HTMLDivElement>['className']
}

export default function Card({ children, className }: CardProps) {
  return (
    <div
      className={cn(
        'p-4 bg-white border border-gray-4 rounded-2xl h-full w-full',
        className,
      )}
    >
      {children}
    </div>
  )
}
