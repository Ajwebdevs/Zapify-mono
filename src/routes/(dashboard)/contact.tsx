import { createFileRoute } from '@tanstack/react-router'
import { ContactTable } from '@/components/dashboard/Contact/contact'
export const Route = createFileRoute('/(dashboard)/contact')({
  component: RouteComponent,
})

function RouteComponent() {
  return <ContactTable/>
}
