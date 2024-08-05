import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";


export const useRefreshtoken = () => {

    const navigate = useNavigate();

    const getAccessTokenFromRefreshToken = async () => {
        try
        {
           
            const userEmail = JSON.parse(localStorage.getItem("userEmail"));

            const requestOptions = {
                method: "POST",
                baseURL: "https://u-kart-backend-node.onrender.com",
                url: "/refresh",
                data: { email: userEmail },
                headers: { 'Content-Type': 'application/json' },
                withCredentials: 'include'
            } 
            
            const response = await axios(requestOptions);

            if(response.status===200)
            {
                return response.data;
            }
        }
        catch(error)
        {
            toast.error("User is not authorised");
            navigate('/login');
        }
        
    }

  return getAccessTokenFromRefreshToken;
}
