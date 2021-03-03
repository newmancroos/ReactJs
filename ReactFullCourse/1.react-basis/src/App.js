import './assets/css/style.css';
import DisplayImage from './components/displayimage';
import React, { useState, useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';

function App() {
  //We used tailwindcss style here
  // npm install tailwindcss
  //import tailwind base namespaces in tailwind.css
  //to create tailwid configuration file
  // npx tailwind init
  //create postcss.config.js
  //then install autoprefixer for tailwind
  // npm install autoprefixer
  // npm install postcss-cli
  //npm install postcss
  //update package.json to build tailwind css and 
  //added this build to start script

  //Use React Hook to handle state in functional component
  //we can define multiple state like this
  //const [state, setState] = useState({title:"Test Title", isShowing:false});
  //but separate usestate is required
  //useState for handling state as in class component
  const [title, setTitle] = useState("Hello React")
  const [isShowing, setIsShowing] = useState(false)

  const mountRef = useRef(false)
    //useEffect is use for handling life cycle
    //ex: useEffect(didUpdat);
    //second parameter [] force to implement ComponentDidMount 

    //ComponentDidMount 
    useEffect(() => {
      console.log("App Mounted");
    },[]);

    //useEffect for Component Updated
    //If value of isShowing changed then display
    //useEffect we can implement every state object wise.
    //if you use title it will disaply once not for show and hide
    //This will Component will update cycle
    useEffect(() => {
      if(mountRef.current){
      console.log("App Updated");
    }
    else
    {
      mountRef.current = true;
    }
    },[isShowing]);

  function handleClick(){
    setIsShowing(!isShowing);
  }
  return (
    <div>
      <div className="bg-gray-600 text-white p-5 border-yellow-800">{title}</div>
       <div>
       {/* <div className="bg-gray-600 text-white p-5 border-yellow-800">Site comming soon..!</div> */}
       <button id="btnDisplay" className="bg-blue-600" onClick={handleClick} >Show/Hide Image</button>
       {
         isShowing ?
        <DisplayImage /> : null
       }
     </div>

    </div>
  );
}


// class App extends React.Component{
//   constructor(props)
//   {
//     super(props);
//     this.state = {isShowing : false}
//   }
//   handleClick = () =>{
//     this.setState({isShowing: !this.state.isShowing});
//   }
//   render(){

//     return(
//       <div>
//       {/* <div className="bg-gray-600 text-white p-5 border-yellow-800">Site comming soon..!</div> */}
//       <button id="btnDisplay" className="bg-blue-600" onClick={this.handleClick} >Show/Hide Image</button>
//       {
//         this.state.isShowing ?
//        <DisplayImage /> : null
//       }
//     </div>
//     )
//   }
// }
export default App;
