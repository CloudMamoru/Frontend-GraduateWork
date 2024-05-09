import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import Customers from '../../components/Customers/Customers';


export const TypicalPage = () => {
	const typicalCustomers = useSelector((s: RootState) => s.customer.typicalCustomers);

	return (
		<Customers customers={typicalCustomers} title='Типичные представители' />
	);
};
