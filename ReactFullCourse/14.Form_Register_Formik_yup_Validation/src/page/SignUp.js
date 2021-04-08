import { useFormik } from 'formik';
import * as Yup from  'yup';

export default function Login()
{
    
    //using FORMIK form tool we are going to make handleing of form easy
    //npm install formik --save
    //npm install -S yup
  const formik = useFormik({
      initialValues:{email:"", password:""},
      onSubmit: (value) => {
          console.log("Formik", value);
      },
    //   validate: (values) =>{
    //       const errors={};      
    //         if(!values.email){
    //             errors.email ="Email field is required"
    //         }else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    //             errors.email = 'Invalid email address';
    //           }
            
    //         if(!values.password){
    //             errors.password ="Password field is required"
    //         } else if(values.password.length <=6){
    //             errors.password ="Password must be longer than 6 characters"
    //         }
    //         return errors;
    //     }
    validationSchema: Yup.object({
            email : Yup.string()
                        .email("Invalid email")
                        .required("Email is required."),
            password : Yup.string()
                        .min(6)
                        .max(15, "Must be 15 charaters or less")
                        .required("Email is required."),
        })
  });
  return (
  <div className="flex h-screen bg-gray-200">
    <div className="m-auto w-1/3 text-white flex flex-wrap justify-center 
    shadow-lg rounded-lg bg-gradient-to-tr from-indigo-900 to-indigo-200">
        <form className="m-5 w-10/12" onSubmit={formik.handleSubmit}>
            <h1 className="w-full text-4xl tracking-widest text-center my-6">
                Sign Up
            </h1>
            <div className="w-full my-6">
                <input type="email" className="p-2 rounded shadow w-full text-black" 
                placeholder="Email or Username"
                // name="email"
                // value={formik.values.email}
                // onChange={formik.handleChange}
                // onBlur={formik.handleBlur}
                {...formik.getFieldProps("email")}   //this will automatically declare name, value, 
                                                     //onChange and onBlur
                />
                {formik.touched.email && formik.errors.email ? (
                    <p>{formik.errors.email}</p>
                ) :null}
                
            </div>
            <div>
                <input type="password"  className="p-2 rounded shadow w-full text-black" 
                placeholder="Password"
                // name="password"
                // value={formik.values.password}
                // onChange={formik.handleChange}
                // onBlur={formik.handleBlur}
                {...formik.getFieldProps("password")}   //this will automatically declare name,value, 
                                                        //onChange and onBlur
                />
                {formik.touched.password && formik.errors.password ? (
                    <p>{formik.errors.password}</p>
                ) : null
                }
            </div>
            <div>
            <button type="submit" 
                className="p-2 my-6 rounded shadow w-full bg-gradient-to-tr 
                from-yellow-900 to-yellow-200 text-black">
                {/* {
                    isLoading ?  <i className="fas fa-circle-notch fa-spin"></i>
                    :  */}
                    "Sign Up"
                {/* } */}
            </button>
            </div>
        </form>
    </div>
  </div>
)}