import './App.css';
import { AiTwotoneBook } from "react-icons/ai";
import { FaEuroSign } from "react-icons/fa";
import { Card } from "react-bootstrap";
import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'


function BookDetail() {
    const [book, setBook] = useState(null)
    const {id}= useParams()

      useEffect(() => {
        fetch(`${process.env.REACT_APP_API_URL}/${id}`)
        // fetch(`https://book-api-java-production.up.railway.app/${id}`)
        .then((response) => {
          if (!response.ok) {
            throw new Error(`Error en la API: ${response.statusText}`);
          }
          return response.json();
        })
          .then((data) => {
            setBook(data);
          })
          .catch((error) => console.error("Error fetching data:", error));
      }, []);

    return (
        <div className='container m-auto w-80 justify-center p-4'>
        <h1 className='d-flex justify-content-center text-decoration-underline fw-bold'>Book Detail</h1>
        {book != null ? (
        <div key={book.id} className='row d-flex justify-content-center'>
            <h2 className='d-flex justify-content-center p-4 fw-light fst-italic'>{book.title}</h2>
            <div className='col-lg-6 col-xl-3'>
                <img src={book.image} alt={book.title} width="300" />
                <h3 className='fw-light'>{book.author}</h3>
            </div>
            <div className='col-lg-6 col-xl-6'>
                <p className='fs-4'>{book.description}</p>
            </div>
            <div className='d-flex justify-content-center'>
                <p className='fs-5'><FaEuroSign />{book.price}</p>
                <p className='fs-5 px-4'><AiTwotoneBook /> {book.pages} pages</p>
            </div>
            <div className='d-flex w-auto justify-content-center'>
                <Card.Link href={book.link} className='p-3 btn btn-primary'>Buy Link</Card.Link>
                <Link to="/"><button className='mx-4 p-3 btn btn-outline-primary'>Back to Home</button></Link>
            </div>
        </div>
            ) : (
            <div className="text-center mt-5">
                <h2>Book not found</h2>
                <Link to="/">
                <button className='mx-4 p-3 btn btn-outline-primary'>Back to Home</button>
                </Link>
            </div>
            )}
        </div>
    )
}

export default BookDetail;