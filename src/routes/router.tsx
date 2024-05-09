import { createBrowserRouter } from 'react-router-dom';
import CustomerLayout from '../layouts/CustomerLayout/CustomerLayout';
import { ErrorPage } from '../pages/ErrorPage/ErrorPage';
import { CustomerPage } from '../pages/CustomerPage/CustomerPage';
import { ClusterPage } from '../pages/ClusterPage/ClusterPage';
import { TypicalPage } from '../pages/TypicalPage/TypicalPage';
import { AddCustomerPage } from '../pages/AddCustomerPage/AddCustomerPage';
import { InfoPage } from '../pages/InfoPage/InfoPage';


export const router = createBrowserRouter([
	{
		path: '/analytics',
		element: <CustomerLayout />,
		children: [
			{
				path: 'customer',
				element: <CustomerPage />
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
			}
		]
	}, 
	{
		path: '*',
		element: <ErrorPage />
	}
]);