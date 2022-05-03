import React from 'react'
import { Button,Table } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import array from './array';
import { Link, useNavigate } from 'react-router-dom';

function Home() {

let history = useNavigate()

// You may skip this part if you're
// using react-context api or redux
function setID(id,name,date,quantity,price){
	localStorage.setItem('id', id);
	localStorage.setItem('Name', name);
	localStorage.setItem('Date', date);
    localStorage.setItem('Quantity', quantity);
    localStorage.setItem('price', price);
}

// Deleted function - functionality
// for deleting the entry
function deleted(id){
	
	var index = array.map(function(e) { return e.id; }).indexOf(id);

	// deleting the entry with index
	array.splice(index,1)

	// We need to re-render the page for getting
	// the results so redirect to same page.
	history('/')
}

return (
	<div style={{margin:'10rem'}}>
		<Table striped bordered hover size="sm">
<thead>
	<tr>
	<th>Name</th>
	<th>Date</th>
    <th>Quantity</th>
    <th>price</th>
	</tr>
</thead>
<tbody>

	{/* Mapping though every element in the array
	and showing the data in the form of table */}
	{array.map((item) => {
return(
<tr>
	<td>{item.Name}</td>
	<td>{item.Date}</td>
    <td>{item.Quantity}</td>
    <td>{item.price}</td>
		
	{/* getting theid,name, and age for storing these
		value in the jsx with onclick event */}
	<td><Link to={`/edit`}><Button onClick={(e) =>
	setID(item.id,item.Name,item.Date,item.Quantity,item.price)} variant="info">
		Update</Button></Link></td>

	{/* Using thr deleted function passing
	the id of an entry */}
	<td><Button onClick={e => deleted(item.id)}
	variant="danger">Delete</Button></td>
	</tr>
)})}
</tbody>
</Table>

{/* Button for redirecting to create page for
insertion of values */}
<Link className="d-grid gap-2" to='/create'>
<Button variant="warning" size="lg">Create</Button>
</Link>
	</div>
)
}

export default Home
