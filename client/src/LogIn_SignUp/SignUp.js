import React from 'react';
import SignupForm from '../Auth/SignupForm';
import LoginForm from '../Auth/LoginForm';
import './SignUp.css';

const SignUp = ({ signup, login }) => {
	return (
		<div className='SignUp-Login-Form-Layout'>
			<LoginForm login={login} />
			<p className='SignUp-P'>
				Haven't signed up yet? Sign up below to access additional features like the ability to draw more than
				one card at a time, or save your thoughts about a spread. Muddlefog Tarot will always be free!
			</p>
			<SignupForm signup={signup} />
			<p className='SignUp-P'>
				<em>
					Muddlefog Tarot only uses your email address for identification purposes - we will not spam you or
					sell your information
				</em>
			</p>
		</div>
	);
};
export default SignUp;
