import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Title from '../Title/Title';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../store/store';
import React, { useEffect, useState } from 'react';
import { TablePagination } from '@mui/material';
import { getCustomers } from '../../store/customer.slice';
import { useNavigate } from 'react-router-dom';

export default function Customers() {
	const navigate = useNavigate();
	const dispatch = useDispatch<AppDispatch>();
	// ! Принимаем из пропсов
	const customers = useSelector((s: RootState) => s.customer.customers);
	const countOfRecords = customers.length;
	const [page, setPage] = useState(0);
	const [rowsPerPage, setRowsPerPage] = useState(15);


	// ! УДАЛИТЬ
	useEffect(() => {
		dispatch(getCustomers());
	}, []);


	const handleChangePage = (
		event: React.MouseEvent<HTMLButtonElement> | null,
		newPage: number
	) => {
		setPage(newPage);
	};

	const handleChangeRowsPerPage = (
		event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		setRowsPerPage(parseInt(event.target.value, 10));
		setPage(0);
	};

	const [windowSize, setWindowSize] = useState({
		width: window.innerWidth,
		height: window.innerHeight
	});
	
	useEffect(() => {
		const handleResize = () => {
			setWindowSize({
				width: window.innerWidth,
				height: window.innerHeight
			});
		};

		window.addEventListener('resize', handleResize);

		return () => {
			window.removeEventListener('resize', handleResize);
		};
	}, []);

	return (
		<React.Fragment>
			<Title>Клиенты</Title>
			<Table size="small">
				<TableHead>
					<TableRow>
						<TableCell style={{textAlign: 'center'}}>ID</TableCell>
						{windowSize.width > 330 && <TableCell style={{ textAlign: 'center' }}>Возраст</TableCell>}
						{windowSize.width > 455 && <TableCell style={{ textAlign: 'center' }}>Образование</TableCell>}
						{windowSize.width > 550 && <TableCell style={{ textAlign: 'center' }}>Годовой доход</TableCell>}
						{windowSize.width > 670 && <TableCell style={{ textAlign: 'center' }}>Семейное положение</TableCell>}
						{windowSize.width > 780 && <TableCell style={{ textAlign: 'center' }}>Количество детей</TableCell>}
						{windowSize.width > 865 && 	<TableCell style={{textAlign: 'center'}}>Размер семьи</TableCell>}
						<TableCell style={{textAlign: 'center'}}>Кластер</TableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{customers.slice(page * rowsPerPage, (page + 1) * rowsPerPage).map((row) => (
						<TableRow hover onClick={() => { navigate(`/analytics/customer/${row.id}`); }} style={{textDecoration: 'none', cursor: 'pointer'}} key={row.id}>
							<TableCell style={{textAlign: 'center'}}>{row.id}</TableCell>
							{windowSize.width > 330 && <TableCell style={{ textAlign: 'center' }}>{row.Age}</TableCell>}
							{windowSize.width > 455 && <TableCell style={{ textAlign: 'center' }}>{row.Education}</TableCell>}
							{windowSize.width > 550 && <TableCell style={{ textAlign: 'center' }}>{row.Income} $</TableCell>}
							{windowSize.width > 670 && <TableCell style={{ textAlign: 'center' }}>{row.Living_With}</TableCell>}
							{windowSize.width > 780 && <TableCell style={{ textAlign: 'center' }}>{row.Children}</TableCell>}
							{windowSize.width > 865 && <TableCell style={{ textAlign: 'center' }}>{row.Family_Size}</TableCell>}
							<TableCell style={{ textAlign: 'center' }}>{row.Clusters}</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
			{countOfRecords > 5 && <TablePagination
				component="div"
				count={countOfRecords}
				page={page}
				onPageChange={handleChangePage}
				rowsPerPage={rowsPerPage}
				onRowsPerPageChange={handleChangeRowsPerPage}
				labelRowsPerPage={windowSize.width > 550 ? 'Записей на странице' : ''}
				rowsPerPageOptions={[5, 10, 15, 30, 60, 120]}
				labelDisplayedRows={ function defaultLabelDisplayedRows({ from, to, count }) {
					return `${from}–${to} из ${count !== -1 ? count : `more than ${to}`}`;
				}}
			/>}
		</React.Fragment>
	);
}