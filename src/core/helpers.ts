import { get } from 'radash'

export const createHashedObject = <
  T extends TIndexedObject,
  Prop extends keyof T,
  ValueArray extends boolean = false
>(
  array: T[] = [],
  prop: Prop = 'id' as Prop,
  isValueArray?: ValueArray,
  shouldRemoveKeyField?: boolean
): Record<T[Prop], ValueArray extends true ? T[] : T> => {
  return array.reduce((acc, current) => {
    const key = get(current, prop as string) as unknown as T[Prop]

    if (shouldRemoveKeyField) {
      delete current[prop]
    }

    if (isValueArray) {
      const existingValue = acc[key] as T[] | undefined
      acc[key] = [...(Array.isArray(existingValue) ? existingValue : []), current] as ValueArray extends true ? T[] : T
    } else {
      acc[key] = current as ValueArray extends true ? T[] : T
    }

    return acc
  }, {} as Record<T[Prop], ValueArray extends true ? T[] : T>)
}

export function prettifyNumber(value: number): string {
  if (value < 10_000) return value.toString()

  const suffixes = ["", "K", "M", "B", "T"]
  let newValue = value
  let suffixIndex = 0

  while (newValue >= 1000 && suffixIndex < suffixes.length - 1) {
    newValue /= 1000
    suffixIndex++
  }

  const formatted =
    newValue % 1 === 0 ? newValue.toFixed(0) : newValue.toFixed(1)

  return `${formatted}${suffixes[suffixIndex]}`
}

export function prettifyDate(dateInput: string | Date): string {
  const date = dateInput instanceof Date ? dateInput : new Date(dateInput)
  if (isNaN(date.getTime())) return "" // invalid date

  return date.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  })
}