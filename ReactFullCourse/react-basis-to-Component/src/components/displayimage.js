import React,{useState, useEffect, useRef, useLayoutEffect} from 'react';
import '../assets/css/style.css';
import Image from './image';
export default function DisplayImage() {

    
    const [images, setImages] =  useState([
        "https://images.unsplash.com/photo-1576440956592-dca3975eb93c?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
        "https://images.unsplash.com/photo-1612130679272-4b6a43e93311?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=752&q=80",
        "https://images.unsplash.com/photo-1537819191377-d3305ffddce4?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=708&q=80",
        "https://images.unsplash.com/photo-1613425269135-fb9f19ae7be8?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
        "https://images.unsplash.com/photo-1613751521417-7953f4bf31a4?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=889&q=80"
    ])


    //We can use core javascript inside react component. so we have to use UseRef
    //1. Define const inputRef= useRef(null)
    //2. assigna id to the input controll and ref={inputRef} now inputRef hold the reference of the input control
    //3. Use inputRef.Current  will return the reference to the control so we can use .focus()
    const inputRef = useRef(null);
    const varRef  = useRef(0);
    useEffect(() => {
        //const inputBox = document.getElementById("inputBox");
        //inputBox.focus();
        inputRef.current.focus();
    }, []);

    //we should not use any Set state with in Useeffect that will cinfinatly updates the compponent
    useEffect(() => {
        //varRef.current = images.length;
        varRef.current += 1;
    });

    useEffect(() => {
        console.log("I'm updated 1")
    });
    //UseEffect doesn't wait for component did updated just fire before that
    useLayoutEffect(() => {
        console.log("I'm updated 2")
    });
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
        return images.map((img, index) => <Image index={index} image={img} handleRemove={handleRemove} key={index} />);
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
            <h2>{varRef.current} times updated</h2>
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