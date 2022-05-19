// import Vote from 'src/components/Vote';
// import DrinkSearch from 'src/components/DrinkSearch';

import Retail from './components/Retail';
import { RetailProvider } from './components/Retail/RetailContext';
import './styles.css';

const retailProducts = {
  products: [],
};

export default function App() {
  return (
    <RetailProvider products={retailProducts}>
      {/* <Vote totalGlobalLikes={10} /> */}
      {/* <DrinkSearch /> */}
      <Retail />
    </RetailProvider>
  );
}
