import { DayCloudyIcon, DaySunnyIcon } from "./icons"

const EmptyState = () => (
  <div className="text-gray-400 flex items-center w-full h-full justify-center">
    <DayCloudyIcon className="text-7xl mr-4" />
    <p className="text-xl">
    Submit a city to fill up this space
    </p>
  </div>
)

export default EmptyState