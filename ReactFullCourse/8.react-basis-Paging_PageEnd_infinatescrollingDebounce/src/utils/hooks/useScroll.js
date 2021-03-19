import React, {useState,useEffect} from "react"

//Create new hook
export default function useScroll()
{
    const [scrollPosition, setscrollPosition] = useState(null);

    function handleScroll()
    {
        setscrollPosition(window.scrollY)
    }
    useEffect(() => {
        document.addEventListener('scroll', handleScroll);
        return () => document.removeEventListener('scroll', handleScroll);  //this will fires during unmount
    }, []);

    return scrollPosition;
}