import { useUser } from "../../../context";

import { DashboardCard } from "./DashboardCard";

export const DashboardList = () => {

    const { orders } = useUser();

  return (
    <section className="min-h-[63vh] max-w-5xl mx-auto py-10 ">
        <h1 className="text-4xl dark:text-gray-200 text-center underline underline-offset-4 mb-5">My Dashboard</h1>
        {orders?.map(obj => { 
            return <div className="border border-gray-300 p-5 dark:text-gray-200 mb-4" key={obj._id}>
                <div className="flex flex-row justify-between p-4 text-lg">
                    <h1 className=" ">order Id: {obj.orderId}</h1>
                    <h1 className=" ">total: ${obj.amount}</h1>
                </div>
                {obj.orderArray.map(item => <DashboardCard item={item} key={item.id}/>)}
            </div>})}
        
    </section>
  )
}
