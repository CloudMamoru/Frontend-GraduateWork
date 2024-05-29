import { Grid, Paper } from '@mui/material';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import Customers from '../../components/Customers/Customers';
import CustomerPieChart from '../../components/CustomerPieChart/CustomerPieChart';
import { CustomerInterface } from '../../interfaces/customer.interface';
import ClusterScatterChart from '../../components/CustomerScatterChart/CustomerScatterChart';


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

	const typical = [...typicalCustomers].sort((a, b) => a.Clusters - b.Clusters);

	const filteredData = customers.map(function(customer) {
		return {
			id: customer.id,
			Income: customer.Income,
			Spent: customer.Spent,
			Clusters: customer.Clusters
		};
	});

	return (
		<div>
			<Grid container spacing={1.5}>
				<Grid item xs={14} md={4} lg={4.4}>
					<div style={{display: 'flex', flexDirection: 'column', gap: '15px'}}>
						<div>
							<Paper
								sx={{
									p: 2,
									display: 'flex',
									flexDirection: 'column',
									height: 280
								}}
							>
								<CustomerPieChart data={dataForPieChart} />
							</Paper>
						</div>
						<div>
							<Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
								<Customers customers={typical} title='Типичные представители' version='small' />
							</Paper>
						</div>
					</div>
				</Grid>
				<Grid item xs={14} md={8} lg={7.6}>
					<Paper
						sx={{
							p: 1,
							height: 502
						}}
					>
						<ClusterScatterChart data={filteredData}/>
					</Paper>
				</Grid>
				<Grid item xs={12}>
					<Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
						<Customers customers={customers} rows={5} />
					</Paper>
				</Grid>
			</Grid>
		</div>
	);
};
