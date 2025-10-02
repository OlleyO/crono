import { useState } from 'react'
import cn from 'classnames'

import { Link } from '@tanstack/react-router'
import Badge from '@/components/shared/Badge'
import Icon, { type IconsNames } from '@/components/shared/Icon'
import AppButton from '@/components/shared/AppButton'
import Avatar from '@/components/shared/Avatar'
import { dashboardInboxMock } from '@/mocks/dashboard-inbox'

import pluralize from 'pluralize'

interface AsideMenuItemConfig {
  icon: IconsNames
  label: string
  // TODO: Add type for the path
  path: string
  suffix?: React.ReactNode
  children?: AsideMenuItemConfig[]
}

export default function AsideMenu() {
  const [isOpen, setIsOpen] = useState(true)

  const unreadMessages = dashboardInboxMock.length

  const menuItems: AsideMenuItemConfig[] = [
    {
      label: 'Dashboard',
      icon: 'dashboard',
      path: '/dashboard',
    },
    {
      label: 'Find New',
      icon: 'search',
      path: '/find-new',
    },
    {
      label: 'Lists',
      icon: 'dashboard',
      path: '/lists',
    },
    {
      label: 'Templates',
      icon: 'add-template',
      path: '/templates',
    },
    {
      label: 'Sequences',
      icon: 'bar-graph-chart',
      path: '/sequences',
    },
    {
      label: 'Tasks',
      icon: 'todo-list',
      path: '/tasks',
    },
    {
      label: 'Inbox',
      icon: 'inbox',
      path: '/inbox',
      suffix: (
        <Badge
          className={cn({ 'absolute right-0 top-0': !isOpen })}
          value={unreadMessages}
          dot={!isOpen}
        />
      ),
    },
    {
      label: 'Deals',
      icon: 'coin-stack',
      path: '/deals',
    },
    {
      label: 'Analytics',
      icon: 'histogram',
      path: '/analytics',
    },
  ]

  function handleToggleMenu() {
    setIsOpen((prev) => !prev)
  }

  return (
    <aside
      className={cn(
        'flex flex-col h-full overflow-hidden bg-white border-r border-r-gray-4 transition-all',
      )}
    >
      <div className="flex items-center justify-between pl-4 pr-2 py-6">
        {isOpen ? <Icon name="crono" /> : undefined}

        <AppButton color="ghost" size="sm" icon onClick={handleToggleMenu}>
          <Icon
            name="double-chevron-right"
            className={cn({ 'rotate-180': !isOpen })}
          />
        </AppButton>
      </div>

      <nav className="flex-1 overflow-hidden flex flex-col h-full mt-2">
        <ul className="flex flex-col overflow-auto gap-4">
          {menuItems.map((item) => (
            <li key={item.path}>
              <Link
                className="flex items-center gap-2 pl-4 pr-3 py-1 text-gray-1 font-medium text-sm hover:text-primary relative"
                to={item.path}
                activeProps={{
                  className: cn(
                    'before:absolute before:left-0 before:w-[3px] before:top-0 before:bottom-0 before:rounded-r-[3px] before:bg-primary',
                  ),
                }}
              >
                <span className="size-6">
                  <Icon name={item.icon} />
                </span>

                {isOpen ? <span>{item.label}</span> : undefined}

                <div className="ml-auto">{item.suffix}</div>
              </Link>
            </li>
          ))}
        </ul>

        {isOpen ? (
          <div className="mt-4 px-2">
            <div className="p-2 bg-yellow-light rounded-lg bg-[url(@/assets/images/curves-pattern-bg.png)] bg-blend-color-burn bg-right bg-no-repeat">
              <p className="text-sm text-dark font-medium">
                Trial ends in {pluralize('day', 2, true)}
              </p>

              <AppButton color="yellow" size="sm" className="mt-1.5">
                Upgrade plan
                <Icon name="gift" />
              </AppButton>
            </div>
          </div>
        ) : undefined}
      </nav>

      <div className="flex items-center gap-2 pl-4 pr-3 py-3 border-t border-t-gray-4">
        <Avatar />

        {isOpen ? (
          <div className="text-sm">
            <p className="text-dark">William Robertson</p>
            <p className="text-gray-1">Sales</p>
          </div>
        ) : undefined}
      </div>
    </aside>
  )
}
