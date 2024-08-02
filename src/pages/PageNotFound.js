import { useNavigate } from "react-router-dom";
import { useTitle } from "../hooks/useTitle";

export const PageNotFound = () => {

  const navigate = useNavigate();
  useTitle(`404 error Page not found`)

  return (
    <section className="min-h-[72vh] py-7 dark:bg-gray-800">
      <div className="flex flex-col items-center">
        <div className="text-5xl dark:text-gray-200 mb-7 " >404! Page Not Found</div>
        <button onClick={() => navigate("/")} className="text-3xl dark:text-gray-200 p-5 border border-black rounded-lg hover:bg-gray-400 dark:hover:bg-gray-700 dark:border-gray-200">BACK TO HOME</button>
      </div>
    </section>
  )
}
