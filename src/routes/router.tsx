import { createBrowserRouter } from 'react-router-dom';
import CustomerLayout from '../layouts/CustomerLayout/CustomerLayout';
import { ErrorPage } from '../pages/ErrorPage/ErrorPage';
import { CustomersPage } from '../pages/CustomersPage/CustomersPage';
import { ClusterPage } from '../pages/ClusterPage/ClusterPage';
import { TypicalPage } from '../pages/TypicalPage/TypicalPage';
import { AddCustomerPage } from '../pages/AddCustomerPage/AddCustomerPage';
import { InfoPage } from '../pages/InfoPage/InfoPage';
import { Test } from '../components/Test';
import { CustomerPage } from '../pages/CustomerPage/CustomerPage';


export const router = createBrowserRouter([
	{
		path: '/analytics',
		element: <CustomerLayout />,
		children: [
			{
				path: 'customers',
				element: <CustomersPage />
			},
			{
				path: 'cluster',
				element: <ClusterPage />
			},
			{
				path: 'typical',
				element: <TypicalPage />
			},
			{
				path: 'addCustomer',
				element: <AddCustomerPage />
			},
			{
				path: 'info',
				element: <InfoPage />
			},
			{
				path: 'test',
				element: <Test />
			},
			{
				path: 'customer/:id',
				element: <CustomerPage />
			}
		]
	}, 
	{
		path: '*',
		element: <ErrorPage />
	}
]);