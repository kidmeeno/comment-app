import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import store, { persistor } from './store/index.js';
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
  {/* Wrap the app in PersistGate to delay rendering until rehydration is complete */}
  <PersistGate loading={null} persistor={persistor}>
    <App />
  </PersistGate>
</Provider>,
)