import { shallowRef } from 'vue'

export function signal(initialValue: any) {
  const r = shallowRef(initialValue)
  const s = () => r.value
  s.set = (value: any) => {
    r.value = value
  }
  s.update = (updater: any) => {
    r.value = updater(r.value)
  }
  return s
}