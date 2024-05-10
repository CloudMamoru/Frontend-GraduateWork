import * as React from 'react';
import { PieChart } from '@mui/x-charts/PieChart';
import { Box } from '@mui/material';
import Title from '../Title/Title';
import { ClusterData } from '../../pages/ClusterPage/ClusterPage';

interface PieActiveArcProps {
  data: ClusterData[]
}

export default function CustomerPieChart({data}: PieActiveArcProps) {
	return (
		<Box>
			<Title>Распределение кластеров</Title>
			<PieChart
				series={[
					{
						data,
						highlightScope: { faded: 'global', highlighted: 'item' },
						faded: { innerRadius: 30, additionalRadius: -30, color: 'gray' }
					}
				]}
				height={200}
			/>
		</Box>
	);
}