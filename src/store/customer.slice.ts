import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { BackendCustomerInterface } from '../interfaces/backendCustomer.interface';
import axios from 'axios';
import { newCustomerInterface } from '../interfaces/newCustomer.interface';
import { CustomerInterface } from '../interfaces/customer.interface';

// Interfaces:
export interface CustomerState {
  customers: CustomerInterface[];
	typicalCustomers: CustomerInterface[];
	errorMessage?: string;
}

const initialState: CustomerState = {
	customers: [],
	typicalCustomers: []
};

export const getCustomers = createAsyncThunk('customers/allCustomers',
	async () => {
		const { data } = await axios.get<BackendCustomerInterface>('http://127.0.0.1:8000/customers');
		console.log('Добавлен');
		return data;
	}
);

export const getTypicalCustomers = createAsyncThunk('customers/typicalCustomers',
	async () => {
		const { data } = await axios.get<BackendCustomerInterface>('http://127.0.0.1:8000/typical');
		return data;
	}
);

export const recalculation = createAsyncThunk('customers/recalculation',
	async () => {
		const { data } = await axios.get('http://127.0.0.1:8000/recalculation');
		return data;
	}
);

export const addNewCustomer = createAsyncThunk('customers/addNewCustomer',
	async (params: newCustomerInterface, thunkApi) => {
		console.log(params);
		const { data } = await axios.post('http://127.0.0.1:8000/add_customer', {
			...params
		});
		thunkApi.dispatch(recalculation());
		setTimeout(() => {
			thunkApi.dispatch(getCustomers());
		}, 1000);
		return data;
	}
);


export const customerSlice = createSlice({
	name: 'customer',
	initialState,
	reducers: {
	},
	extraReducers: (builder) => {
		builder.addCase(getCustomers.fulfilled, (state, action) => {
			const data = Object.entries(action.payload).map(([key, value]) => {
				return {
					id: Number(key),
					...value
				};
			});
			state.customers = data;
		});
		builder.addCase(getCustomers.rejected, (state, action) => {
			state.errorMessage = action.error.message;
		});
		builder.addCase(getTypicalCustomers.fulfilled, (state, action) => {
			const data = Object.entries(action.payload).map(([key, value]) => {
				return {
					id: Number(key),
					...value
				};
			});
			state.typicalCustomers = data;
		});
		builder.addCase(getTypicalCustomers.rejected, (state, action) => {
			state.errorMessage = action.error.message;
		});
		builder.addCase(addNewCustomer.fulfilled, (state, action) => {
			// alert('Новый клиент добавлен успешно!');
			console.log(action.payload);
		});
		builder.addCase(recalculation.fulfilled, (state, action) => {
			console.log(action.payload);
		});
	}
});

export const customerActions = customerSlice.actions;
