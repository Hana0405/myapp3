
export default function validateInfo (values){
    let errors={}
    // username errors 
    if(!values.username.trim()) 
        errors.username='Username required'
    // email errors
    if(!values.email)
        errors.email='Email required'
    else if (!/\S+@\S+\.\S+/.test(values.email))
        errors.email='Email address is invalid'
    // password errors
    if(!values.password)
        errors.password='Password is required'
    else if (values.password.length <6)
        errors.password='Password needs to be 6 characters or more'
    // password2 errors 
    if(!values.password2)
        errors.password2='Password is required'
    else if (values.password !== values.password2)
        errors.password2='Passwords do not match'
    
    return errors 
}
