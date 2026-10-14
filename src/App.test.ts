import { createApp } from 'vue'
import { afterEach, expect, test } from 'vitest'
import App from './App.vue'

afterEach(() => {
  document.body.innerHTML = ''
})

test('App renders the Lanternbook heading', () => {
  const root = document.createElement('div')
  document.body.appendChild(root)
  const app = createApp(App)
  app.mount(root)

  const heading = root.querySelector('h1')
  expect(heading?.textContent).toBe('Lanternbook')

  app.unmount()
})
