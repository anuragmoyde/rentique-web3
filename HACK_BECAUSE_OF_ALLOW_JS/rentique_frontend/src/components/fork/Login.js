import React from 'react';
import Nav from './Nav';
const Login = () => {
    const handleItemClick = () => {
        window.location.href = `/Fork`;
    };
    return (<div>
        <Nav />
        <div className='Forms'>
            <form>
                <h1>Login</h1>
                <div className='Input'>
                    <div>
                        <input type='email' placeholder='Email'/>
                    </div>
                    <div>
                        <input type='password' placeholder='Password'/>
                    </div>
                    <button type='submit'>Submit</button>
                </div>
            </form>
            <button onClick={handleItemClick} className='Flip'>Dont have an account? Click to SignUp</button>
        </div>      
        

    </div>);
};
export default Login;
