import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from "react-hook-form";

const AddBooks = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const [imageURL, setIMageURL] = useState();
    const onSubmit = data => {
        const bookData = {
          name: data.name,
          imageURL: imageURL
        }
  
        const url =`http://localhost:5055/addBook`;
        fetch(url, {
            method: 'POST',
            headers: {
              'content-type' : 'application/json'
            },
            body: JSON.stringify(bookData)
          })
          .then(res =>console.log('server side response'));
          console.log(bookData);
    }

    const handleImageUpload = book =>{
        const imageData = new FormData();
        imageData.set('key', 'fef588b4ac902105dd548a74355aaf03');
        imageData.append('image', book.target.files[0]);
        axios.post('https://api.imgbb.com/1/upload', imageData)
        .then(function (response) {
          setIMageURL(response.data.data.display_url);
        })
        .catch(function (error) {
          console.log(error);
        });
    }
    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>

            <input name="name" defaultValue="Book Name" {...register("name")} />
                <br/>

                <input type='file' onChange={handleImageUpload} />
                <br/>
                <input type="submit" />
            </form>
        </div>
    );
};

export default AddBooks;