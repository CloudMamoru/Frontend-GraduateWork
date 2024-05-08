import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { CustomerInterface } from '../interfaces/customer.interface';
import axios from 'axios';
import { newCustomerInterface } from '../interfaces/newCustomer.interface';

// Interfaces:
export interface CustomerState {
  customers: CustomerInterface;
	typicalCustomers: CustomerInterface;
  errorMessage?: string;
}

const initialState: CustomerState = {
	customers: {},
	typicalCustomers: {}
};

export const getCustomers = createAsyncThunk('customers/allCustomers',
	async () => {
		const { data } = await axios.get<CustomerInterface>('http://127.0.0.1:8000/customers');
		return data;
	}
);

export const getTypicalCustomers = createAsyncThunk('customers/typicalCustomers',
	async () => {
		const { data } = await axios.get<CustomerInterface>('http://127.0.0.1:8000/typical');
		return data;
	}
);

export const addNewCustomer = createAsyncThunk('customers/addNewCustomer',
	async (params: newCustomerInterface) => {
		const { data } = await axios.post('http://127.0.0.1:8000/add_customer', {
			...params
		});
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
			state.customers = action.payload;
		});
		builder.addCase(getCustomers.rejected, (state, action) => {
			state.errorMessage = action.error.message;
		});
		builder.addCase(getTypicalCustomers.fulfilled, (state, action) => {
			state.typicalCustomers = action.payload;
		});
		builder.addCase(getTypicalCustomers.rejected, (state, action) => {
			state.errorMessage = action.error.message;
		});
		builder.addCase(addNewCustomer.fulfilled, (state, action) => {
			console.log(action.payload);
		});
	}
  
});

export const customerActions = customerSlice.actions;



