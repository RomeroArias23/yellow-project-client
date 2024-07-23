import React from 'react';
import { createRoot } from 'react-dom/client'; // Import createRoot directly
import App from './App';
import { disableReactDevTools } from '@fvilers/disable-react-devtools';

// Ensure the root element is present
const rootElement = document.getElementById('root');
if (rootElement) {
  const root = createRoot(rootElement); // Create a root.
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
} else {
  console.error('Failed to find the root element');
}
