import { useState, type SVGProps } from 'react'
import cn from 'classnames'

import CronoLogoIcon from '@/assets/images/logo.svg?react'

import DashboardIcon from '@/assets/images/icons/dashboard.svg?react'
import FindNewIcon from '@/assets/images/icons/search.svg?react'
import AddTemplateIcon from '@/assets/images/icons/add-template.svg?react'
import BarGraphChartIcon from '@/assets/images/icons/bar-graph-chart.svg?react'
import TodoListIcon from '@/assets/images/icons/todo-list.svg?react'
import InboxIcon from '@/assets/images/icons/inbox.svg?react'
import CoinStackIcon from '@/assets/images/icons/coin-stack.svg?react'
import HistogramIcon from '@/assets/images/icons/histogram.svg?react'
import DoubleChevronRightIcon from '@/assets/images/icons/double-chevron-right.svg?react'

import { Link } from '@tanstack/react-router'
import Badge from '@/components/shared/Badge'

interface AsideMenuItemConfig {
  icon: React.FunctionComponent<SVGProps<SVGSVGElement>>
  label: string
  // TODO: Add type for the path
  path: string
  suffix?: React.ReactNode
  children?: AsideMenuItemConfig[]
}

export default function AsideMenu() {
  const [isOpen, setIsOpen] = useState(true)

  const unreadMessages = 24

  const menuItems: AsideMenuItemConfig[] = [
    {
      label: 'Dashboard',
      icon: DashboardIcon,
      path: '/dashboard',
    },
    {
      label: 'Find New',
      icon: FindNewIcon,
      path: '/find-new',
    },
    {
      label: 'Lists',
      icon: DashboardIcon,
      path: '/lists',
    },
    {
      label: 'Templates',
      icon: AddTemplateIcon,
      path: '/templates',
    },
    {
      label: 'Sequences',
      icon: BarGraphChartIcon,
      path: '/sequences',
    },
    {
      label: 'Tasks',
      icon: TodoListIcon,
      path: '/tasks',
    },
    {
      label: 'Inbox',
      icon: InboxIcon,
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
      icon: CoinStackIcon,
      path: '/deals',
    },
    {
      label: 'Analytics',
      icon: HistogramIcon,
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
        {isOpen ? <CronoLogoIcon /> : undefined}

        <button
          className="rounded-full flex items-center justify-center size-6 bg-gray-7"
          onClick={handleToggleMenu}
        >
          <DoubleChevronRightIcon />
        </button>
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
                  <item.icon />
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
                Trial ends in 2 days
              </p>

              <button className="mt-1.5">Upgrade plan</button>
            </div>
          </div>
        ) : undefined}
      </nav>

      <div className="flex items-center gap-2 pl-4 pr-3 py-3 border-t border-t-gray-4">
        <div className="size-8 rounded-full flex items-center justify-center bg-gray-5">
          1
        </div>

        {isOpen ? (
          <div className="text-sm">
            <p className="font-medium text-dark">William Robertson</p>
            <p className="text-gray-1">Sales</p>
          </div>
        ) : undefined}
      </div>
    </aside>
  )
}
