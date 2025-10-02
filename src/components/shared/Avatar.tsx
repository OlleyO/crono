import { type ReactNode, useState } from 'react'
import cn from 'classnames'
import Icon from '@/components/shared/Icon'

interface AvatarProps {
  src?: string
  placeholder?: ReactNode
  className?: string
  alt?: string
  showBadge?: boolean
}

export default function Avatar({
  src,
  placeholder = <Icon name="lightning" />,
  className,
  alt,
  showBadge,
}: AvatarProps) {
  const [isError, setIsError] = useState(false)

  const showImage = src && !isError

  return (
    <div
      className={cn(
        'size-8 rounded-full flex items-center justify-center bg-gray-5 relative',
        className,
      )}
    >
      {showBadge ? (
        <div className="absolute size-2.5 top-0 left-0 flex items-center justify-center rounded-full bg-white">
          <div className="size-1.5 bg-yellow rounded-full" />
        </div>
      ) : undefined}
      {showImage ? (
        <div className="overflow-hidden rounded-full">
          <img
            src={src}
            alt={alt ?? 'avatar'}
            className="w-full h-full object-cover"
            onError={() => setIsError(true)}
          />
        </div>
      ) : (
        <div className="text-white flex items-center justify-center w-4 h-4">
          {placeholder}
        </div>
      )}
    </div>
  )
}
