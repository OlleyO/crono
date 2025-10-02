export type SignalTypes = 'role' | 'company' | 'website-view'

export interface DashboardSignal {
  id: string
  description: string
  sequenceActive?: boolean
  date: string
  type: SignalTypes
}
