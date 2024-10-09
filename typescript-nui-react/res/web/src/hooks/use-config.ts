import { Theme } from '@/themes/themes'
import { useAtom } from 'jotai'
import { atomWithStorage } from 'jotai/utils'

type Config = {
  style: 'default'
  theme: Theme['name']
  radius: number
}

const configAtom = atomWithStorage<Config>('config', {
  style: 'default',
  theme: 'slate',
  radius: 0.5,
})

export function useConfig() {
  return useAtom(configAtom)
}
