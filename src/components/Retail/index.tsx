import React from 'react';

const Retail = () => {
  return (
    <div className="container-fluid">
      <div className="row mt-3">
        <ProductDetail />
        <Cart />
      </div>
      <ProductList />
    </div>
  );
};

export default Retail;
