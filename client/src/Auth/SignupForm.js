import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './SignupForm.css';
import Alert from '../common/Alert';

function SignupForm({ signup }) {
	const history = useNavigate();
	const [ formData, setFormData ] = useState({ username: '', password: '', firstName: '', lastName: '', email: '' });
	const [ formErrors, setFormErrors ] = useState([]);

	async function handleSubmit(e) {
		e.preventDefault();
		let result = await signup(formData);
		if (result.success) {
			history('/');
		}
		else {
			console.log(result.errors);
			setFormErrors(result.errors);
		}
	}

	function handleChange(e) {
		const { name, value } = e.target;
		setFormData((data) => ({ ...data, [name]: value }));
	}

	return (
		<div className='SignupForm container col-md-6 offset-md-3 col-lg-4 offset-lg-4'>
			<h3 className='mb3'>Sign Up</h3>
			<div className='card'>
				<div className='card-body'>
					<form onSubmit={handleSubmit}>
						<div className='form-group'>
							<label>Username</label>
							<input
								name='username'
								className='form-control'
								value={formData.username}
								onChange={handleChange}
							/>
						</div>
						<div className='form-group'>
							<label>Password</label>
							<input
								type='password'
								name='password'
								className='form-control'
								autoComplete='current-password'
								value={formData.password}
								onChange={handleChange}
							/>
						</div>
						<div className='form-group'>
							<label>First name</label>
							<input
								name='firstName'
								className='form-control'
								value={formData.firstName}
								onChange={handleChange}
							/>
						</div>
						<div className='form-group'>
							<label>Last name</label>
							<input
								name='lastName'
								className='form-control'
								value={formData.lastName}
								onChange={handleChange}
							/>
						</div>
						<div className='form-group'>
							<label>Email</label>
							<input
								type='email'
								name='email'
								className='form-control'
								value={formData.email}
								onChange={handleChange}
							/>
						</div>
						<button type='submit' className='btn btn-primary' onSubmit={handleSubmit}>
							Submit
						</button>
						{formErrors.length ? <Alert messages={formErrors} /> : null}
					</form>
				</div>
			</div>
		</div>
	);
}

export default SignupForm;
