import { useDispatch } from 'react-redux';
import { AppDispatch } from '../store/store';
import { addNewCustomer, getCustomers, getTypicalCustomers } from '../store/customer.slice';
import { Button } from '@mui/material';
import { NEW_CUSTOMER } from '../helpers/newCustomer';

export const Test = () => {
	const dispatch = useDispatch<AppDispatch>();
  
	const test1 = async () => {
		dispatch(getCustomers());
	};
  
	const test2 = async () => {
		dispatch(getTypicalCustomers());
	};

	const test3 = async () => {
		dispatch(addNewCustomer(NEW_CUSTOMER));
	};

	return (
		<div>
			<Button variant="outlined" onClick={test1} >Пересчитать данные</Button>
			<Button variant="outlined" onClick={test2} >Получить данные типичных представителей</Button>
			<Button variant="outlined" onClick={test3} >Добавить нового пользователя</Button>
		</div>
	);
};
