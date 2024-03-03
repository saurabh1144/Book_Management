import React, { useState } from "react";
import Input from "../Components/Input";
import { addBookApi } from "../api";
import { useNavigate } from "react-router-dom";

function Add() {
    const navigate=useNavigate();
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [publication, setPublication] = useState("");
  const [description, setDescription] = useState("");

  const addBook = async () => {                      //add book to database logic
    try {
      const newBook = {
        title,
        author,
        publication_year: publication,
        description,
      };
      const addedBook = await addBookApi(newBook);
      console.log("book added", addedBook);

      setTitle('');
      setAuthor('');
      setPublication('');
      setDescription('');
      navigate('/');
      alert("Data Added To the Table")

    } catch (error) {
      console.log(error);
    }
  };
  const back=()=>{
    navigate('/')
  }

  return (
    <div className="container my-4 ">
    <button className="btn btn-outline-primary btn-sm" onClick={back}> Back</button>
      <h2 className="text-center">Add Book to Inventory</h2>
      <div className="row">
      <div className="col-4">

      </div>
      <div className="col-md-4">
      <Input type="text" label="Title" value={title} onChange={setTitle} />
      <Input type="text" label="Author" value={author} onChange={setAuthor} />
      <Input
        type="date"
        label="Publication Year"
        value={publication}
        onChange={setPublication}
      />
      <Input
        type="text"
        label="Description"
        value={description}
        onChange={setDescription}
      />
      <button className="btn btn-primary my-4" onClick={addBook}>
      Add Book
      </button>
      </div>
      <div className="col-4">

      </div>
      
      </div>
    </div>
  );
}

export default Add;
