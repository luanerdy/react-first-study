import React, { useState } from 'react';

function AddPersonForm(props) {
	
	const [person, setPerson] = useState("");

	function handleChange(e) {

		setPerson(e.target.value);
	}

	function handleSubmit(e) {

		e.preventDefault();
		props.handleSubmit(person);
		setPerson('');
	}

	return (
		<form onSubmit={handleSubmit}>
			<input 
			type="text" 
			placeholder="Add new contact"
			onChange={handleChange}
			value={person}/>

			<button type="submit">
				Add
			</button>
		</form>
	);
}

export default AddPersonForm;