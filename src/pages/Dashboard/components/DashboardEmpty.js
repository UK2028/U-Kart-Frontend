import React from 'react'
import { Link } from 'react-router-dom'

export const DashboardEmpty = () => {
  return (
    <section className="min-h-[63vh] max-w-5xl mx-auto py-10 ">
        <h1 className="text-4xl dark:text-gray-200 text-center underline underline-offset-4 mb-5">My Dashboard</h1>
        <div className="border border-gray-300 p-5 dark:text-gray-200 mb-4">
                <div className="flex flex-row justify-between items-center p-4 text-lg">
                    <h1 className=" ">No Orders to Display</h1>
                    <Link to="/products" className=" border border-gray-700 text-gray-700 dark:text-gray-200 hover:bg-gray-400 dark:hover:bg-gray-700 rounded-lg text-sm p-2.5 mr-1">Explore Items</Link>
                </div>
            </div>
    </section>
  )
}
