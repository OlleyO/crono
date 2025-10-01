import AddTemplateIcon from '@/assets/images/icons/add-template.svg?react'
import BarGraphChartIcon from '@/assets/images/icons/bar-graph-chart.svg?react'
import BriefcaseIcon from '@/assets/images/icons/briefcase.svg?react'
import CameraIcon from '@/assets/images/icons/camera.svg?react'
import ChevronDownIcon from '@/assets/images/icons/chevron-down.svg?react'
import CoinStackIcon from '@/assets/images/icons/coin-stack.svg?react'
import ContactIcon from '@/assets/images/icons/contact.svg?react'
import CronoIcon from '@/assets/images/icons/crono.svg?react'
import DashboardIcon from '@/assets/images/icons/dashboard.svg?react'
import DoubleChevronRightIcon from '@/assets/images/icons/double-chevron-right.svg?react'
import HistogramIcon from '@/assets/images/icons/histogram.svg?react'
import InboxIcon from '@/assets/images/icons/inbox.svg?react'
import InfoIcon from '@/assets/images/icons/info.svg?react'
import PencilIcon from '@/assets/images/icons/pencil.svg?react'
import SearchIcon from '@/assets/images/icons/search.svg?react'
import TodoListIcon from '@/assets/images/icons/todo-list.svg?react'
import WarningIcon from '@/assets/images/icons/warning.svg?react'

const icons = {
  'add-template': AddTemplateIcon,
  'bar-graph-chart': BarGraphChartIcon,
  briefcase: BriefcaseIcon,
  camera: CameraIcon,
  'chevron-down': ChevronDownIcon,
  'coin-stack': CoinStackIcon,
  contact: ContactIcon,
  crono: CronoIcon,
  dashboard: DashboardIcon,
  'double-chevron-right': DoubleChevronRightIcon,
  histogram: HistogramIcon,
  inbox: InboxIcon,
  info: InfoIcon,
  pencil: PencilIcon,
  search: SearchIcon,
  'todo-list': TodoListIcon,
  warning: WarningIcon,
}

export type IconsNames = keyof typeof icons

interface IconProps extends React.SVGProps<SVGSVGElement> {
  name: IconsNames
}

export default function Icon({ name, ...rest }: IconProps) {
  const As = icons[name]
  return <As {...rest} />
}
