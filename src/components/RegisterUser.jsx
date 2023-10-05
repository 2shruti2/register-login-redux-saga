import { Formik, Form, Field, ErrorMessage } from "formik"
import * as yup from 'yup'
import ErrorText from "./ErrorText"
import { useDispatch } from "react-redux"
import { getUser } from "../store/action."
import { useNavigate } from "react-router-dom";


const RegisterUser = () => {

    let dispatch = useDispatch();
    let navigate = useNavigate();

    const initialvalues = {
        email: "",
        password: ""
    }

    const validationSchema = yup.object().shape({
        email: yup.string().email('invalid email address').required("Email is Required"),
        password: yup.string().min(4, 'too short!').required('Password is Required')
    })

    const onSubmit = (values) => {
        dispatch(getUser(values)) 
        navigate("/login")
    }

    return (
        <main>
            <div className="bg-primary h-screen">
                <div className='flex justify-center items-center min-h-screen '>
                    <div className='bg-white px-16 max-sm:px-10 lg:w-[450px] max-sm:mx-6 max-sm:py-6 py-20 rounded-lg shadow-lg'>
                        <div className='h-[40px] w-[40px] mb-5'>
                            <img src='https://react.spruko.com/nowa-ts/preview/assets/favicon-55899f4a.png' alt='icon' />
                        </div>
                        <div className=''>
                            <h2 className='text-3xl font-montserrat font-medium text-primary'>Get Started</h2>
                            <h4 className='text-lg font-montserrat font-medium text-primary'>Sign up!</h4>
                        </div>

                        <Formik initialValues={initialvalues} validationSchema={validationSchema
                        } onSubmit={onSubmit} >
                            {(formikProps) => (
                                <>
                                    <Form className="mt-8 font-palanquin font-medium">
                                        <div className="rounded-md shadow-sm ">

                                            <div className='pb-4'>
                                                <label>Email Address</label>
                                                <Field
                                                    id="email"
                                                    name="email"
                                                    type="email"
                                                    className="relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-primary focus:border-teal-500 focus:z-10 sm:text-sm"
                                                    placeholder="Email Address"
                                                />
                                                <ErrorMessage name="email" component={ErrorText} />
                                            </div>

                                            <div className='pb-4'>
                                                <label>Password</label>
                                                <Field
                                                    id="password"
                                                    name="password"
                                                    type="password"
                                                    className="relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-primary focus:border-teal-500 focus:z-10 sm:text-sm"
                                                    placeholder="Password"
                                                />
                                                <ErrorMessage name="password" component={ErrorText} />
                                            </div>

                                            <button
                                                type="submit"
                                                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-primary hover:bg-teal-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500"
                                            >
                                                Sign Up
                                            </button>


                                        </div>
                                    </Form>
                                </>
                            )}
                        </Formik>

                    </div>
                </div>
            </div>
        </main>
    )
}

export default RegisterUser