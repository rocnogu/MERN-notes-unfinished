import React, {useState} from 'react';
import axios from 'axios';
//
import Form from 'react-bootstrap/Form'
//
import Button from 'react-bootstrap/Button'
  ///////////
export default function CreateNode() {
  //
 const[input, setInput] = useState({
title: '',
content: ''

 })

  ///////////
 function handleChange(event) {
   const {name, value} = event.target

   setInput(prevInput => {
     return {
       ...prevInput, [name]: value
     }
   })
  }
  ///////////
  function handleClick(event) {
    event.preventDefault();
    console.log(" create note data send")
 //
 const newNote = {
title: input.title,
content: input.content

 }
  axios.post('http://localhost:4321/create', newNote) 
   }
  ///////////
  return (
    <div className="container">
<h1>CreateNode</h1>


<Form>
    <Form.Control onChange={handleChange} type="text" placeholder="title" name="title" />
<br/>
    <Form.Control onChange={handleChange} type="text" placeholder="content" name="content" />


    <br/>
  <Button variant="primary" type="submit" onClick={handleClick}>
    Submit
  </Button>
</Form>

<br/>
<br/>
<br/>
<br/>


<form>
  <div>
    <input onChange={handleChange} value={input.title} placeholder="title" name="title"></input>
  </div>

  <div>
    <input onChange={handleChange}  value={input.content} placeholder="content" name="content"></input>
  </div>

<button onClick={handleClick}  className="btn btn-lg btn-info"> ADD </button>


</form>


    </div>
  );
}
