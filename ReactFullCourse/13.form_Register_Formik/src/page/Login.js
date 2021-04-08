import firebase from '../config/firebase';
import {useState} from 'react';
import {Redirect, useHistory} from 'react-router-dom';
export default function Login()
{
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState("");
    const [form, setForm] = useState({email:"", password:""});
    //const [isLoggedin, setIsLoggedin] = useState(false); // also use History push

    const history = useHistory();
    function handleForm(e)
    {
        if(isLoading) return; 
        setIsLoading(true);
        e.preventDefault();
        firebase.auth().signInWithEmailAndPassword(form.email, form.password)
        .then(res =>{
            //setIsLoggedin(true);  //also use History.push
            //history.push("/");    // browser back button bring back to login screen
            history.replace("/");
            setIsLoading(false);
            setError("");
            
        }).catch(e => {
            setError(e.message);
            setIsLoading(false);
        })
    }

    function handleInput(e)
    {
        setForm({...form, [e.target.name] : e.target.value})

    }

    // if(isLoggedin) return <Redirect to="/" />;    // OR we can use History push
                                                    // <Redirect is good when Login
                                                    // because it will not work for
                                                    //Back Browser button

  return (
      //npm install firebase
  <div className="flex h-screen bg-gray-200">
    <div className="m-auto w-1/3 text-white flex flex-wrap justify-center 
    shadow-lg rounded-lg bg-gradient-to-tr from-indigo-900 to-indigo-200">
        <form className="m-5 w-10/12" onSubmit={handleForm}>
            <p>{error !== "" ? error : ""}</p>
            <h1 className="w-full text-4xl tracking-widest text-center my-6">
                Login
            </h1>
            <div className="w-full my-6">
                <input type="email" className="p-2 rounded shadow w-full text-black" 
                placeholder="Email or Username"
                name="email"
                value={form.email}
                onChange={handleInput}
                />
            </div>
            <div>
                <input type="password"  className="p-2 rounded shadow w-full text-black" 
                placeholder="Password"
                name="password"
                value={form.password}
                onChange={handleInput}
                />
            </div>
            <div>
                {/* <button type="submit" 
                    className="p-2 my-6 rounded shadow w-full bg-yellow-400 text-black">
                    Login
                </button> */}
                <button type="submit" 
                    className="p-2 my-6 rounded shadow w-full bg-gradient-to-tr 
                    from-yellow-900 to-yellow-200 text-black">
                    {
                        isLoading ?  <i className="fas fa-circle-notch fa-spin"></i>
                        : "Login"
                    }
                </button>
            </div>
        </form>
    </div>
  </div>
)}