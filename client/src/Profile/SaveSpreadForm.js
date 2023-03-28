import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import TarotApi from '../api/api';
import UserContext from '../Auth/UserContext';
import { Form, InputGroup, FormControl } from 'react-bootstrap';
import Alert from '../common/Alert';
import './Profile.css';

// Used to save a spread to the database so that a user can look back over saved spreads and see patterns in card draws or particularly interesting card pulls that they wanted to retain. Renders on the Home page under the CardTable

function SaveSpreadForm({ cardNames }) {
	const today = new Date().toLocaleString('en', { month: 'long', day: 'numeric', year: 'numeric' });
	const history = useNavigate();

	const { currentUser } = useContext(UserContext);
	const [ formErrors, setFormErrors ] = useState([]);
	const [ formData, setFormData ] = useState({
		timedate: today,
		title: '',
		spread: '',
		comments: '',
		username: currentUser.username
	});
	const [ validated, setValidated ] = useState(false);
	/** on form submit:
	   * - attempt save to backend & report any errors
	   * - if successful
	   *   - clear previous error messages and password
	   *   - show save-confirmed message
	   *   - set current user info throughout the site
	   */
	console.log();
	async function handleSubmit(evt) {
		const form = evt.currentTarget;
		if (form.checkValidity() === false) {
			evt.preventDefault();
			evt.stopPropagation();
		}
		else {
		}
		setValidated(true);
		history('/profile');

		let spreadData = {
			timedate: today,
			title: formData.title,
			spread: formData.spread,
			comments: formData.comments,
			username: currentUser.username
		};

		let username = formData.username;
		let newSpread;

		try {
			newSpread = await TarotApi.newSpread(username, spreadData);
		} catch (errors) {
			setFormErrors(errors);
			return;
		}

		setFormData((f) => ({ ...f }));
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
		<Form validated={validated} onSubmit={handleSubmit} className='col-md-6 col-lg-6 offset-md-3 offset-lg-3'>
			<Form.Group controlId='validationCustom01'>
				<Form.Label>Title</Form.Label>
				<InputGroup hasValidation>
					<Form.Control
						required
						name='title'
						type='text'
						placeholder='Title'
						value={formData.title}
						onChange={handleChange}
					/>
					<Form.Control.Feedback>Looks good!</Form.Control.Feedback>
					<Form.Control.Feedback type='invalid'>Please include a title</Form.Control.Feedback>
				</InputGroup>
			</Form.Group>
			<Form.Group>
				<Form.Label>Cards Drawn</Form.Label>
				<Form.Control
					required
					name='spread'
					placeholder='Cards Drawn'
					value={formData.spread}
					onChange={handleChange}
				/>
			</Form.Group>
			<Form.Group>
				<Form.Label>Comments</Form.Label>
				<FormControl
					as='textarea'
					name='comments'
					placeholder='Comments'
					rows={3}
					value={formData.comments}
					onChange={handleChange}
				/>
			</Form.Group>
			<p>{today}</p>
			<p>{currentUser.username}</p>
			{/* {formErrors.length ? <Alert type='danger' messages={formErrors} /> : null}

						{saveConfirmed ? <Alert type='success' messages={[ 'Updated successfully.' ]} /> : null} */}

			<button type='submit'>Save Spread</button>

			{formErrors.length ? <Alert type='danger' messages={formErrors} /> : null}
		</Form>
	);
}

export default SaveSpreadForm;
