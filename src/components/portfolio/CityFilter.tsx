import { cn } from '@/lib/utils'

interface CityFilterProps {
  selectedCity: string
  onCityChange: (city: string) => void
  cities: string[]
}

export function CityFilter({ selectedCity, onCityChange, cities }: CityFilterProps) {
  const allCities = ['All', ...cities]

  return (
    <div className="flex flex-wrap justify-center gap-3">
      {allCities.map((city) => {
        const isSelected = selectedCity === city

        return (
          <button
            key={city}
            onClick={() => onCityChange(city)}
            className={cn(
              'rounded-full px-6 py-3 text-sm font-semibold transition-all duration-200',
              'border-2 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#C8102E] focus:ring-offset-2',
              isSelected
                ? 'border-[#C8102E] bg-[#C8102E] text-white shadow-md'
                : 'border-gray-300 bg-white text-gray-700 hover:border-[#C8102E]'
            )}
          >
            {city}
          </button>
        )
      })}
    </div>
  )
}
