import { Automation } from '@/components/dashboard/automations/automation'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/(dashboard)/automation')({
  component: RouteComponent,
})

function RouteComponent() {
  return <Automation />
}