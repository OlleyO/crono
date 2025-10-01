export type PerformanceTypes = 'contacts' | 'companies' | 'activities' | 'meetings' | 'deals' | 'pipeline'

export interface PerformanceMetric {
  count: number
  total: number
  type: PerformanceTypes
}