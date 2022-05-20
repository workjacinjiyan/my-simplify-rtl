import { ErrorBoundary } from 'react-error-boundary';
import Checkout from './components/Checkout';

import './styles.css';

export default function App() {
  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <Checkout />
    </ErrorBoundary>
  );
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
