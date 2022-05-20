import { useAppSelector } from 'src/hooks/redux';
import Product from './Product';
// import { useRetail } from './RetailContext';
import { selectProducts } from './retailSlice';

const ProductList = () => {
  // const {
  //   state: { products },
  // } = useRetail();
  const products = useAppSelector(selectProducts);

  return (
    <div className="row">
      {products.map((product) => (
        <Product key={product.id} {...product} />
      ))}
    </div>
  );
};

export default ProductList;
