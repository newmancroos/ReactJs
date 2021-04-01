export default function Login()
{
    function handleForm(e)
    {
        e.preventDefault();
        console.log("Submitted");
    }
  return (
  <div className="flex h-screen bg-gray-200">
    <div className="m-auto w-1/3 text-white flex flex-wrap justify-center 
    shadow-lg rounded-lg bg-gradient-to-tr from-indigo-900 to-indigo-200">
        <form className="m-5 w-10/12" onSubmit={handleForm}>
            <h1 className="w-full text-4xl tracking-widest text-center my-6">
                Login
            </h1>
            <div className="w-full my-6">
                <input type="email" className="p-2 rounded shadow w-full" placeholder="Email or Username" />
            </div>
            <div>
                <input type="password"  className="p-2 rounded shadow w-full" placeholder="Password"/>
            </div>
            <div>
                {/* <button type="submit" 
                    className="p-2 my-6 rounded shadow w-full bg-yellow-400 text-black">
                    Login
                </button> */}
                <button type="submit" 
                    className="p-2 my-6 rounded shadow w-full bg-gradient-to-tr from-yellow-900 to-yellow-200 text-black">
                    Login
                </button>
            </div>
        </form>
    </div>
  </div>
)}