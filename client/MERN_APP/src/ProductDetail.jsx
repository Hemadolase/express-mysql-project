import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

export default function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState([]);
const fetchProduct = async () => {
      try {
        const result = await axios.get(`https://fakestoreapi.com/products/${id}`);
        setProduct(result.data);
      } catch (error) {
        console.log("Error fetching product:", error);
      }
    };

  useEffect(() => {
    fetchProduct();
  }, []);

  const handleAddToCart = async () => {
    try {
      await axios.post("http://localhost:3000/api/addProduct", product);
      alert("Product added to cart!");
    } catch (error) {
      console.log("Error adding to cart:", error);
      alert("Failed to add to cart.");
    }
  };

  if (!product) return <p className="text-center mt-5">Loading...</p>;

  return (
    <div className="container mt-4">
      <div className="card shadow">
        <div className="row g-0">
          <div className="col-md-4 p-3">
            <img
              src={product.image}
              className="img-fluid rounded"
              alt={product.title}
              style={{ maxHeight: "300px", objectFit: "contain" }}
            />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h4 className="card-title">{product.title}</h4>
              <p className="card-text text-muted">{product.description}</p>
              <h5 className="text-success">${product.price}</h5>
              <button className="btn btn-success mt-3" onClick={handleAddToCart}>
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
