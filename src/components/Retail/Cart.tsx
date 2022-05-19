import { useRetail } from './RetailContext';

interface ICartItem {
  id: number;
  quantity: number;
  title: string;
  price: number;
}

const Cart = () => {
  const {
    state: { cartItems },
  } = useRetail();
  const getSubTotal = () =>
    cartItems
      .reduce(
        (total: number, currItem: ICartItem) =>
          total + currItem.price * currItem.quantity,
        0
      )
      .toFixed(2);

  return (
    <div className="col-4" style={{ marginBottom: '2rem' }}>
      <h4>
        <span className="text-black">
          <i className="material-icons">shopping_cart</i>
          <b> {cartItems.length} Items</b>
        </span>
      </h4>
      {cartItems.map((item) => {
        return (
          <p key={item.id} style={{ fontSize: '0.7rem' }}>
            <span className="text-black font-weight-bold">
              Qty:{item.quantity}{' '}
            </span>
            <span
              style={{ fontSize: '0.7rem' }}
              className="text-primary font-weight-bold"
            >
              ${item.price}
            </span>{' '}
            {item.title}
          </p>
        );
      })}

      <hr />
      <p>
        Subtotal{' '}
        <span className="text-black">
          <b>${getSubTotal()}</b>
        </span>
      </p>
    </div>
  );
};

export default Cart;
