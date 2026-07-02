import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './routes/AppRoutes';

export default function App() {

	return (
		<>
			<BrowserRouter>
				<div>
					<AppRoutes/>
				</div>
			</BrowserRouter>
		</>
	);
}