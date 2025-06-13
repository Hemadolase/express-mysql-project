import { useEffect, useState } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";

export default function Products() {
  const [products, setProducts] = useState([]);

  const fetchData = async () => {
    try {
      const result = await axios.get("https://fakestoreapi.com/products");
      setProducts(result.data);
    } catch (err) {
      console.log("Failed to fetch products", err);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Our Products</h2>
      <div className="row">
        {products.map((product) => (
          <div key={product.id} className="col-sm-6 col-md-4 col-lg-3 mb-4">
            <div className="card h-100 shadow-sm">
              <img
                src={product.image}
                className="card-img-top p-3"
                alt={product.title}
                style={{ height: "200px"}}
              />
              <div className="card-body d-flex flex-column justify-content-between">
                <h6 className="card-title">{product.title}...</h6>
                <p className="text-success fw-bold">${product.price}</p>
                <NavLink to={`/products/${product.id}`} className="btn btn-outline-primary mt-auto">
                  View Details
                </NavLink>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
