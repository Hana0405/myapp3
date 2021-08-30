import { useState } from 'react'
import  '../../App.css'
import FormSignUp from './SignUpForm/FormSignUp'
import './SignUpForm/Form.css'
// import './SignUpForm/Form.css'
import FormSuccess from './SignUpForm/FormSuccess'




const SignUp = () => {
    const [isSubmitted, setIsSubmitted] = useState(false);
    // const location = useLocation();
    function submitForm() {
        setIsSubmitted(true);
    }
    return (
        // {/* {location.pathname !== '/' && (<Navbar />)} */}
        <div className='form-container'>
            <span className='close-btn'>×</span>
            {!isSubmitted ? (
            <FormSignUp submitForm={submitForm} />
            ) : (
            <FormSuccess />
            )}
        </div>
    )
}

export default SignUp
