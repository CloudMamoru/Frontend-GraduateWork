import { useDispatch } from 'react-redux';
import { AppDispatch } from '../store/store';
import { getCustomers, getTypicalCustomers } from '../store/customer.slice';
import { Button } from '@mui/material';

export const Test = () => {
	const dispatch = useDispatch<AppDispatch>();
  
	const test1 = async () => {
		dispatch(getCustomers());
	};
  
	const test2 = async () => {
		dispatch(getTypicalCustomers());
	};

	return (
		<div>
			<Button variant="outlined" onClick={test1} >Получить данные клиентов</Button>
			<Button variant="outlined" onClick={test2} >Получить данные типичных представителей</Button>
		</div>
	);
};
