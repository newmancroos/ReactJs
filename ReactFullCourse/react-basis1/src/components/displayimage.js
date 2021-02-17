import React,{useState, useEffect} from 'react';
import '../assets/css/style.css';

export default function DisplayImage() {

    //const [myInterval, setMyInterval] = useState(null)

    //Work on DidMount and Unmount
    useEffect(() => {
        console.log("Component Did Mount");
        const interval =setInterval(() => {
            console.log("Hello");
        }, 1000);

        return () =>{
            //Component UnMount
            console.log("Image Comppnent unmount");
            clearInterval(interval);
        }
    }, []);
    return (
        <div>
            <div  className="bg-gray-600 text-white p-5 border-yellow-800">Display Image</div>
        </div>
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