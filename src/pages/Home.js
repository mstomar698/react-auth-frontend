import React from 'react';
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'

function Home() {
    return (
        <>  
            <Navbar />
            <Link style={{marginRight: '8px'}} to="/Login">Log in</Link>
            <Link to="Signup">Sign up</Link>
        </>
    );
}

export default Home;