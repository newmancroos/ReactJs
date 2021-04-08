import { useFormik, Formik, Form, ErrorMessage, Field } from 'formik';
import { useHistory } from 'react-router';
import * as Yup from  'yup';
import firebase from "../config/firebase";
export default function Login()
{
    const history = useHistory();
    //using FORMIK form tool we are going to make handleing of form easy
    //npm install formik --save
    //npm install -S yup

//   const formik = useFormik({
//       initialValues:{email:"", password:""},
//       onSubmit: (value) => {
//           console.log("Formik", value);
//       },

//       validationSchema: Yup.object({
//             email : Yup.string()
//                         .email("Invalid email")
//                         .required("Email is required."),
//             password : Yup.string()
//                         .min(6)
//                         .max(15, "Must be 15 charaters or less")
//                         .required("Email is required."),
//         })
//   });

  return (
  <Formik
    initialValues={{email:"", password:""}}
      onSubmit= {(value, formikBag) => {
          //console.log("Formik", value);
          firebase.auth().createUserWithEmailAndPassword(value.email, value.password)
          .then(res => {
            history.replace("/");
          }).catch(e => {
            console.log(e);
            //formikBag.setFieldError("email", e.message);
            //formikBag returns the error object in formik so that we can set error 
          });
      }} 
      validationSchema= {Yup.object({
            email : Yup.string()
                        .email("Invalid email")
                        .required("Email is required."),
            password : Yup.string()
                        .min(6)
                        .max(15, "Must be 15 charaters or less")
                        .required("Password is required."),
        })}
  >
      {
        //(formik) => (   // instead of using this function we can use formik Form,Field and label
            <div className="flex h-screen bg-gray-200">
                <div className="m-auto w-1/3 text-white flex flex-wrap justify-center 
                shadow-lg rounded-lg bg-gradient-to-tr from-indigo-900 to-indigo-200">
                    <Form className="m-5 w-10/12">
                        {/* Removed onSubmit={formik.handleSubmit} */}
                        {/* Formik Form not form */}
                        <h1 className="w-full text-4xl tracking-widest text-center my-6">
                            Sign Up
                        </h1>
                        <div className="w-full my-6">
                            {/* <input type="email" className="p-2 rounded shadow w-full text-black" 
                            placeholder="Email or Username"
                            {...formik.getFieldProps("email")}   //this will automatically declare name, value, 
                                                                //onChange and onBlur
                            /> */}
                            <Field 
                                name="email"
                                type="email" 
                                className="p-2 rounded shadow w-full text-black" 
                                placeholder="Email or Username"
                            />
                            {/* {formik.touched.email && formik.errors.email ? (
                                <p>{formik.errors.email}</p>
                            ) :null} */}
                            <ErrorMessage name="email" />
                            
                        </div>
                        <div>

                            {/* <input type="password"  className="p-2 rounded shadow w-full text-black" 
                            placeholder="Password"
                            {...formik.getFieldProps("password")}   //this will automatically declare name,value, 
                                                                    //onChange and onBlur
                            /> */}

                            <Field 
                                name="password"
                                type="password"  
                                className="p-2 rounded shadow w-full text-black" 
                                placeholder="Password"
                            />
                            {/* {formik.touched.password && formik.errors.password ? (
                                <p>{formik.errors.password}</p>
                            ) : null
                            } */}
                             <ErrorMessage name="password" />
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
                    </Form>
                </div>
            </div>
    //)
    }
</Formik>
)}