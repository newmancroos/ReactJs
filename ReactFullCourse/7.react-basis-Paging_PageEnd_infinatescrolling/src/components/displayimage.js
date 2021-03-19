import React,{useState, useEffect} from 'react';
import '../assets/css/style.css';
import useFetchImage from '../utils/hooks/useFetchImage';
import Image from './image';
import Loading from './Loading'
//import useScroll from '../utils/hooks/useScroll'
import InfiniteScroll from 'react-infinite-scroll-component';
export default function DisplayImage() {

    const [searchItem, setSearchTerm] = useState(null);
    const [page, setPage] = useState(1);
    const [images, setImages, errors, isLoading] = useFetchImage(page, searchItem)
    
   


    //some brwsers will reset the scroll to the top once new set of inages loaded
    //we can resolve this problem by installing react-infinite-scroll-component
    //Commented because rect-infinate-scroll-component has all this inbuilt

    //const scrollPosition = useScroll();
    // useEffect(() => {
    //    //console.log(scrollPosition, window.innerHeight, document.body.offsetHeight);
    //    if(scrollPosition >= document.body.offsetHeight - window.innerHeight)
    //    {
    //     setPage(page + 1);
    //    }
    // }, [scrollPosition])

    function handleRemove(index)
    {
        setImages([...images.slice(0,index), ...images.slice(index+1, images.length)]);
    }
    function ShowImage()
    {
        return(
        <InfiniteScroll dataLength={images.length} 
            next={() => setPage(page+1)} 
            hasMore={true}
            className="flex flex-wrap"
            >
            {images.map((img, index) =>( 
                <Image 
                    index={index} 
                    image={img.urls.regular} 
                    handleRemove={handleRemove} key={index} 
                />
            ))}
        </InfiniteScroll>
            )
    }

    const [typingTimeout,setTypingTimeout] = useState("");
    function handleInput(e)
    {
        const text = e.target.value
        clearTimeout(typingTimeout);

        const timeout = setTimeout(() =>{
            setSearchTerm(text);
        }, 1000)
        setTypingTimeout(timeout);
    }
    return (
        <section>
            <div className="my-5">
                <input type="text" 
                    onChange={handleInput} 
                    className="w-full border rounded shadow p-2"
                    placeholder="Search photos here"
                    />
            </div>
            {/* {
                errors.length > 0 &&  <div className="flex h-screen">
                <p className="m-auto">
                    {errors[0]}
                </p>
            </div>
            } */}

            <ShowImage />

            {isLoading && <Loading />}
            {/* {
                errors.length ===0 &&  <button onClick={() =>setPage(page + 1)}>Load More</button>
            } */}
        </section>
    )
}