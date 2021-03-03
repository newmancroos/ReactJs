import React,{useState, useEffect} from 'react';
import '../assets/css/style.css';

export default function DisplayImage() {

    
    const [images, setImages] =  useState([
        "https://images.unsplash.com/photo-1576440956592-dca3975eb93c?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
        "https://images.unsplash.com/photo-1612130679272-4b6a43e93311?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=752&q=80",
        "https://images.unsplash.com/photo-1537819191377-d3305ffddce4?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=708&q=80",
        "https://images.unsplash.com/photo-1613425269135-fb9f19ae7be8?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
        "https://images.unsplash.com/photo-1613751521417-7953f4bf31a4?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=889&q=80"
    ])

    const [newImageUrl, setNewImageUrl]=useState("");

    function handleRemove(index)
    {
        //setImages(images.filter((image,i) => i !== index));
        setImages([...images.slice(0,index), ...images.slice(index+1, images.length)]);
    }
    var [isHovering, setIsHovering] = useState(-1);
    
    function ShowImage()
    {
        return images.map((image, index) => {
            return(
            <div className="w-1/3 my-4 px-8 flex justify-center" key={index}  onMouseEnter={() => setIsHovering(index)} 
            onMouseLeave={() => setIsHovering(-1)}>
                <div className="relative">
                    <i className={`fas fa-times absolute right-0 
                                text-white opacity-25 hover:opacity-100 
                                cursor-pointer ${isHovering === index ? "" : "hidden"}`}  onClick={()=>handleRemove(index)}></i>
                    <img src={image} alt="test" width="350"/>
                </div>
            </div>
        )})
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
            <div className = "flex flex-wrap justify-center bg-blue-800 w-10/12 mx-20">
                <ShowImage />
            </div>
            <div className="flex justify-center my-5 w-10/12 mx-20">
                <div className="w-full">
                    <input type="text" className="p-2 border border-gray-800 rounded w-full" 
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