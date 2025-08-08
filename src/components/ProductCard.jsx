// components/ProductCard.jsx
import { Link } from "react-router-dom";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { addCart } from "../redux/action";

const ProductCard = ({ product, category }) => {
  console.log(category);
  const dispatch = useDispatch();
  const [selectedVariant, setSelectedVariant] = useState("Default");

  // stock and variant
  const inStock = Math.random() > 0.3;
  const variants = ["Default", "Small", "Medium", "Large"];

  const addProduct = () => {
    toast.success("Added to cart");
    dispatch(addCart(product));
  };

  return (
    <div
      id={product.id}
      className="col-md-4 col-sm-6 col-xs-8 col-12 mb-4"
      key={product.id}
    >
      <div
        className="card text-center h-100 border-0 shadow-sm transition-transform"
        style={{
          borderRadius: "12px",
          overflow: "hidden",
          transition: "transform 0.3s ease",
        }}
        onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.03)")}
        onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
      >
        {/* Product Image */}
        <div style={{ position: "relative" }}>
          <img
            className="card-img-top p-3"
            src={product.image}
            alt={product.title}
            height={300}
            style={{
              objectFit: "contain",
              backgroundColor: "#f9f9f9",
              borderRadius: "12px 12px 0 0",
            }}
          />
          {!inStock && (
            <div
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                background: "rgba(0,0,0,0.5)",
                color: "#fff",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "1.2rem",
                fontWeight: "bold",
              }}
            >
              Out of Stock
            </div>
          )}
        </div>

        {/* Product Info */}
        <div className="card-body">
          <div className="d-flex justify-content-between align-items-center mb-2">
            <h5 className="card-title mb-0">
              {product.title.substring(0, 12)}...
            </h5>
            <span className="fw-bold text-primary">
              ${product.price.toFixed(2)}
            </span>
          </div>
          <p className="card-text text-muted">
            {product.description.substring(0, 80)}...
          </p>

          {/* Variant Dropdown */}
          {(category === "men's clothing" ||
            category === "women's clothing") && (
            <select
              className="form-select form-select-sm my-3"
              value={selectedVariant}
              onChange={(e) => setSelectedVariant(e.target.value)}
              disabled={!inStock}
            >
              {variants.map((v, idx) => (
                <option key={idx} value={v}>
                  {v}
                </option>
              ))}
            </select>
          )}

          {/* Buttons */}
          <div>
            <Link
              to={`/product/${product.id}`}
              className={`btn btn-outline-primary m-1 ${
                !inStock && "disabled"
              }`}
            >
              View Details
            </Link>
            <button
              className={`btn m-1 ${
                inStock ? "btn-primary" : "btn-secondary disabled"
              }`}
              onClick={addProduct}
              disabled={!inStock}
            >
              {inStock ? "Add to Cart" : "Out of Stock"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
