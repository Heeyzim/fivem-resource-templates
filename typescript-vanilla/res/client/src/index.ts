import { init } from '@client/init'

on('onResourceStart', (resName: string) => {
  if (resName === GetCurrentResourceName()) {
    init()
  }
})
