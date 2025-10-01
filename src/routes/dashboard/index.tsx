import Card from '@/components/shared/Card'
import { createFileRoute, Link } from '@tanstack/react-router'

import Icon from '@/components/shared/Icon'

import {
  dashboardPerformances,
  dashboardStatusesGroupedByStatus,
} from '@/constants/dashboard'

import { dashboardTaskStatusesMock } from '@/mocks/dashboard-task-statuses'
import { dashboardPerformancesMock } from '@/mocks/dashboard-performances'

import { isArray } from 'radash'
import DashboardTaskStatusCard from '@/components/dashboard/DashboardTaskStatusCard'
import { createHashedObject } from '@/core/helpers'
import DashboardPerformanceMetric from '@/components/dashboard/DashboardPerfomanceMetric'

export const Route = createFileRoute('/dashboard/')({
  component: RouteComponent,
})

function RouteComponent() {
  const hashedTaskStatusesMock = createHashedObject(
    dashboardTaskStatusesMock,
    'status',
  )

  const hashedPerformances = createHashedObject(
    dashboardPerformancesMock,
    'type',
  )

  const taskStatusCards = dashboardStatusesGroupedByStatus.flatMap((i) => {
    if (isArray(i)) {
      return i.map((subI) => {
        return (
          <>
            <div className="w-1 h-full border-l border-l-gray-4" />
            <div className="flex-1">
              <DashboardTaskStatusCard
                key={subI.status}
                status={subI.status}
                count={hashedTaskStatusesMock[subI.status].count}
                errors={hashedTaskStatusesMock[subI.status].errors}
              />
            </div>
          </>
        )
      })
    }

    return (
      <div className="flex-1">
        <DashboardTaskStatusCard
          key={i.status}
          status={i.status}
          count={hashedTaskStatusesMock[i.status].count}
          errors={hashedTaskStatusesMock[i.status].errors}
        />
      </div>
    )
  })

  const performanceCards = dashboardPerformances.map((i) => {
    const metric = hashedPerformances[i.type]
    return (
      <DashboardPerformanceMetric
        count={metric.count}
        total={metric.total}
        type={i.type}
        key={i.type}
      />
    )
  })

  return (
    <div className="grid p-4 gap-2 grid-cols-3 grid-rows-[auto_auto_1fr_1fr]">
      {/* Welcome block */}
      <Card>
        <div className="px-2 py-4">
          <h1 className="text-2xl font-bold tracking-[10%]">Welcome Alex,</h1>
          <p className="mt-2 text-sm text-gray-1">
            Here’s your performance overview where you can track your daily and
            monthly KPIs
          </p>
        </div>
      </Card>

      {/* Replies block */}
      <Card>
        <div className="flex items-center justify-between text-sm">
          <h5 className="font-semibold">Replies</h5>

          <Link className="text-primary font-medium" to="/inbox">
            Open inbox
          </Link>
        </div>

        <div className="mt-2 p-4 bg-primary-light pr-6 rounded-xl flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="size-12 bg-primary-hover text-primary flex items-center justify-center rounded-full">
              <Icon name="inbox" />
            </div>

            <span className="text-4xl text-gray-hover-1 font-medium">24</span>
          </div>

          <div className="flex items-center -space-x-2">
            <div className="size-8 bg-gray-4 rounded-full" />
            <div className="size-8 bg-gray-4 rounded-full" />
            <div className="size-8 bg-gray-4 rounded-full" />
            <div className="size-8 bg-gray-4 rounded-full" />
          </div>
        </div>
      </Card>

      {/* Performance block */}
      <Card className="row-start-1 row-end-3 col-start-3">
        <div className="flex items-center justify-between">
          <h5 className="font-semibold text-sm">May’s performance</h5>

          <button className="flex items-center gap-2 text-primary text-sm font-medium">
            <span>Edit KPIs</span>
            <Icon name="pencil" />
          </button>
        </div>

        <div className="mt-2.5 grid grid-cols-2 gap-2">{performanceCards}</div>
      </Card>

      {/* Tasks block */}
      <Card className="col-start-1 col-end-3 flex flex-col">
        <h5 className="font-semibold text-sm">Today's tasks</h5>

        <div className="mt-2 flex items-center gap-2 flex-1">
          {taskStatusCards}
        </div>
      </Card>

      {/* Signals block */}
      <Card className="row-span-2 col-span-2">1</Card>

      {/* Onboarding block */}
      <Card className="row-span-2">1</Card>
    </div>
  )
}
