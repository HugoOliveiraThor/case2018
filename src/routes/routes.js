import DashboardLayout from '@/pages/Layout/DashboardLayout.vue'

// import Dashboard from '@/pages/Dashboard.vue'
import ContainerList from '@/components/InAttendance/Index'
import AddPatient from '@/components/Patient/Index'
import AddDoctor from '@/components/Doctor/Index'
import Prescription from '@/components/InAttendance/Prescription'
import UserProfile from '@/pages/UserProfile.vue'
// import TableList from '@/pages/TableList.vue'
// import Typography from '@/pages/Typography.vue'
// import Icons from '@/pages/Icons.vue'
// import Maps from '@/pages/Maps.vue'
// import Notifications from '@/pages/Notifications.vue'
// import UpgradeToPRO from '@/pages/UpgradeToPRO.vue'

const routes = [
  {
    path: '/',
    component: DashboardLayout,
    redirect: '/in-attendance',
    children: [
      {
        path: 'user',
        name: 'User Profile',
        component: UserProfile
      },
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
        path: 'doctor',
        name: 'Adicionar médico',
        component: AddDoctor
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
