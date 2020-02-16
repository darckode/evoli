import React from 'react';
import FormInput from '../form-input/form-input';
import CustomButton from '../custom-button/custom-button';
import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';

import './sign-up.scss';

class SignUp extends React.Component {
    constructor() {
        super();
        this.state = {
            displayName: '',
            email: '',
            password: '',
            confirmPassword: ''
        }
    }

    handleSubmit = async event => {
        event.preventDefault();
        const { displayName, email, password, confirmPassword } = this.state;

        if (password !== confirmPassword) {
            alert("Passwords do not match");
            return;
        }

        try {
            const { user } = await auth.createUserWithEmailAndPassword(email, password);

            await createUserProfileDocument(user, { displayName });

            this.setState({
                displayName: '',
                email: '',
                password: '',
                confirmPassword: ''
            })
        } catch (error) {
            console.error(error)
        }
    }

    handleChange = event => {
        const { name, value } = event.target;

        this.setState({ [name]: value })
    };

    render() {
        const { displayName, email, password, confirmPassword } = this.state;
        return(
            <div className='sign-up'>
                <h2>I do not have an account yet</h2>
                <span>Sign up with email and password</span>

                <form className='sign-up-form' onSubmit={this.handleSubmit}>
                <FormInput 
                        name='displayName' 
                        type='text' 
                        value={displayName}
                        label='Display Name'
                        handleChange={this.handleChange}
                        required />
                    <FormInput 
                        name='email' 
                        type='email' 
                        value={email}
                        label='Email'
                        handleChange={this.handleChange}
                        required />
                    <FormInput 
                        name='password' 
                        type='password' 
                        value={password}
                        label='Password'
                        handleChange={this.handleChange}
                        required 
                    />
                    <FormInput 
                        name='confirmPassword' 
                        type='password' 
                        value={confirmPassword}
                        label='Confirm Password'
                        handleChange={this.handleChange}
                        required 
                    />
                    <div className='buttons'>
                        <CustomButton type='submit'>Sign up</CustomButton>
                    </div>   
                </form>
            </div>
        );
    }
}

export default SignUp;

