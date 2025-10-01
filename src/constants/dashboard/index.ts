import { createHashedObject } from "@/core/helpers"
import type { PerformanceTypes } from "@/entities/performance"
import type { TaskStatuses } from "@/entities/task"

import { type IconsNames } from "@/components/shared/Icon"

// import ContactIcon from '@/assets/images/icons/contact.svg?react'
// import BriefcaseIcon from '@/assets/images/icons/briefcase.svg?react'
// import TodoListIcon from '@/assets/images/icons/todo-list.svg?react'
// import CameraIcon from '@/assets/images/icons/camera.svg?react'

interface DashboardTaskStatusUiConfig {
  label: string
  color: string
  bgColor: string
  status: TaskStatuses
}

export const dashboardTaskStatuses: DashboardTaskStatusUiConfig[] = [
  {
    label: 'Overdue',
    color: 'text-hover-red',
    bgColor: 'bg-fair-pink',
    status: 'overdue',
  },
  {
    label: 'Pending Manual',
    color: 'text-dark-yellow',
    bgColor: 'bg-yellow-light',
    status: 'pending-manual'
  },
  {
    label: 'Pending Auto',
    color: 'text-blue-green',
    bgColor: 'bg-gray-6',
    status: 'pending-auto'
  },
  {
    label: 'Completed',
    color: 'text-hover-green',
    bgColor: 'bg-frost',
    status: 'completed'
  }
]

export const dashboardStatusesHashedByStatus = createHashedObject(dashboardTaskStatuses, 'status')
export const dashboardStatusesGroupedByStatus = [
  dashboardStatusesHashedByStatus.overdue,
  [dashboardStatusesHashedByStatus["pending-manual"], dashboardStatusesHashedByStatus["pending-auto"]],
  dashboardStatusesHashedByStatus.completed
]

interface DashboardPerformanceUiConfig {
  label: string
  type: PerformanceTypes
  color: string
  progressColor: string
  barColor: string
  icon?: IconsNames
  prefix?: string
  infoTooltip?: string
}

export const dashboardPerformances: DashboardPerformanceUiConfig[] = [
  {
    label: 'Contacts engaged ',
    color: 'text-blue-green',
    progressColor: 'bg-blue-green',
    barColor: 'bg-polar',
    icon: 'contact',
    infoTooltip: 'Contacts who have at least one logged activity within the current month',
    type: 'contacts'
  },
  {
    label: 'Companies engaged',
    color: 'text-royal-blue',
    progressColor: 'bg-royal-blue',
    barColor: 'bg-polar',
    icon: 'briefcase',
    type: 'companies'
  },
  {
    label: 'Activities',
    color: 'text-medium-purple',
    progressColor: 'bg-medium-purple',
    barColor: 'bg-blue-chalk',
    icon: 'todo-list',
    type: 'activities'
  },
  {
    label: 'Meetings',
    color: 'text-gold-tips',
    progressColor: 'bg-gold-tips',
    barColor: 'bg-yellow-light',
    icon: 'camera',
    type: 'meetings'
  },
  {
    label: 'Deals',
    color: 'text-lavender-magenta',
    progressColor: 'bg-lavender-magenta',
    barColor: 'bg-remy',
    icon: 'todo-list',
    type: 'deals'
  },
  {
    label: 'Pipeline',
    color: 'text-hover-green',
    progressColor: 'bg-hover-green',
    barColor: 'bg-primary-light',
    prefix: '€',
    type: 'pipeline'
  }
]

export const dashboardPerformancesHashedByType = createHashedObject(dashboardPerformances, 'type')