import React, { useEffect } from "react";
import { useState } from "react";
import { deleteBooks, getBooks } from "../api";
import { FaEdit } from "react-icons/fa";
import { IoEyeOutline } from "react-icons/io5";
import { AiOutlineDelete } from "react-icons/ai";
import { Link } from "react-router-dom";


function Home() {
    
  const [data, setData] = useState([]);
 

  const getBooksData = async () => {               //getting books details
    const bookData = await getBooks();
    setData(bookData);
  };

  useEffect(() => {
    getBooksData();
   
  }, []);

  const deleteBook = async (id) => {                   //deleteing the selected books
    console.log(id);
    await deleteBooks(id);
    getBooksData();
    alert("Item Deleted");
   
    
  };
  

  return (
    <div className="container scroll ">
                                                     {/* Table To show the Books in the landing Page   */}
      <div className="table-responsive">
      <table className="table table-striped my-4 ">
        <thead>
          <tr>
            <th scope="col">Sr no.</th>
            <th scope="col">Title</th>
            <th scope="col">Author</th>
            <th scope="col">Publication Year</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {data?.map((book, i) => (
            <tr key={i}>
              <td>{i + 1}</td>
              <td>{book.title}</td>
              <td>{book.author}</td>
              <td>{book.publication_year}</td>
              <td>
              <Link to={`/details/${book.id}`}>
                  <span className="mx-2 view" >
                  <IoEyeOutline />
                  </span>
                </Link>
                <Link to={`/update/${book.id}`} className="update mx-2">
                  <span >
                  <FaEdit />
                  </span>
                </Link>
                <span onClick={() => deleteBook(book.id)} className="mx-2 delete" >
                  <AiOutlineDelete />
                </span>
              </td>
            </tr>
          ))}
        </tbody>
    
      </table>
      </div>
    </div>
  );
}

export default Home;
