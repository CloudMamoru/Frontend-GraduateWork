import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { CustomerInterface } from '../interfaces/customer.interface';
import axios from 'axios';

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
	}
  
});

export const customerActions = customerSlice.actions;



