import axios from 'axios';
import { useEffect } from 'react';

import { useUser } from "../context";
import { useRefreshtoken } from './useRefreshtoken';

const accessAxios = axios.create({
    baseURL: "https://u-kart-backend-node.onrender.com",
    url: "/auth",
    method: "GET",
    headers: { 'Content-Type': 'application/json' },
    withCredentials: 'include'
})

export const useAccessToken = () => {

    const { accessToken, setToken, setUser } = useUser();

    const refresh = useRefreshtoken();

    useEffect(()=>{

        const requestInterceptor = accessAxios.interceptors.request.use( (config) => {

            // if Authorization headers is not set then set it with the accessToken from user state otherwise use bearer token received from refresh axios and header was set from the previous request config inside response interceptor (below)   
            if(!config.headers["Authorization"])
            {
                config.headers["Authorization"] = `Bearer ${accessToken}`;    
            }
            
            return config; // imp to return config

        }, (error) => {
            return Promise.reject(error)
        });

        const responseInterceptor = accessAxios.interceptors.response.use( response => response,
            async (error) => {
            
            if( (error.response.status === 403) || (error.response.status === 401) )
            {
                const accessTokenFromRefreshToken = await refresh();
                await setToken(accessTokenFromRefreshToken.accessToken);
                await setUser(accessTokenFromRefreshToken);
                // use token received from refresh token to set headers since setToken will take time to set token and request headers will be processed with empty token or earlier token
                error.config.headers["Authorization"] = `Bearer ${accessTokenFromRefreshToken.accessToken}`;
                return accessAxios(error.config);
            }
            return Promise.reject(error);
        })

        return () => {
            accessAxios.interceptors.request.eject(requestInterceptor);
            accessAxios.interceptors.response.eject(responseInterceptor);
        }
    },[accessToken, setToken, setUser, refresh])

  return accessAxios;
}
