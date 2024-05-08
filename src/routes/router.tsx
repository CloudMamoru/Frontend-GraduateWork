import { createBrowserRouter } from 'react-router-dom';
import CustomerLayout from '../layouts/CustomerLayout/CustomerLayout';
import { ErrorPage } from '../pages/ErrorPage/ErrorPage';
import { NewCustomerForm } from '../components/NewCustomerForm/NewCustomerForm';
import { CustomersPage } from '../pages/CustomersPage/CustomersPage';


export const router = createBrowserRouter([
	{
		path: '/analytics',
		element: <CustomerLayout />,
		children: [
			{
				path: 'addCustomer',
				element: <NewCustomerForm />
			},
			{
				path: 'customers',
				element: <CustomersPage />
			}
		]
	}, 
	{
		path: '*',
		element: <ErrorPage />
	}
]);