import axios from "axios";

const api="https://book-server-qwf1.onrender.com";                   //api end point 

export const getBooks = async ()=>{
    try{
        const response= await axios.get(`${api}/books`);   //api to get the book details
        console.log(response)
        return response?.data;
    }
    catch(error){
        console.log(error);
        throw error;
    }
}


export const deleteBooks=async(id)=>{                     //api function to delete the books
    try{
        const deleteResponse=await axios.delete(`${api}/books/${id}`);
        console.log(deleteResponse);
    }
    catch(error){
        console.log(error)
        throw error;
    }
}


export const addBookApi=async(newBook)=>{           //api to add the books
    try{
        const response=await axios.post(`${api}/books`,newBook);
        console.log(response)
        return response.data;
       

    }catch(error){
        throw error;
    }
}

export const updateBookApi=async(id,updatedData)=>{           //api to update the books
    try{
        const response=await axios.put(`${api}/books/${id}`,updatedData)
        console.log(response)
        return response;
       

    }catch(error){
        console.log(error)
    }
}