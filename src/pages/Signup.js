import React from 'react';
import { Link } from 'react-router-dom';
import { EntryPage, PageHeader } from './style';
import EntryCard from '../components/EntryCard/EntryCard';
import InputGroup  from '../components/InputGroup/Inputgroup';
import Input from '../components/Input/Input';
import Button from '../components/Button';

function Signup() {
    return (
        <EntryPage>
            <PageHeader to="/">SIH</PageHeader>
            <EntryCard>
                <h2>Sign up</h2>
                <form onSubmit={(e) => e.preventDefault()}>
                    <InputGroup>
                        <label htmlfor="Signup-name">Full Name</label>
                        <Input type="text" placeholder="sih -poppins" id="Signup-name" />
                    </InputGroup>   
                    <InputGroup>
                        <label htmlFor="Signup-email">Email Address</label>
                        <Input type='text' placeholder='sih@gmail.com' id='Signup-email' />
                    </InputGroup>
                    <InputGroup>
                        <label htmlFor="Signup-password">Password</label>
                        <Input type='password' placeholder='Password' id='Sign-password' />
                    </InputGroup>
                    <Button type="submit" full>Sign up</Button>
                </form>
                <span>
                    Already have an account?
                    <Link to="/Login">Log in</Link>
                </span>
            </EntryCard>
        </EntryPage>
    );
}

export default Signup;