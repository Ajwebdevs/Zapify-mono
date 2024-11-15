import * as React from 'react'
import { Outlet, createRootRoute, useLocation} from '@tanstack/react-router'
import LandingPage from '@/components/LandingPage/LandingPage';
export const Route = createRootRoute({
  component: RootComponent,
})

function RootComponent({children}: {children: React.ReactNode}){
  const currentLocation = useLocation();
  const IsDashboard = currentLocation.pathname === '/dashboard';
  return (
    <React.Fragment>
      {!IsDashboard && <LandingPage/>}
      {children}
      <Outlet />
    </React.Fragment>
  )
}
