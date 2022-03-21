import axios from 'axios';
import React, {useState, useEffect} from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function ShowProduct() {
  const [products, setProducts] = useState([])

    const fetchProducts = async () => {
        const result = await axios.get('http://localhost:8000/api/');

        console.log(result.data)
        setProducts(result.data)
    }

    useEffect(() => {
      fetchProducts();
    }, [])

    // const goToDetail = () => {
    //     alert("detail page")
    // }
  return (
    <div>

    <div className="main-students-show">
    {
        products.map((product, index) => (
            <Card className="m-3 rounded shadow-lg main-students-show" style={{ width: '22em' }}>

            <Card.Img variant="top" src={product.image} />

            <Card.Body>

                <Card.Title>{product.name}</Card.Title>
                <Card.Text> {product.category} </Card.Text>
                <Card.Text> {product.price} </Card.Text>
            
                
                <Link className="btn btn-primary mr-2" to={`/${product.id}`}>Full Detail</Link>

            </Card.Body>
            </Card>
        ))

    }
    </div>
   
    
</div>
           

  )
}

export default ShowProduct