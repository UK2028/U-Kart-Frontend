import { useRef, useState, useEffect } from "react";

export const useDebounceValue = ( value, delay=500 ) => {

    let id = useRef();

    const [debounce, setDebounce] = useState(value);

    useEffect(() => {
        
        id.current = setTimeout(()=>setDebounce(value),delay);

        return () => {
            clearTimeout(id.current);
        }
    },[value, delay]);
    
    return debounce;
}
