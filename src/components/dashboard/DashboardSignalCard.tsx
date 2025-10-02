import type { SignalTypes } from '@/entities/signal'
import { dashboardSignalsUiConfig } from '@/constants/dashboard'
import Button from '@/components/shared/Button'
import Avatar from '@/components/shared/Avatar'

interface DashboardSignalCardProps {
  type: SignalTypes
  sequenceActive: boolean | undefined | null
  date: string
  description: string
}

export default function DashboardSignalCard({
  type,
  sequenceActive,
  date,
  description,
}: DashboardSignalCardProps) {
  const uiConfig = dashboardSignalsUiConfig[type]

  return (
    <div className="flex items-center justify-between px-4">
      <div className="flex items-center">
        <Avatar className="mr-4" />

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

        <Button>Action</Button>
      </div>
    </div>
  )
}
