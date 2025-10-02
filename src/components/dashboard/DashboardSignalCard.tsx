import type { SignalTypes } from '@/entities/signal'
import { dashboardSignalsUiConfig } from '@/constants/dashboard'
import AppButton from '@/components/shared/AppButton'
import Avatar from '@/components/shared/Avatar'
import Popover from '@/components/shared/Popover'
import Icon from '../shared/Icon'

interface DashboardSignalCardProps {
  id: string
  type: SignalTypes
  sequenceActive: boolean | undefined | null
  date: string
  description: string
  image: string
  onRemove(id: string): void
}

export default function DashboardSignalCard({
  id,
  type,
  sequenceActive,
  date,
  description,
  image,
  onRemove,
}: DashboardSignalCardProps) {
  const uiConfig = dashboardSignalsUiConfig[type]

  const popoverContent = (
    <div className="bg-white p-2 rounded-2xl w-[216px] flex flex-col border border-gray-4">
      <button
        className="rounded-lg p-2 flex items-center justify-between text-xs font-medium text-dark hover:bg-primary-light hover:text-primary"
        onClick={() => onRemove(id)}
      >
        Complete
        <Icon name="checkmark" />
      </button>
      <button
        className="rounded-lg p-2 flex items-center justify-between text-xs font-medium text-dark hover:bg-primary-light hover:text-primary"
        onClick={() => onRemove(id)}
      >
        Delete
        <Icon name="trash-bin" />
      </button>
    </div>
  )

  return (
    <div className="flex items-center justify-between px-4 py-4">
      <div className="flex items-center">
        <Avatar src={image} className="mr-4" showBadge />

        <div>
          <p
            className="text-sm font-semibold"
            dangerouslySetInnerHTML={{ __html: description }}
          />

          <div className="text-xs flex items-center gap-1">
            <p className={uiConfig.color}>{uiConfig.label}</p>

            {sequenceActive ? (
              <span className="text-primary bg-primary-light px-1 py-0.5 rounded-xl">
                In sequence
              </span>
            ) : undefined}
          </div>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <span className="text-xs text-gray-1">{date}</span>

        <Popover content={popoverContent} placement="bottom">
          <AppButton>Action</AppButton>
        </Popover>
      </div>
    </div>
  )
}
