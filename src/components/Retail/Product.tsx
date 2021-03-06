// import { TProduct, useRetail } from './RetailContext';

import { useAppDispatch } from 'src/hooks/redux';
import { TProduct, showDetails } from './retailSlice';

const Product = ({ title, price, image, id }: TProduct) => {
  // const { getDetails } = useRetail();
  const dispatch = useAppDispatch();

  return (
    <div className="col-4 mb-2">
      <div onClick={() => dispatch(showDetails(id))} className="card shadow">
        <img
          className="m-auto"
          style={{ width: '12rem', height: '12rem' }}
          src={image}
          alt={title}
        />
        <div className="card-body">
          <h5
            style={{ fontSize: '0.9rem' }}
            data-testid="product-title"
            className="card-title"
          >
            {title}
          </h5>
          <p style={{ fontSize: '0.9rem' }} className="card-text">
            ${price}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Product;
