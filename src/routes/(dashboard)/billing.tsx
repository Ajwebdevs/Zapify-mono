
import { createFileRoute } from '@tanstack/react-router'
import Pricing from '@/components/dashboard/Billing/billing'
export const Route = createFileRoute('/(dashboard)/billing')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <Pricing/>
  )
}
