import axios from 'axios';
import React, {useState, useEffect} from 'react';
import { useHistory, useParams } from 'react-router-dom';

function UpdateProduct() {
  let history = useHistory();
    const { id } = useParams();

    const [image, setImage] = useState(null)
    const [name, setName] = useState(null)
    const [category, setCategory] = useState(null)
    const [price, setPrice] = useState(null)
    const [description, setDescription] = useState(null)

    const loadProducts = async () => {
      const { data } = await axios.get(`http://127.0.0.1:8000/api/${id}/`);
      console.log(data);
  
      setImage(data.image);
      setName(data.name);
      setCategory(data.category);
      setPrice(data.price);
      setDescription(data.description);
     }

      useEffect(() => {
        loadProducts();
      }, [])

      const updateSingleProduct = async () => {
        let formField = new FormData()

        formField.append('name',name)
        formField.append('category',category)
        formField.append('price',price)
        formField.append('description',description)

        if(image !== null) {
          formField.append('image', image)
        }

        await axios({
            method: 'PUT',
            url: `http://127.0.0.1:8000/api/${id}/`,
            data: formField
        }).then(response => {
            console.log(response.data);
            history.push("/");
        })

    }



  return (
    <>
    <div>UpdateProduct</div>
    <div> <div className="container">
    <div className="w-75 mx-auto shadow p-5">
      <h2 className="text-center mb-4">Update A Product</h2>
      
  
      <div className="form-group">
        <img src={image} height="100" width="200" alt="" srcSet="" />
      <label>Upload Image</label>
           <input type="file" className="form-control" onChange={(e)=>setImage(e.target.files[0])}/>
        </div>
  
        <div className="form-group">
          <input
            type="text"
            className="form-control form-control-lg"
            placeholder="Enter Your Name"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
       
        <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter  category"
              name="category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            />
          </div>
          <div className="form-group">
            <input
              type="number"
              className="form-control form-control-lg"
              placeholder="Enter price"
              name="price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter description "
              name="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
        <button onClick={updateSingleProduct} className="btn btn-primary btn-block">Update Product</button>
     
    </div>
  </div></div>
  </>
  )
}

export default UpdateProduct