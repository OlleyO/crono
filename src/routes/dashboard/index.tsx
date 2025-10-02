import Card from '@/components/shared/Card'
import { createFileRoute } from '@tanstack/react-router'

import Icon from '@/components/shared/Icon'

import {
  dashboardOnboardingUiConfig,
  dashboardPerformances,
  dashboardStatusesGroupedByStatus,
} from '@/constants/dashboard'

import { dashboardTaskStatusesMock } from '@/mocks/dashboard-task-statuses'
import { dashboardPerformancesMock } from '@/mocks/dashboard-performances'

import { isArray } from 'radash'
import DashboardTaskStatusCard from '@/components/dashboard/DashboardTaskStatusCard'
import { createHashedObject } from '@/core/helpers'
import DashboardPerformanceMetric from '@/components/dashboard/DashboardPerfomanceMetric'
import { dashboardSignalsMock } from '@/mocks/dashboard-signals'
import DashboardSignalCard from '@/components/dashboard/DashboardSignalCard'
import AppButton from '@/components/shared/AppButton'
import Avatar from '@/components/shared/Avatar'
import DashboardOnboardingItem from '@/components/dashboard/DashboardOnboardingItem'
import { dashboardInboxMock } from '@/mocks/dashboard-inbox'
import { Fragment, useState } from 'react'

export const Route = createFileRoute('/dashboard/')({
  component: RouteComponent,
})

function RouteComponent() {
  const [unreadSignals, setUnreadSignals] = useState(dashboardSignalsMock)

  function handleRemoveSignal(id: string) {
    setUnreadSignals((prev) => prev.filter((signal) => signal.id !== id))
  }

  const hashedTaskStatusesMock = createHashedObject(
    dashboardTaskStatusesMock,
    'status',
  )

  const hashedPerformances = createHashedObject(
    dashboardPerformancesMock,
    'type',
  )

  const unreadMessages = dashboardInboxMock.length
  const shownUnreadLogos = dashboardInboxMock.slice(0, 4)

  const unreadLogosAvatars = shownUnreadLogos.map((i) => {
    return <Avatar key={i.image} src={i.image} />
  })

  const taskStatusCards = dashboardStatusesGroupedByStatus.flatMap((i) => {
    if (isArray(i)) {
      return (
        <Fragment key={i.map((subI) => subI.status).join('-')}>
          <div className="h-full w-[1px] bg-gray-5" />
          {i.map((subI) => {
            return (
              <div key={subI.status} className="flex-1">
                <DashboardTaskStatusCard
                  status={subI.status}
                  count={hashedTaskStatusesMock[subI.status].count}
                  errors={hashedTaskStatusesMock[subI.status].errors}
                />
              </div>
            )
          })}
          <div className="h-full w-[1px] bg-gray-5" />
        </Fragment>
      )
    }

    return (
      <div className="flex-1" key={i.status}>
        <DashboardTaskStatusCard
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

  const signalsCards = unreadSignals.map((i) => {
    return (
      <DashboardSignalCard
        id={i.id}
        key={i.id}
        date={i.date}
        description={i.description}
        sequenceActive={i.sequenceActive}
        type={i.type}
        image={i.image}
        onRemove={handleRemoveSignal}
      />
    )
  })

  const onboardingCards = dashboardOnboardingUiConfig.map((i) => {
    return <DashboardOnboardingItem config={i} key={i.label} />
  })

  return (
    <div className="grid p-4 gap-2 grid-cols-3 grid-rows-[auto_auto_1fr_1fr] overflow-hidden h-full">
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

          <AppButton variant="link" to="/inbox">
            Open inbox
            <Icon name="chevron-right" />
          </AppButton>
        </div>

        <div className="mt-2 p-4 bg-primary-light pr-6 rounded-xl flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="size-12 bg-primary-hover text-primary flex items-center justify-center rounded-full">
              <Icon name="inbox" />
            </div>

            <span className="text-4xl text-gray-hover-1 font-medium">
              {unreadMessages}
            </span>
          </div>

          <div className="flex items-center -space-x-2">
            {unreadLogosAvatars}
          </div>
        </div>
      </Card>

      {/* Performance block */}
      <Card className="row-start-1 row-end-3 col-start-3">
        <div className="flex items-center justify-between">
          <h5 className="font-semibold text-sm">May’s performance</h5>

          <AppButton variant="link">
            <span>Edit KPIs</span>
            <Icon name="pencil" />
          </AppButton>
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
      <Card className="row-span-2 col-span-2 overflow-hidden h-full flex flex-col px-0">
        <div className="px-4 pb-3">
          <h5 className="font-semibold text-sm ">Signals</h5>
          <p className="text-sm text-gray-1 mt-1">
            Never miss a single opportunity: check out your top signals from
            your 1st-degree LinkedIn connections.
          </p>
        </div>

        <div className="flex flex-col overflow-auto flex-1 divide-y divide-gray-5 scrollbar-gutter">
          {signalsCards}
        </div>
      </Card>

      {/* Onboarding block */}
      <Card className="row-span-2">
        <h5 className="font-semibold text-sm">Onboarding</h5>

        <div className="flex flex-col overflow-auto flex-1 divide-y divide-gray-5">
          {onboardingCards}
        </div>
      </Card>
    </div>
  )
}
