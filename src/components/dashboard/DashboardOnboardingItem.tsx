import type { DashboardOnboardingUiConfig } from '@/constants/dashboard'

interface DashboardOnboardingItemProps {
  config: DashboardOnboardingUiConfig
}

export default function DashboardOnboardingItem({
  config,
}: DashboardOnboardingItemProps) {
  return (
    <div className="flex items-center pr-2 py-4">
      <div className="size-10 mr-4">
        <img src={config.image} />
      </div>

      <p className="text-dark font-semibold text-sm">{config.label}</p>

      <span className="ml-auto text-sm text-gray-1">
        {config.completeTimeMins} min
      </span>
    </div>
  )
}
