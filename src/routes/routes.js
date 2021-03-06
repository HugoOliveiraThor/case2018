import DashboardLayout from '@/pages/Layout/DashboardLayout.vue'

import ContainerList from '@/components/InAttendance/Index'
import AddPatient from '@/components/Patient/Index'
import Prescription from '@/components/InAttendance/Prescription'
const routes = [
  {
    path: '/',
    component: DashboardLayout,
    redirect: '/in-attendance',
    children: [
      {
        path: 'in-attendance',
        name: 'Em atendimento',
        component: ContainerList
      },
      {
        path: 'patient',
        name: 'Adicionar paciente',
        component: AddPatient
      },
      {
        path: 'prescription',
        name: 'Prescrição Médica',
        component: Prescription
      }
    ]
  }
]

export default routes
