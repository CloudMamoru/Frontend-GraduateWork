import { Grid, Paper } from '@mui/material';
import Chart from '../../components/Chart/Chart';
import Deposits from '../../components/Deposits/Deposits';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import Customers from '../../components/Customers/Customers';
import CustomerPieChart from '../../components/CustomerPieChart/CustomerPieChart';
import { CustomerInterface } from '../../interfaces/customer.interface';


export interface ClusterData {
  id: number;
  value: number;
  label: string;
}

function generateClusterData(customers: CustomerInterface[]): ClusterData[] {
	const clustersMap: { [key: number]: number } = {};

	// Подсчитываем количество записей для каждого кластера
	customers.forEach(customer => {
		const clusterId = customer.Clusters;
		if (clustersMap[clusterId] === undefined) {
			clustersMap[clusterId] = 1;
		} else {
			clustersMap[clusterId]++;
		}
	});

	// Преобразуем данные в формат, который ожидается
	const clusterData: ClusterData[] = [];
	Object.keys(clustersMap).forEach(clusterId => {
		const id = parseInt(clusterId);
		clusterData.push({
			id,
			value: clustersMap[id],
			label: `Кластер ${id}`
		});
	});

	return clusterData;
}






export const ClusterPage = () => {
	const { customers, typicalCustomers } = useSelector((s: RootState) => s.customer);
	const dataForPieChart = generateClusterData(customers);

	return (
		<div>
			<Grid container spacing={3}>
				{/* Recent Deposits */}
				<Grid item xs={12} md={4} lg={5}>
					<Paper
						sx={{
							p: 2,
							display: 'flex',
							flexDirection: 'column',
							height: 280
						}}
					>
						<CustomerPieChart data={dataForPieChart}/>
					</Paper>
				</Grid>
				{/* Chart */}
				<Grid item xs={12} md={8} lg={7}>
					<Paper
						sx={{
							p: 2,
							display: 'flex',
							flexDirection: 'column',
							height: 280
						}}
					>
						<Chart />
					</Paper>
				</Grid>
				{/* Recent Orders */}
				<Grid item xs={12}>
					<Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
						<Customers customers={customers} rows={5} />
					</Paper>
				</Grid>
			</Grid>
		</div>
	);
};
