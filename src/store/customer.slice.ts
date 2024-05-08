import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { CustomerInterface } from '../interfaces/customer.interface';
import axios from 'axios';

// Interfaces:
export interface CustomerState {
  customers?: CustomerInterface[],
  typical?: CustomerInterface[],
}

const initialState = {
	customers: [],
	typical: []
};

export const getCustomers = createAsyncThunk('customers/allCustomers',
	async () => {
		const { data } = await axios.get<CustomerInterface>('http://127.0.0.1:8000/customers');
		console.log(data);
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
			console.log(action.payload);
			console.log(Object.keys(action.payload));
		});
	}
});

export const customerActions = customerSlice.actions;



