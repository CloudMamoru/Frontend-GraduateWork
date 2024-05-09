import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import Customers from '../../components/Customers/Customers';

export const CustomersPage = () => {
	const customers = useSelector((s: RootState) => s.customer.customers);
	return (
		<Customers customers={customers} />
	);
};
