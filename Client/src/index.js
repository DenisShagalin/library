import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/es/integration/react';
import App from './components/App';
import Storage from './store';

const { persistor, store } = Storage();

ReactDOM.render(
    <Provider store={store}>
        <PersistGate
            persistor={persistor}
        >
            <App />
        </PersistGate>
    </Provider>,
    document.getElementById('root'),
);
