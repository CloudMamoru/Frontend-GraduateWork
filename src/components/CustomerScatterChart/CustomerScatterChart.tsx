import { ScatterChart } from '@mui/x-charts/ScatterChart';

interface CustomersSpentIncome {
    id: number,
    Spent: number,
    Income: number,
    Clusters: number
  }

interface ClusterScatterChartProps {
  data: CustomersSpentIncome[]
}

function splitByClusters(data: CustomersSpentIncome[]) {
	const clusters = [[], [], []]; // массив, в котором будут храниться подмассивы для каждого кластера

	data.forEach(function(customer) {
		if (customer.Clusters >= 0 && customer.Clusters < 3) {
			clusters[customer.Clusters].push(customer); // добавляем текущего клиента в подмассив, соответствующий его кластеру
		}
	});

	return clusters;
}
  
export default function ClusterScatterChart({data}: ClusterScatterChartProps) {
	const [data0, data1, data2] = splitByClusters(data);
	// console.log(splitByClusters(data));
	// data0.forEach(el => console.log(el.Clusters));
	return (
		<div style={{display: 'flex', alignItems: 'center'}}>
			<div style={{fontSize: '14px', color: 'rgba(0, 0, 0, 0.87)', transform: 'rotate(-90deg)'}}>Income</div>
			<ScatterChart
				width={650}
				height={475}
				voronoiMaxRadius={1}
				xAxis={[{ label: 'Spent' }]}
				series={[
					{
						label: 'Кластер 0',
						data: data0?.map((v) => ({ x: v.Spent, y: v.Income, id: v.id }))
					},
					{
						label: 'Кластер 1',
						data: data1?.map((v) => ({ x: v.Spent, y: v.Income, id: v.id }))
					},
					{
						label: 'Кластер 2',
						data: data2?.map((v) => ({ x: v.Spent, y: v.Income, id: v.id }))
					}
				]}
			/>
		</div>
	);
}