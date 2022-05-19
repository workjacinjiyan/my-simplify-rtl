// import Vote from 'src/components/Vote';
// import DrinkSearch from 'src/components/DrinkSearch';

import Retail from './components/Retail';
import { RetailProvider } from './components/Retail/RetailContext';
import './styles.css';
import fakeProducts from './__mocks__/fakeProducts';

export default function App() {
  return (
    <RetailProvider products={fakeProducts}>
      {/* <Vote totalGlobalLikes={10} /> */}
      {/* <DrinkSearch /> */}
      <Retail />
    </RetailProvider>
  );
}
