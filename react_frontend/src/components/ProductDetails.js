import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate  } from 'react-router-dom';
import { Link } from 'react-router-dom';

function ProductDetails() {
    const { id } = useParams();
    const navigate = useNavigate ();
    const [product, setProduct] = useState({});

    useEffect(() => {
        getSingleProduct();
    }, []);

    const getSingleProduct = async () => {
        const { data } = await axios.get(`http://127.0.0.1:8000/api/${id}/`);
        console.log(data);
        setProduct(data);
    };

    const deleteProduct = async (id) => {
        await axios.delete(`http://127.0.0.1:8000/api/${id}/`);
        navigate("/");
    };

    return (
        <div>
            <h1>
                <p>{product.name}</p>
            </h1>
            <hr />
            <div className="full-student-detail">
                <img src={product.image} height="300" width="500" alt="" />
                <div className="student-detail">
                    <p>{product.category}</p>
                    <p>{product.description}</p>
                    <p>{product.created_at}</p>
                </div>
            </div>
            <Link className="btn btn-outline-primary mr-2" to={`/${product.id}/update`}>
                Update
            </Link>
            <Link className="btn btn-danger" onClick={() => deleteProduct(product.id)}>
                Delete
            </Link>
        </div>
    );
}

export default ProductDetails;