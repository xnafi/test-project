import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addCart } from "../redux/action";
import ProductFilters from "./ProductFilters";
import LoadingSkeleton from "./LoadingSkeleton";
import ProductCard from "./ProductCard";


const Products = () => {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState([]);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  const addProduct = (product) => {
    dispatch(addCart(product));
  };

  const filterProduct = (category) => {
    const updatedList = data.filter((item) => item.category === category);
    setFilter(updatedList);
  };

  const resetFilter = () => {
    setFilter(data);
  };

  useEffect(() => {
    let componentMounted = true;

    const getProducts = async () => {
      setLoading(true);
      const response = await fetch("https://fakestoreapi.com/products/");
      if (componentMounted) {
        const products = await response.json();
        setData(products);
        setFilter(products);
        setLoading(false);
      }
    };

    getProducts();
    return () => {
      componentMounted = false;
    };
  }, []);

  return (
    <div className="container my-3 py-3">
      <div className="row">
        <div className="col-12">
          <h2 className="display-5 text-center">Latest Products</h2>
          <hr />
        </div>
      </div>

      <ProductFilters onFilter={filterProduct} onReset={resetFilter} />

      <div className="row justify-content-center">
        {loading ? (
          <LoadingSkeleton />
        ) : (
          filter.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onAdd={addProduct}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default Products;
