import React,{useState, useEffect} from 'react';
import '../assets/css/style.css';

export default function DisplayImage() {

    
    const [images, setImages] =  useState([
        "https://images.unsplash.com/photo-1576440956592-dca3975eb93c?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
        "https://images.unsplash.com/photo-1612130679272-4b6a43e93311?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=752&q=80",
        "https://images.unsplash.com/photo-1612166386342-3b6c63c85008?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80",
        "https://images.unsplash.com/photo-1613425269135-fb9f19ae7be8?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
        "https://images.unsplash.com/photo-1613031260991-32a5b283e53f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=322&q=80"
    ])

    const [newImageUrl, setNewImageUrl]=useState("");
    function ShowImage()
    {
        return images.map((image) => {
            return(
            <div className="w-1/3">
                <img src={image}  width="150"/>
            </div>
        )})
    }
    function handleAdd()
    {
        // let tempImages = [...images, "https://images.unsplash.com/photo-1613169620329-6785c004d900?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"]
        // setImages(tempImages)

        setImages([...images,newImageUrl]);
        setNewImageUrl("");
    }

    function handleChange(event)
    {
        setNewImageUrl(event.target.value);
    }
    return (
        <section>
            <div className = "flex flex-wrap justify-center bg-blue-800 w-1/2">
                <ShowImage />
            </div>
            <div className="flex justify-center my-5"  width="70%">
                    <input type="text" className="p-2 border border-gray-800 rounded" 
                    value={newImageUrl}
                    onChange={handleChange} />
                    <button className="p-2 bg-green-800 text-white" onClick={handleAdd}>Add New</button>
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