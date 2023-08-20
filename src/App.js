import { useEffect } from 'react';

import { AllRoutes } from './routes/AllRoutes';
import { useUser } from './context';
import { useAccessToken } from './hooks/useAccessToken';
import { Header, Footer } from "./components"
import './App.css';

function App() {

  const { _id } = useUser();

  const accessAxios = useAccessToken();

  useEffect(()=>{

    const fetchUser = async () => {

    const res = await accessAxios('/auth');
    
    const { data } = res;

      if(res.status===200)
      {
        localStorage.setItem("userId",JSON.stringify(data.user._id));
        localStorage.setItem("userEmail",JSON.stringify(data.user.email));
      }
    };

    // only execute if someone refresh the page or close tab and then reopen (user state will clear but local storage and cookie will present)
    if( JSON.parse(localStorage.getItem("userId")) && (JSON.parse(localStorage.getItem("userId"))!== _id) )
    {
      fetchUser();
    }
    
  },[accessAxios,_id]);

  return (
    <div>
      <Header />
      <AllRoutes />
      <Footer/>
    </div>
  );
}

export default App;
