import { type ReactNode, useState } from 'react'
import cn from 'classnames'
import Icon from '@/components/shared/Icon'

interface AvatarProps {
  src?: string
  placeholder?: ReactNode
  className?: string
  alt?: string
}

export default function Avatar({
  src,
  placeholder = <Icon name="lightning" />,
  className,
  alt,
}: AvatarProps) {
  const [isError, setIsError] = useState(false)

  const showImage = src && !isError

  return (
    <div
      className={cn(
        'size-8 rounded-full overflow-hidden flex items-center justify-center bg-gray-5',
        className,
      )}
    >
      {showImage ? (
        <img
          src={src}
          alt={alt ?? 'avatar'}
          className="w-full h-full object-cover"
          onError={() => setIsError(true)}
        />
      ) : (
        <div className="text-white flex items-center justify-center w-4 h-4">
          {placeholder}
        </div>
      )}
    </div>
  )
}
