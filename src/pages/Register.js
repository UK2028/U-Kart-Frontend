import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axios from 'axios';

export const Register = () => {

    const navigate = useNavigate();
    const [ user, setUser ] = useState({
        name:"",
        email:"",
        password:""
    });
    const [ repeatPassword, setRepeatPassword ] = useState("");
    const [userDetailsSuccess, setUserDetailsSuccess] = useState({
        name:false,
        email:false,
        password:false,
        repeatPassword:false
    })
    
    const success = useRef(false);
    
    const handleChange = (e) => {
        const eventTarget = e.target;
        const name = eventTarget.name;
        name === "name" ? CheckName(eventTarget) : (
            name === "email" ? CheckEmail(eventTarget) : CheckPassword(eventTarget)
        )

        setUser({
            ...user,
            [e.target.name]:e.target.value
        });
    }

    const CheckName = (eventTarget) => {
        const len = eventTarget.value.length;
        if(len<3)
        {
            return showMessage(eventTarget,"Name must be 3 characters long");
        }
        if(len>15)
        {
            return showMessage(eventTarget,"Name must be less than 15 characters");
        }
        showSuccess(eventTarget);
    }

    const CheckEmail = (eventTarget) => {
        // eslint-disable-next-line
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        
        !re.test(eventTarget.value.trim()) ? showMessage(eventTarget,"Email is not valid") : showSuccess(eventTarget);
    }

    const CheckPassword = (eventTarget) => {

        const pwd = eventTarget.value.trim();
        
        const array = [/(?=.{8,})/,/(?=.*[a-z])/,/(?=.*[A-Z])/,/(?=.*[0-9])/,/(?=.*[@$!%*?&#])/];

        const msg = ["password should contains 8 or more characters long",
                    "password should contain atleast 1 lower case alphabet",
                    "password should contain atleast 1 upper case alphabet",
                    "password should contain atleast 1 numeric digit",
                    "password should contain atleast 1 special letter"
                ]
        
        for(let i=0;i<array.length;i++)
        {
            const small = document.getElementById(`${i}`);
            small?.remove();
        }

        let count = 0;

        for(let i=0;i<array.length;i++)
        {
            if(!array[i].test(pwd))
            {
                const parent = eventTarget.closest('div');
                const smallElem = document.createElement('small');
                smallElem.classList.add("dark:text-slate-400","block")
                smallElem.id = i;
                smallElem.innerText = msg[i]; 
                parent.appendChild(smallElem);
            }
            else
            {
                count++;
            }
        }
        
        count === 5 ? (
            setUserDetailsSuccess({ ...userDetailsSuccess, [eventTarget.name]:true })
        ) : (
            setUserDetailsSuccess({ ...userDetailsSuccess, [eventTarget.name]:false })
        )
    }

    const CheckRepeatPassword = (eventTarget) => {
        eventTarget.value === user.password ? showSuccess(eventTarget) : showMessage(eventTarget,"Password does not match");

    } 

    const showMessage = (eventTarget,msg) => {
        const parent = eventTarget.closest('div');
        const small = parent.querySelector('small');
        small.classList.remove("hidden");
        small.innerText = msg;
        setUserDetailsSuccess({ ...userDetailsSuccess, [eventTarget.name]:false });
        
    }

    const showSuccess = (eventTarget) => {
        const parent = eventTarget.closest('div');
        const small = parent.querySelector('small');
        small.classList.add("hidden");
        small.innerText = '';
        setUserDetailsSuccess({ ...userDetailsSuccess, [eventTarget.name]:true });
        
    }

    const handleRegister = async (e) => {
        try
        {
            e.preventDefault();
            if(success.current === true)
            {
                const requestOptions = {
                    baseURL: "http://localhost:9090",
                    url: "/register",
                    method: 'POST',
                    headers: {
                        "Content-Type": "application/json"
                    },
                    data: user,
                    withCredentials: 'include' // to allow cookie to store in browser
                } 
                const response = await axios(requestOptions);
                const {data:{message},status} = response;
                if(status===201)
                {
                    toast.success(message);
                    navigate('/login');
                } 
                setUser({
                    name:"",
                    email:"",
                    password:""
                });
                setRepeatPassword("");
            }
            else
            {
                toast.error("Please fill all the details correctly");
            }
        }
        catch(error)
        {
            toast.error(error.response.data.message);
        }
    }

    useEffect(() => {
        const { name, email, password, repeatPassword } = userDetailsSuccess;
        if(name && email && password && repeatPassword)
        {
            success.current = true
        }
        else{
            success.current = false;
        }
        console.log(success.current);
    });

  return (
    <main className="min-h-[70vh] bg-white dark:bg-gray-800 px-5" >
            <section className="max-w-screen-xl mx-auto py-10">
                <h1 className="text-3xl font-medium dark:text-gray-200 underline underline-offset-8 text-center">Register</h1>
                <form onSubmit={handleRegister}>
                    <div className="my-6">
                        <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Name</label>
                        <input onChange={handleChange} name="name" value={user.name} type="name" id="name" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" />
                        <small className="dark:text-slate-400 hidden"></small>
                    </div>
                    <div className="my-6">
                        <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                        <input onChange={handleChange} name="email" value={user.email} type="email" id="email" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="abc123@gmail.com" />
                        <small className="dark:text-slate-400 hidden"></small>
                    </div>
                    <div className="mb-6">
                        <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label>
                        <input onChange={handleChange} name="password" value={user.password} type="password" id="password" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" />
                    </div>
                    <div className="mb-6">
                        <label htmlFor="repeatPassword" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Repeat password</label>
                        <input onChange={(e)=>{setRepeatPassword(e.target.value);CheckRepeatPassword(e.target);}} name="repeatPassword" value={repeatPassword} type="password" id="repeatPassword" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" />
                        <small className="dark:text-slate-400 hidden"></small>
                    </div>
                    <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Register new account</button>
                </form>
            </section>
        </main>
  )
}
