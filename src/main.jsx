import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { ErrorBoundary } from 'react-error-boundary';
import ErrorFallback from './ui/ErrorFallback.jsx';
import DarkModeProvider from './context/DarkModeContext.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<ErrorBoundary FallbackComponent={ErrorFallback} onReset={() => window.location.replace('/')}>
			<DarkModeProvider>
				<App />
			</DarkModeProvider>
		</ErrorBoundary>
	</React.StrictMode>,
);
