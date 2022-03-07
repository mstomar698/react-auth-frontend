import React from 'react';
import { Link } from 'react-router-dom';
import { EntryPage, PageHeader } from './style';
import EntryCard from '../components/EntryCard/EntryCard';
import InputGroup  from '../components/InputGroup/Inputgroup';
import Input from '../components/Input/Input';
import Button from '../components/Button';

function Login() {
    return (
        <EntryPage>
            <PageHeader to="/">SIH</PageHeader>
            <EntryCard>
                <h2>Log in</h2>
                <form onSubmit={(e) => e.preventDefault()}>
                    <InputGroup>
                        <label htmlfor="login-email">Email Address</label>
                        <Input type="text" placeholder="sih@gmail.com" id="login-email" />
                    </InputGroup>   
                    <InputGroup>
                        <label htmlFor="login-password">Password</label>
                        <Input type='password' placeholder='Password' id='login-password' />
                    </InputGroup>
                    <Button type="submit" full>Log in</Button>
                </form>
                <span>
                    Don't have an account?
                    <Link to="/Signup">Sign up</Link>
                </span>
            </EntryCard>
        </EntryPage>
    );
}

export default Login;