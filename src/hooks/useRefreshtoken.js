import axios from "axios";
import { useNavigate } from "react-router-dom";


export const useRefreshtoken = () => {

    const navigate = useNavigate();

    const getAccessTokenFromRefreshToken = async () => {
        try
        {
           
            const userEmail = JSON.parse(localStorage.getItem("userEmail"));

            const requestOptions = {
                method: "POST",
                baseURL: "http://localhost:9090",
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
            navigate('/login');
        }
        
    }

  return getAccessTokenFromRefreshToken;
}
