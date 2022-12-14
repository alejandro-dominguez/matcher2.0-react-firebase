import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './App.css';
import { AuthProvider } from './hooks/useAuth';

const root = ReactDOM.createRoot(
	  document.getElementById('root')
);

root.render(
    <AuthProvider>
        <div className='overflow-hidden'>
            <App/>
        </div>
    </AuthProvider>
);
