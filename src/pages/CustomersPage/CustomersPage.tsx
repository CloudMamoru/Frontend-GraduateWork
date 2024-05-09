import { Grid, Paper } from '@mui/material';
import Chart from '../../components/Chart/Chart';
import Deposits from '../../components/Deposits/Deposits';
import Orders from '../../components/Orders/Orders';

export const CustomersPage = () => {
	return (
		<Grid container spacing={3}>
			<Grid item xs={12} md={8} lg={9}>
				<Paper
					sx={{
						p: 2,
						display: 'flex',
						flexDirection: 'column',
						height: 240
					}}
				>
					<Chart />
				</Paper>
			</Grid>
			<Grid item xs={12} md={4} lg={3}>
				<Paper
					sx={{
						p: 2,
						display: 'flex',
						flexDirection: 'column',
						height: 240
					}}
				>
					<Deposits />
				</Paper>
			</Grid>
			<Grid item xs={12}>
				<Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
					<Orders />
				</Paper>
			</Grid>
		</Grid>
	);
};
