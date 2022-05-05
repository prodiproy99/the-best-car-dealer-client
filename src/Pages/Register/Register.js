import React from 'react';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../Loading/Loading';
import SocialLogin from '../SocialLogin/SocialLogin';
import './Register.css'

const Register = () => {
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true }); 
    const navigate = useNavigate();

    if (loading) {
        return <Loading></Loading>
    }

    const handleSubmitRegister = async (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value; 
        await createUserWithEmailAndPassword(email, password);

    }
    if (user) {
        navigate('/home')
    }

    const navigateLogin = (e) => {
        navigate('/login')
    }

    return (
        <div>
             <div className="container">
                <div className="row w-50 mx-auto register-form-container">
                    <h2 className='register-title'>Please Register</h2>
                    <form onSubmit={handleSubmitRegister} className='register-form'>
                        <input type="text" name="name" id="" placeholder='your name' />

                        <input type="email" name="email" id="" placeholder='email address' required />

                        <input type="password" name="password" id="" placeholder='password' required />
 
                        <input className='registerBtn text-white mx-auto d-block mb-2' type="submit" value="Register" />

                    </form>
                    <p>Already Register? <Link to='/login' className='orange text-decoration-none' onClick={navigateLogin}>Please Login?</Link></p>


                </div>
                <SocialLogin />
                
            </div>
        </div>
    );
};

export default Register;