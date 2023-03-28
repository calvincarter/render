import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import TarotApi from '../api/api';
import UserContext from '../Auth/UserContext';
import Alert from '../common/Alert';

function EditForm() {
	const history = useNavigate();
	const { currentUser, setCurrentUser } = useContext(UserContext);

	const [ formData, setFormData ] = useState({
		firstName: currentUser.firstName,
		lastName: currentUser.lastName,
		email: currentUser.email,
		username: currentUser.username,
		password: ''
	});
	const [ formErrors, setFormErrors ] = useState([]);

	/** on form submit:
   * - attempt save to backend & report any errors
   * - if successful
   *   - clear previous error messages and password
   *   - show save-confirmed message
   *   - set current user info throughout the site
   */

	async function handleSubmit(evt) {
		evt.preventDefault();

		let profileData = {
			firstName: formData.firstName,
			lastName: formData.lastName,
			email: formData.email,
			password: formData.password
		};

		let username = formData.username;
		let updatedUser;

		try {
			updatedUser = await TarotApi.saveProfile(username, profileData);
		} catch (errors) {
			setFormErrors(errors);
			return;
		}

		setFormData((f) => ({ ...f, password: '' }));
		setCurrentUser(updatedUser);
		history('/profile');

		// // trigger reloading of user information throughout the site
	}

	/** Handle form data changing */
	function handleChange(evt) {
		const { name, value } = evt.target;
		setFormData((f) => ({
			...f,
			[name]: value
		}));
	}

	return (
		<div className='col-md-6 col-lg-4 offset-md-3 offset-lg-4'>
			<h3>Profile</h3>
			<div className='card'>
				<div className='card-body'>
					<form>
						<div className='form-group'>
							<label>Username</label>
							<p className='form-control-plaintext'>{formData.username}</p>
						</div>
						<div className='form-group'>
							<label>First Name</label>
							<input
								name='firstName'
								className='form-control'
								value={formData.firstName}
								onChange={handleChange}
							/>
						</div>
						<div className='form-group'>
							<label>Last Name</label>
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
								name='email'
								className='form-control'
								value={formData.email}
								onChange={handleChange}
							/>
						</div>
						<div className='form-group'>
							<label>Confirm password to make changes:</label>
							<input
								type='password'
								name='password'
								className='form-control'
								value={formData.password}
								onChange={handleChange}
							/>
						</div>

						{formErrors.length ? <Alert type='danger' messages={formErrors} /> : null}

						{/* {saveConfirmed ? <Alert type='success' messages={[ 'Updated successfully.' ]} /> : null} */}

						<button className='btn btn-primary btn-block mt-4' onClick={handleSubmit}>
							Save Changes
						</button>
					</form>
				</div>
			</div>
		</div>
	);
}

export default EditForm;
