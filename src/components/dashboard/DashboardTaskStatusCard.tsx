import cn from 'classnames'

import type { TaskStatuses } from '@/entities/task'
import { dashboardStatusesHashedByStatus } from '@/constants/dashboard'

import Icon from '@/components/shared/Icon'

interface DashboardTaskStatusCardProps {
  count: number
  errors?: number | null | undefined
  status: TaskStatuses
}

export default function DashboardTaskStatusCard({
  count,
  status,
  errors,
}: DashboardTaskStatusCardProps) {
  const uiConfig = dashboardStatusesHashedByStatus[status]

  return (
    <div className={cn('p-4 rounded-xl', uiConfig.bgColor)}>
      <div className="flex justify-between">
        <span className={cn('text-2xl font-medium', uiConfig.color)}>
          {count}
        </span>

        {errors ? (
          <div className="relative flex items-center gap-1.5 bg-white text-hover-red px-2 py-1 rounded-2xl -top-2">
            <span className="text-xs font-medium">{errors} error</span>

            <Icon name="warning" />
          </div>
        ) : undefined}
      </div>

      <div className="mt-2 flex items-center justify-between">
        <span className="text-sm text-gray-hover-1 font-medium">
          {uiConfig.label}
        </span>
      </div>
    </div>
  )
}
