import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { RootState } from '../../store/store';
import { Container, Grid, Paper, Typography } from '@mui/material';

export const CustomerPage = () => {
	const data = useSelector((s: RootState) => s.customer.customers);
	const {id} = useParams();
	const customer = data.filter(c => c.id === Number(id))[0];
  
	console.log(customer.id);

	return (
		<Container>
			<Typography variant="h4" gutterBottom style={{color: '#1976d2'}}>
        Подробная информация о пользователе
			</Typography>
			<br/>
			<Grid container spacing={3}>
				{/* Блок 1: Основная информация о клиенте и Реакция на специальные предложения */}
				<Grid item xs={12} md={6}>
					<Paper elevation={3} sx={{ padding: 2, marginBottom: 2 }}>
						<Typography variant="h5" gutterBottom>
              Основная информация о клиенте
						</Typography>
						<Typography>ID: {customer.id}</Typography>
						<Typography>Возраст: {customer.Age}</Typography>
						<Typography>Образование: {customer.Education}</Typography>
						<Typography>Семейное положение: {customer.Living_With}</Typography>
						<Typography>Годовой доход: {customer.Income} $</Typography>
						<Typography>Дети в семье: {customer.Kidhome}</Typography>
						<Typography>Подростки в семье: {customer.Teenhome}</Typography>
						<Typography>Количество дней с последней покупки: {customer.Recency}</Typography>
						<Typography>Жалобы: {customer.Complain}</Typography>
					</Paper>
					<Paper elevation={3} sx={{ padding: 2, marginBottom: 2 }}>
						<Typography variant="h5" gutterBottom>
              Реакция на специальные предложения
						</Typography>
						<Typography>Количество сделок: {customer.NumDealsPurchases}</Typography>
					</Paper>
				</Grid>
				{/* Блок 2: Предпочтение в продуктах и Способ совершения покупки */}
				<Grid item xs={12} md={6}>
					<Paper elevation={3} sx={{ padding: 2, marginBottom: 2 }}>
						<Typography variant="h5" gutterBottom>
              Предпочтение в продуктах
						</Typography>
						<Typography>Потрачено на вино: {customer.Wines} $</Typography>
						<Typography>Потрачено на фрукты: {customer.Fruits} $</Typography>
						<Typography>Потрачено на мясо: {customer.Meat} $</Typography>
						<Typography>Потрачено на рыбу: {customer.Fish} $</Typography>
						<Typography>Потрачено на сладости: {customer.Sweets} $</Typography>
						<Typography>Потрачено на золото: {customer.Gold} $</Typography>
					</Paper>
					<Paper elevation={3} sx={{ padding: 2, marginBottom: 2 }}>
						<Typography variant="h5" gutterBottom>
              Способ совершения покупки
						</Typography>
						<Typography>Покупки через веб: {customer.NumWebPurchases}</Typography>
						<Typography>Покупки через каталог: {customer.NumCatalogPurchases}</Typography>
						<Typography>Покупки в магазинах: {customer.NumStorePurchases}</Typography>
						<Typography>Посещений веб-сайта в месяц: {customer.NumWebVisitsMonth}</Typography>
					</Paper>
				</Grid>
			</Grid>
		</Container>
	);
};
