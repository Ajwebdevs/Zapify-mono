import * as React from 'react'
import { Outlet, createRootRoute, useLocation} from '@tanstack/react-router'
import LandingPage from '@/components/LandingPage/LandingPage';
export const Route = createRootRoute({
  component: RootComponent,
})

function RootComponent(){
  const currentLocation = useLocation();
  const IsDashboard = currentLocation.pathname === '/';
  return (
    <React.Fragment>
      {IsDashboard ? <LandingPage /> : null}
      <Outlet />
    </React.Fragment>
  )
}
