import * as React from 'react';
import { useAppDispatch, useAppSelector } from 'src/hooks/redux';
// import { TProduct, useRetail } from './RetailContext';
import {
  addToCart,
  addToFavorites,
  selectFavorites,
  selectShowProductDetails,
  TProduct,
} from './retailSlice';

const ProductDetail = () => {
  // const {
  //   state: { showProductDetails },
  // } = useRetail();
  const showProductDetails = useAppSelector(selectShowProductDetails);

  function isProduct(obj: {} | TProduct): obj is TProduct {
    return Object.keys(obj as TProduct).length !== 0;
  }

  return isProduct(showProductDetails) ? (
    <Details {...showProductDetails} />
  ) : (
    <PlaceholderDetails />
  );
};

const Details = (props: TProduct) => {
  const [quantity, updateQuantity] = React.useState(1);
  // const {
  //   addToCart,
  //   addToFavorites,
  //   state: { favorites },
  // } = useRetail();
  const favorites = useAppSelector(selectFavorites);
  const dispatch = useAppDispatch();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    updateQuantity(+event.target.value);

  const handleAddToCart = () => {
    if (quantity >= 1 && quantity <= 10) {
      dispatch(
        addToCart({
          quantity: quantity,
          id: props.id,
          title: props.title,
          price: props.price,
        })
      );
      updateQuantity(1);
    } else {
      updateQuantity(1);
    }
  };
  const handleFavorites = () => {
    dispatch(addToFavorites(props.id));
  };

  React.useEffect(() => {
    updateQuantity(1);
  }, [props]);

  return (
    <div className="jumbotron col-8 text-center p-4">
      <div className="d-flex">
        <img
          className="card-img-top"
          style={{ width: '12rem' }}
          src={props.image}
          alt={props.title}
        />
        <div>
          <h1 style={{ fontSize: '1.5rem' }}>{props.title}</h1>
          <p style={{ fontSize: '0.9rem' }}>{props.description}</p>
          <h3 className="card-text text-success">${props.price}</h3>
        </div>
      </div>
      <hr />

      <div className="d-flex justify-content-between">
        {favorites.find((favorite) => favorite === props.id) ? (
          <button type="button" className="btn btn-warning">
            ADDED TO FAVORITES
          </button>
        ) : (
          <button
            onClick={handleFavorites}
            type="button"
            className="btn btn-primary"
          >
            ADD TO FAVORITES
          </button>
        )}
        <div>
          <span className="lead">Qty:</span>
          <input
            value={quantity}
            onChange={handleChange}
            type="number"
            name="quantity"
            min="1"
            max="10"
          ></input>

          <button
            onClick={handleAddToCart}
            type="button"
            className="btn btn-success"
          >
            ADD TO CART
          </button>
        </div>
      </div>
    </div>
  );
};

const PlaceholderDetails = () => {
  return (
    <div className="jumbotron col-8 text-center">
      <h1>Retail Store</h1>
    </div>
  );
};

export default ProductDetail;
