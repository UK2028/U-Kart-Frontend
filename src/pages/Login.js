import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useUser } from '../context';
import axios from 'axios';

export const Login = () => {
    
    const { setUser, setToken } = useUser();
    
    const navigate = useNavigate();

    const [ profile, setProfile ] = useState({
        email:"",
        password:""
    });
    
    const [ repeatPassword, setRepeatPassword ] = useState("");

    const handleChange = (e) => {
        setProfile({
            ...profile,
            [e.target.name]:e.target.value
        })
    }

    const handleLogin = async (e) => {

        e.preventDefault();

        if(profile.password===repeatPassword)
        {
            const requestOptions = {
                baseURL: "http://localhost:9090",
                url: "/login",
                method: 'POST',
                headers: {
                    "Content-Type": "application/json",
                },
                data: profile,
                withCredentials: 'include' // to allow cookie to store in browser
            } 

            const response = await axios(requestOptions);
            
            const { data, status } = response;

            if(status===200)
            {
                toast.success(data.message);
                navigate('/');
                localStorage.setItem("userId",JSON.stringify(data.user._id));
                localStorage.setItem("userEmail",JSON.stringify(data.user.email));
                setProfile({...profile,password:""});
                setUser(data);
                setToken(data.accessToken);
            } 
            else
            {
                toast.error(data.message);
                setProfile({email:"",password:""});
            }
            setRepeatPassword("");
        }
        else
        {
            toast.error("Password does not match");
        }
    }

    return (
        <main className="min-h-[70vh] bg-white dark:bg-gray-800 px-5" >
            <section className="max-w-screen-xl mx-auto py-10">
                <h1 className="text-3xl font-medium dark:text-gray-200 underline underline-offset-8 text-center">Login</h1>
                <form onSubmit={handleLogin}>
                    <div className="my-6">
                        <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                        <input onChange={handleChange} value={profile.email} name="email" type="email" id="email" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="abc123@gmail.com" required />
                    </div>
                    <div className="mb-6">
                        <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label>
                        <input onChange={handleChange} value={profile.password} name="password" type="password" id="password" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required />
                    </div>
                    <div className="mb-6">
                        <label htmlFor="repeat-password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Re-Enter password</label>
                        <input onChange={(e)=>setRepeatPassword(e.target.value)} value={repeatPassword} name="repeat-password" type="password" id="repeat-password" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required />
                    </div>
                    <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Login</button>
                </form>
                <button type="submit" className="mt-4 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Login as Guest</button>
            </section>
        </main>
    )
}
