
const ProductFilters = ({ onFilter, reset }) => {
  return (
    <div className="buttons text-center py-5">
      <button className="btn btn-outline-dark btn-sm m-2" onClick={reset}>
        All
      </button>
      <button
        className="btn btn-outline-dark btn-sm m-2"
        onClick={() => onFilter("men's clothing")}
      >
        Men's Clothing
      </button>
      <button
        className="btn btn-outline-dark btn-sm m-2"
        onClick={() => onFilter("women's clothing")}
      >
        Women's Clothing
      </button>
      <button
        className="btn btn-outline-dark btn-sm m-2"
        onClick={() => onFilter("jewelery")}
      >
        Jewelery
      </button>
      <button
        className="btn btn-outline-dark btn-sm m-2"
        onClick={() => onFilter("electronics")}
      >
        Electronics
      </button>
    </div>
  );
};

export default ProductFilters;
