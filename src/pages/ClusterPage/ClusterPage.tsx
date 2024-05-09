import { Paper } from '@mui/material';
import Customers from '../../components/Customers/Customers';


export const ClusterPage = () => {
	return (
		<Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
			<Customers />
		</Paper>
	);
};
