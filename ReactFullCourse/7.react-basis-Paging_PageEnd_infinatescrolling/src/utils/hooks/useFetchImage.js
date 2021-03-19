import {useState, useEffect} from "react"
import Axios from 'axios';

const api = process.env.REACT_APP_UNSPLASH_API;
const secret = process.env.REACT_APP_UNSPLASH_KEY;
export default function UseFetchImage(page, searchTerm)
{
    const [images, setImages] = useState([]);
    const [errors, setErrors] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        Axios.get(`${api}/photos?client_id=${secret}&page=${page}`
        ).then((res) => {
            setImages([...images, ...res.data]);
            setIsLoading(false);
        }).catch((err) => {
            setErrors(["Unable to fetch images"])
            setIsLoading(false);
        });
    }, [page]);


    useEffect(() => {
        if(searchTerm === null) return;
        setIsLoading(true);
        Axios.get(`${api}/search/photos?client_id=${secret}&page=${page}&query=${searchTerm}`
        ).then((res) => {
            setImages([...res.data.results]);
            setIsLoading(false);
        }).catch((err) => {
            setErrors(["Unable to fetch images"])
            setIsLoading(false);
        });
    }, [searchTerm]);
    

    return [images, setImages, errors, isLoading];
}