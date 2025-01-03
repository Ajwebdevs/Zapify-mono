import { createFileRoute } from '@tanstack/react-router'
import { Dashboard } from '@/components/dashboard/Dashboard'
export const Route = createFileRoute('/(dashboard)/dashboard')({
  component: RouteComponent,
})

function RouteComponent() {
  return <Dashboard />
}
