import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getBooks } from '../api';
import { useNavigate } from 'react-router-dom';


function BookDetails() {
    const navigate=useNavigate();
    const {id}=useParams();
    const [book,setBook]=useState([])
    
    const fetchBooks=async()=>{       //fetchhing book details and displaying the books details
        try{
            const book=await getBooks();
            const myBook=book.find((data)=>data.id===id);
            console.log(myBook);
            setBook(myBook);

        }catch(error){

        }
    }

    useEffect(()=>{
        fetchBooks();
    },[])

    const back=()=>{
        navigate('/')
    }
  return (
    <div className='conatiner'>
    <button className='btn btn-outline-primary btn-sm my-3 mx-3' onClick={back}>Back</button>
   
      <h2 className='text-center mb-3'>Book Details</h2>

      <div className="card sm-12 md-6 lg-4 text-center">
    <div className="card-body">
    <h5 className="card-title">Title: {book.title}</h5>
    <h6 className="card-subtitle mb-2 text-muted">Author: {book.author}</h6>
    
    <br></br>
    <h5>Description :</h5>
    <p className="card-text">{book.description}</p>
    <h6> Year: {book.publication_year}</h6>
    
  </div>
</div>
    </div>
  )
}

export default BookDetails
