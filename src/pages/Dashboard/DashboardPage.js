import { useUser } from '../../context';

import { DashboardList } from './components/DashboardList';
import { DashboardEmpty } from './components/DashboardEmpty';

export const DashboardPage = () => {

  const { orders } = useUser();

  return (
    <main className=" bg-white dark:bg-gray-800 px-5">
      { orders?.length ? <DashboardList/> : <DashboardEmpty/> }
    </main>
  )
}
