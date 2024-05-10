import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import Customers from '../../components/Customers/Customers';


export const TypicalPage = () => {
	const typicalCustomers = useSelector((s: RootState) => s.customer.typicalCustomers);
	const sortedCustomers = [...typicalCustomers].sort((a, b) => a.Clusters - b.Clusters);

	return (
		<Customers customers={sortedCustomers} title='Типичные представители' />
	);
};
