export type TaskStatuses = 'overdue' | 'pending-manual' | 'pending-auto' | 'completed'

export type DashboardTaskStatus = {
  count: number
  errors?: number
  status: TaskStatuses
}
