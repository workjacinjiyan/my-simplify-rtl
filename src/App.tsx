/* eslint-disable no-lone-blocks */
// import Vote from 'src/components/Vote';
// import DrinkSearch from 'src/components/DrinkSearch';

import { ErrorBoundary } from 'react-error-boundary';
import Retail from './components/Retail';
// import { RetailProvider } from './components/Retail/RetailContext';

import './styles.css';
// import fakeProducts from './data/Retail/fakeProducts';

export default function App() {
  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <Retail />
    </ErrorBoundary>
  );
}

{
  /* <RetailProvider products={fakeProducts}>
      <Vote totalGlobalLikes={10} />
      <DrinkSearch />
      <Retail />
    </RetailProvider> */
}

function ErrorFallback({ error }: { error: Error }) {
  return (
    <div role="alert">
      <p>Something went wrong:</p>
      <pre>{error.message}</pre>
      <button>Try again</button>
    </div>
  );
}
