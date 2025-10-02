import cn from 'classnames'
import { dashboardPerformancesHashedByType } from '@/constants/dashboard'
import type { PerformanceTypes } from '@/entities/performance'

import Icon from '@/components/shared/Icon'
import Popover from '../shared/Popover'

interface DashboardPerformanceMetricProps {
  count: number
  total: number
  type: PerformanceTypes
}

export default function DashboardPerformanceMetric({
  count,
  total,
  type,
}: DashboardPerformanceMetricProps) {
  const uiConfig = dashboardPerformancesHashedByType[type]

  const percentage = `${Math.round((count / (total ?? 1)) * 100)}%`

  return (
    <div className="p-2 border border-gray-4 rounded-lg">
      <div className="flex items-center justify-between">
        <div className="text-xs font-medium text-gray-hover-1">
          {uiConfig.label}
        </div>

        {uiConfig.infoTooltip ? (
          <Popover
            trigger="hover"
            placement="bottom"
            content={
              <div className="bg-dark text-xs text-white font-medium px-4 py-2 text-center max-w-[246px] rounded-sm">
                {uiConfig.infoTooltip}
              </div>
            }
          >
            <Icon name="info" className="text-gray-1" />
          </Popover>
        ) : undefined}
      </div>

      <div className="mt-2 flex items-center text-base font-medium">
        <div className={cn('flex items-center', uiConfig.color)}>
          {uiConfig.icon ? (
            <Icon name={uiConfig.icon} className="mr-1 size-4" />
          ) : undefined}
          {uiConfig.prefix ? uiConfig.prefix : undefined}
          <div>{count}</div>
        </div>

        <div className="text-gray-2">&nbsp;/&nbsp;{total}</div>
      </div>

      <div
        className={cn(
          'h-[3px] relative overflow-hidden rounded-[3px] mt-1',
          uiConfig.barColor,
        )}
      >
        <div
          className={cn(
            'absolute top-0 left-0 bottom-0 rounded-[inherit]',
            uiConfig.progressColor,
          )}
          style={{ width: percentage }}
        />
      </div>
    </div>
  )
}
