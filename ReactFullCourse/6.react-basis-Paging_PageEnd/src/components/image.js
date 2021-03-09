
import React,{useState} from 'react';
import '../assets/css/style.css';

export default function Image({index, image, handleRemove}){
    var [isHovering, setIsHovering] = useState(false);
    return(
        <div className="p-1 m-1 border flex justify-center" onMouseEnter={() => setIsHovering(true)} 
            onMouseLeave={() => setIsHovering(false)}>
                <div className="relative">
                    <i className={`fas fa-times absolute right-0 
                                text-white opacity-25 hover:opacity-100 
                                cursor-pointer ${isHovering ? "" : "hidden"}`}  onClick={()=>handleRemove(index)}></i>
                    <img src={image} alt="test" width="100%" height="auto"/>
                </div>
        </div>
    );
} 