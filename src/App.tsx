import { Provider } from 'react-redux';
// import Dashboard from './components/Dashbord/Dashbord';
import { store } from './store/store';
import { Test } from './components/Test';

function App() {
	return (
		<Provider store={store}>
			{/* <Dashboard /> */}
			<Test />
		</Provider>
	);
}

export default App;
