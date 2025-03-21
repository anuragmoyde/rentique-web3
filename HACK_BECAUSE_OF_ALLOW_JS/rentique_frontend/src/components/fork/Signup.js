import React from 'react';
import Nav from './Nav';
const Signup = () => {
    const handleItemClick = () => {
        window.location.href = `/Fork2`;
    };
    return (<div>
        <Nav />
        <div className='Forms'>
            <form>
                <h1>Sign Up</h1>
                <div className='Input'>
                    <div>
                        <input type='email' placeholder='Email'/>
                    </div>
                    <div>

                        <input type='name' placeholder='Username'/>
                    </div>
                    <div>
                        <input type='password' placeholder='Password'/>
                    </div>
                    <button type='submit'>Submit</button>
                </div>
            </form>
            <button onClick={handleItemClick} className='Flip'>Already Registered? Click to login</button>
        </div>      
        

    </div>);
};
export default Signup;
