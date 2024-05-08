import { configureStore } from '@reduxjs/toolkit';
import { customerSlice } from './customer.slice';


export const store = configureStore({
	reducer: {
		customer: customerSlice.reducer
	}
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;