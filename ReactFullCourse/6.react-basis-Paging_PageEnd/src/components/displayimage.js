import React,{useState, useEffect} from 'react';
import '../assets/css/style.css';
import useFetchImage from '../utils/hooks/useFetchImage';
import Image from './image';
import Loading from './Loading'
import useScroll from '../utils/hooks/useScroll'
export default function DisplayImage() {

    const [page, setPage] = useState(1);
    const [images, setImages, errors, isLoading] = useFetchImage(page)
    const scrollPosition = useScroll();


    //some brwsers will reset the scroll to the top once new set of inages loaded
    //we can resolve this problem by installing react-infinite-scroll-component
    //example in the next part
    useEffect(() => {
       //console.log(scrollPosition, window.innerHeight, document.body.offsetHeight);
       if(scrollPosition >= document.body.offsetHeight - window.innerHeight)
       {
        setPage(page + 1);
       }
    }, [scrollPosition])

    function handleRemove(index)
    {
        setImages([...images.slice(0,index), ...images.slice(index+1, images.length)]);
    }
    function ShowImage()
    {
        return images.map((img, index) => <Image index={index} image={img.urls.regular} handleRemove={handleRemove} key={index} />);
    }

    if(isLoading)  return  <Loading />

    return (
        <section>
            {
                errors.length > 0 &&  <div className="flex h-screen">
                <p className="m-auto">
                    {errors[0]}
                </p>
            </div>
            }


            <div className = "flex flex-wrap" >
                <ShowImage />
            </div>
            {
                errors.length ===0 &&  <button onClick={() =>setPage(page + 1)}>Load More</button>
            }
        </section>
    )
}