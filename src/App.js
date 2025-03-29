import './App.css';
import { Card, ListGroup, Col, Row, Container } from "react-bootstrap";
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function App() {
  
  const [books, setBooks] = useState([])
  
  useEffect(() => {
    fetch(process.env.REACT_APP_API_URL)
    // fetch("https://book-api-java-production.up.railway.app")
    .then((response) => {
      if (!response.ok) {
        throw new Error(`Error en la API: ${response.statusText}`);
      }
      return response.json();
    })
      .then((data) => {
        // console.log("Datos recibidos:", data);
        setBooks(data);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div className='container mx-auto row p-4'>
    {/* <Container> */}
    <h1>Books</h1>
    {books.map(book => (
      <div key={book.id} className='col-sm-2 col-md-6 col-lg-3'>
        <Card style={{ width: '18rem', maxHeight: '50rem'}} className='shadow p-3 mb-5 bg-body-tertiary'>
          <Card.Img variant="top" src={book.image} alt={book.title} width="150" />
          <Card.Body>
            <Card.Title className='truncate-title'>{book.title}</Card.Title>
            <Card.Text className='text-break text-wrap truncate-description'>{book.description}</Card.Text>
          </Card.Body>
          <ListGroup className="list-group-flush">
            <ListGroup.Item>{book.author}</ListGroup.Item>
          </ListGroup>
          <Card.Body>
            <Card.Link href={book.link}>Buy Link</Card.Link>
            <Card.Img variant="top" src={`${process.env.PUBLIC_URL}/images/portadas/${book.image}`} alt={book.title} width="150" />
          </Card.Body>
          </Card>
        </div>
      ))}
    </div>
  );
}

export default App;
