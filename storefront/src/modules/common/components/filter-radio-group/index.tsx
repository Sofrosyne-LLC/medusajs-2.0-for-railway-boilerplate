import { EllipseMiniSolid } from "@medusajs/icons"
import { Label, RadioGroup, Text, clx } from "@medusajs/ui"

type FilterRadioGroupProps = {
  title: string
  items: {
    value: string
    label: string
  }[]
  value: any
  handleChange: (...args: any[]) => void
  "data-testid"?: string
}

const FilterRadioGroup = ({
  title,
  items,
  value,
  handleChange,
  "data-testid": dataTestId,
}: FilterRadioGroupProps) => {
  return (
    <div className="mb-6 bg-white p-4 rounded-lg shadow-sm border border-gray-100">
      <Text className="text-base-semi mb-4 flex items-center gap-2 text-gray-900">{title}</Text>
      <RadioGroup 
        data-testid={dataTestId} 
        onValueChange={handleChange}
        className="flex flex-col divide-y divide-gray-100"
      >
        {items?.map((i) => (
          <div
            key={i.value}
            className={clx(
              "flex gap-x-2 items-center py-2 transition-colors duration-150",
              {
                "ml-[-23px]": i.value === value,
              }
            )}
          >
            {i.value === value && (
              <EllipseMiniSolid className="text-gray-900" />
            )}
            <RadioGroup.Item
              checked={i.value === value}
              className="hidden peer"
              id={i.value}
              value={i.value}
            />
            <Label
              htmlFor={i.value}
              className={clx(
                "!txt-compact-small !transform-none hover:cursor-pointer transition-colors duration-200",
                {
                  "text-gray-900 font-medium": i.value === value,
                  "text-gray-600 hover:text-gray-800": i.value !== value,
                }
              )}
              data-testid="radio-label"
              data-active={i.value === value}
            >
              {i.label}
            </Label>
          </div>
        ))}
      </RadioGroup>
    </div>
  )
}

export default FilterRadioGroup