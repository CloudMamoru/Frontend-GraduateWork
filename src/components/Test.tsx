import { useDispatch } from 'react-redux';
import { AppDispatch } from '../store/store';
import { getCustomers } from '../store/customer.slice';
import { Button } from '@mui/material';
import axios from 'axios';

export const Test = () => {
	const dispatch = useDispatch<AppDispatch>();
  
	const test = async () => {
		dispatch(getCustomers());
	};

	return (
		<div>
			<Button variant="outlined" onClick={test} >Получить данные</Button>
		</div>
	);
};
