import { ErrorBoundary } from 'react-error-boundary';
import LanguageCheckBox from './components/LanguageCheckbox';
import MoreInfoPopover from './components/MoreInfoPopover';
// import LanguageCheckBox from './components/LanguageCheckbox';
// import LanguageDropdown from './components/LanguageDropdown';

import './styles.css';

export default function App() {
  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      {/* <LanguageDropdown /> */}
      {/* <LanguageCheckBox /> */}
      <MoreInfoPopover />
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
