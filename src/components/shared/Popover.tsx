// Popover.tsx
import { useState, useRef, type ReactNode, useEffect } from 'react'
import {
  createPopper,
  type Instance,
  type Placement,
  type Modifier,
} from '@popperjs/core'
import { createPortal } from 'react-dom'
import cn from 'classnames'

interface PopoverProps {
  children: ReactNode
  content: ReactNode
  placement?: Placement
  className?: string
  trigger?: 'click' | 'hover'
}

let currentPopover: (() => void) | null = null

export default function Popover({
  children,
  content,
  placement = 'bottom-start',
  className,
  trigger = 'click',
}: PopoverProps) {
  const [open, setOpen] = useState(false)
  const referenceRef = useRef<HTMLDivElement | null>(null)
  const popperRef = useRef<HTMLDivElement | null>(null)
  const popperInstance = useRef<Instance | null>(null)

  const openPopover = () => {
    if (currentPopover && currentPopover !== closePopover) {
      currentPopover()
    }
    setOpen(true)
    currentPopover = closePopover
  }

  const closePopover = () => {
    setOpen(false)
    currentPopover = null
  }

  // Initialize Popper
  useEffect(() => {
    if (open && referenceRef.current && popperRef.current) {
      const modifiers: Partial<Modifier<any, any>>[] = [
        {
          name: 'offset',
          options: {
            offset: [0, 9], // [skidding, distance]
          },
        },
      ]

      popperInstance.current = createPopper(
        referenceRef.current,
        popperRef.current,
        {
          placement,
          modifiers,
        },
      )
    }

    return () => {
      popperInstance.current?.destroy()
      popperInstance.current = null
    }
  }, [open, placement])

  // Handle click outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as Node
      if (
        referenceRef.current &&
        popperRef.current &&
        !referenceRef.current.contains(target) &&
        !popperRef.current.contains(target)
      ) {
        closePopover()
      }
    }
    if (open) {
      document.addEventListener('mousedown', handleClickOutside)
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [open])

  const handleMouseEnter = () => trigger === 'hover' && openPopover()
  const handleMouseLeave = () => trigger === 'hover' && closePopover()
  const handleClick = () =>
    trigger === 'click' && (open ? closePopover() : openPopover())

  return (
    <>
      {/* Trigger */}
      <div
        ref={referenceRef}
        onClick={handleClick}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {children}
      </div>

      {/* Popover portal */}
      {open &&
        createPortal(
          <div
            ref={popperRef}
            className={cn('z-50', className)}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            {content}
          </div>,
          document.body,
        )}
    </>
  )
}
