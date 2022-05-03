import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import array from './array';
import { v4 as uuid } from 'uuid';
import { Link, useNavigate } from 'react-router-dom';

function Create() {

	// Making usestate for setting and
	// fetching a value in jsx
	const [name, setname] = useState('');
	const [date, setdate] = useState('');
    const[quantity,setquantity]=useState('');
    const [price, setprice] = useState('');


	// Using useNavigation for redirecting to pages
	let history = useNavigate();

	// Function for creating a post/entry
	const handelSubmit = (e) =>{
		e.preventDefault(); // Prevent reload

		const ids = uuid() // Creating unique id
		let uni = ids.slice(0,8) // Slicing unique id

		// Fetching a value from usestate and
		// pushing to javascript object
		let a = name, b=date,c=quantity,d=price
		array.push({id:uni,Name:a,Date:b,Quantity:c,price:d})


	// Redirecting to home page after creation done
	history('/')
		
	}

return (
	<div >
		<Form className="d-grid gap-2" style={{margin:'15rem'}}>

{/* Fetching a value from input textfirld
in a setname using usestate*/}
<Form.Group className="mb-3" controlId="formBasicName">
	<Form.Control onChange={e => setname(e.target.value)}
				type="text"
				placeholder="Enter Name" required/>
</Form.Group>


	{/* Fetching a value from input textfirld in
	a setage using usestate*/}
<Form.Group className="mb-3" controlId="formBasicDate">
	<Form.Control onChange={e => setdate(e.target.value)}
				type="text"
				placeholder="Date" required/>
</Form.Group>
<Form.Group className="mb-3" controlId="formBasicQuantity">
	<Form.Control onChange={e => setquantity(e.target.value)}
				type="text"
				placeholder="Quantity" required/>
</Form.Group>
<Form.Group className="mb-3" controlId="formBasicprice">
	<Form.Control onChange={e => setprice(e.target.value)}
				type="text"
				placeholder="price" required/>
</Form.Group>

	{/* handing a onclick event in button for
	firing a function */}
<Button
onClick={e => handelSubmit(e)}
	variant="primary" type="submit">
	Submit
</Button>

{/* Redirecting back to home page */}
<Link className="d-grid gap-2" to='/'>
	<Button variant="info" size="lg">
	Home
	</Button>
</Link>

</Form>
	</div>
)
}

export default Create
