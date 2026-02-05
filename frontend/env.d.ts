/// <reference types="vite/client" />

declare module '*.css'
declare module '*.json'

declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}
