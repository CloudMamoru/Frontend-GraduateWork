import { Grid, Paper } from '@mui/material';
import Chart from '../../components/Chart/Chart';
import Deposits from '../../components/Deposits/Deposits';
import Orders from '../../components/Orders/Orders';


export const ClusterPage = () => {
	return (
		<div>
			<Grid container spacing={3}>
				{/* Chart */}
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
				{/* Recent Deposits */}
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
				{/* Recent Orders */}
				<Grid item xs={12}>
					<Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
						<Orders />
					</Paper>
				</Grid>
			</Grid>
		</div>
	);
};
