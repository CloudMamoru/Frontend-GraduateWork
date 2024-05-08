import { Provider } from 'react-redux';
// import Dashboard from './components/Dashbord/Dashbord';
import { store } from './store/store';
// import { Test } from './components/Test';
import { NewCustomerForm } from './components/NewCustomerForm/NewCustomerForm';

function App() {
	return (
		<Provider store={store}>
			{/* <Dashboard /> */}
			{/* <Test /> */}
			<NewCustomerForm />
		</Provider>
	);
}

export default App;
