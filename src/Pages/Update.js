import React, { useEffect } from "react";
import { useState } from "react";
import Input from "../Components/Input";
import { useNavigate, useParams } from "react-router-dom";
import { getBooks, updateBookApi } from "../api";


function Update() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [publication, setPublication] = useState("");
  const [description, setDescription] = useState("");
//   const [book, setBook] = useState([]);

  const fetchBook = async () => {
    try {
      const booksData = await getBooks();
      console.log("update", booksData);
      const bookData = booksData.find((book) => book.id === id);
      if (bookData) {
        setTitle(bookData.title);
        setAuthor(bookData.author);
        setPublication(bookData.publication_year);
        setDescription(bookData.description);
      } else {
        console.log("Book Not Found");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const addBook = async () => {
    try {
      const updatedBookData = {
        title,
        author,
        publication_year: publication,
        description,
      };
      await updateBookApi(id, updatedBookData);
      console.log("Book Updated");
      navigate('/');
      alert("Updated Succesfully");
    } catch (error) {}
  };
  useEffect(() => {
    fetchBook();
  }, []);

  const back = () => {
    navigate('/');
  };

  return (
    <div>
      <button
        className="btn btn-outline-primary btn-sm my-3 mx-3"
        onClick={back}
      >
        Back
      </button>
      <div className="container my-2 ">
        <h2 className="text-center">Update</h2>
      <div className="row">
      <div className="col-3">

      </div>
      <div className="col-md-4 col-sm-12 updatee ">
      <Input type="text" label="Title" value={title} onChange={setTitle} />
        <Input type="text" label="Author" value={author} onChange={setAuthor} />
        <Input
          type="text"
          label="Publication Year"
          value={publication}
          onChange={setPublication}
        />
        <Input
          type="textArea"
          label="Description"
          value={description}
          onChange={setDescription}
        />
        <button className="btn btn-success my-4" onClick={addBook}>
          Update
        </button>
      </div>
      <div className="col-3">

      </div>

      </div>
        
      </div>
    </div>
  );
}

export default Update;
