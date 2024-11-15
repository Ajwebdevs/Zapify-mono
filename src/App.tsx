import './App.css'
import { ThemeProvider } from './components/theme-provider'
import { createRouter } from '@tanstack/react-router'
import { routeTree } from './routeTree.gen'
import { RouterProvider } from '@tanstack/react-router'

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const router = createRouter({ routeTree});

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}

function App() {
  return (
    <ThemeProvider defaultTheme='dark' storageKey='vite-ui-theme'>
      <RouterProvider router={router}/>
    </ThemeProvider>

  )
}

export default App
