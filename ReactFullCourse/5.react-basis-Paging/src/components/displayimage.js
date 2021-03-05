import Axios from 'axios';
import React,{useState, useEffect, useRef, useLayoutEffect} from 'react';
import '../assets/css/style.css';
import useScroll from '../utils/hooks/useScroll';
import useFetchImage from '../utils/hooks/useFetchImage';
import Image from './image';
export default function DisplayImage() {

    //const [images, setImages] =  useState([]);
    //images now we get from useFetchImage hook
    const [images, setImages] = useFetchImage()


    //------------------Using user defined hook------------------------------
        const scrollPosition = useScroll();
    //------------------------------------------------------------------------

    //We can use core javascript inside react component. so we have to use UseRef
    //1. Define const inputRef= useRef(null)
    //2. assigna id to the input controll and ref={inputRef} now inputRef hold the reference of the input control
    //3. Use inputRef.Current  will return the reference to the control so we can use .focus()
    const inputRef = useRef(null);
    ////const varRef  = useRef(0);
    useEffect(() => {
        //const inputBox = document.getElementById("inputBox");
        //inputBox.focus();
        inputRef.current.focus();

        //Move client_id to a environment file
        // axios.get('https://api.unsplash.com/photos/?client_id=abSwcSg_UBFluFO6OC8loCRspIjHkjIycsk9bCYK144'
        // ).then((res) => {
        //     setImages(res.data);
        // });
        console.log(process.env.REACT_APP_UNSPLASH_KEY);

        //Move it to useFetchImge Hook
        // Axios.get(`${process.env.REACT_APP_UNSPLASH_URL}/?client_id=${process.env.REACT_APP_UNSPLASH_KEY}`
        // ).then((res) => {
        //     setImages(res.data);
        // });

    }, []);

    //we should not use any Set state with in Useeffect that will cinfinatly updates the compponent
    // useEffect(() => {
    //     //varRef.current = images.length;
    //     varRef.current += 1;
    // });

    // useEffect(() => {
    //     console.log("I'm updated 1")
    // });
    //UseEffect doesn't wait for component did updated just fire before that
    // useLayoutEffect(() => {
    //     console.log("I'm updated 2")
    // });
    //when you call any function and display the result on the screen you can notice a flicker of screen
    // but if you write the same code in useLayeffect you can notice the flickering because result will be picked before 
    //component get updated and when component get update the result will be there
    //and will be printed without any flickering


    const [newImageUrl, setNewImageUrl]=useState("");

    function handleRemove(index)
    {
        //setImages(images.filter((image,i) => i !== index));
        setImages([...images.slice(0,index), ...images.slice(index+1, images.length)]);
    }
    
    
    function ShowImage()
    {
        return images.map((img, index) => <Image index={index} image={img.urls.regular} handleRemove={handleRemove} key={index} />);
    }
    function handleAdd()
    {
        // let tempImages = [...images, "https://images.unsplash.com/photo-1613169620329-6785c004d900?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"]
        // setImages(tempImages)
        if(newImageUrl !=="")
        {
            setImages([...images,newImageUrl]);
            setNewImageUrl("");
        }
    }

    function handleChange(event)
    {
        setNewImageUrl(event.target.value);
    }
    return (
        <section>
            {/* <h2>{varRef.current} times updated</h2> */}

            {/* Using user defined Hook */}
            <div className="fixed">
                {scrollPosition}
            </div>

            <div className = "flex flex-wrap justify-center bg-blue-800 w-10/12 mx-20">
                <ShowImage />
            </div>
            <div className="flex justify-center my-5 w-10/12 mx-20">
                <div className="w-full">
                    <input id="inputBox" ref={inputRef} type="text" className="p-2 border border-gray-800 rounded w-full" 
                    value={newImageUrl}
                    onChange={handleChange} />
                </div>
                <div className="">
                    <button disabled = {newImageUrl === ""}
                        className={`p-2  text-white ml-2 ${newImageUrl ===""? "bg-green-300" : "bg-green-600"}`} 
                        onClick={handleAdd}>Add</button>
                   </div>
            </div>
        </section>
    )
}

// class DisplayImage extends React.Component{
//     constructor(props)
//     {
//         super(props);
//         this.state = {interval : null};
//     }
//     componentDidMount(){
//         console.log("Component Did Mount");
//         this.setState({
//             interval : setInterval(() => {
//                 console.log("Hello");
//             }, 1000)
//         })
//     }

//     componentWillUnmount(){
//         clearInterval(this.state.interval);
//         console.log("Component Did Unmount");
//     }
//     componentDidUpdate()
//     {
//         console.log("Component Updated");
//     }
//     render(){
//         return(
//             <div  className="bg-gray-600 text-white p-5 border-yellow-800">Display Image</div>
//         )
//     }
// }

//export default DisplayImage;