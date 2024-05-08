import { Accordion, AccordionActions, AccordionDetails, AccordionSummary, Button, Paper, TextField, Typography } from '@mui/material';
import { FormEvent } from 'react';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export const NewCustomerForm = () => {

	const submit = (e: FormEvent) => {
		e.preventDefault();
		alert('hi');
	};

	return (
		<div>
			<Paper style={{ maxWidth: '75vw', padding: '45px' }} >
				<Typography variant="h4" style={{textAlign: 'center'}} >Добавление нового покупателя</Typography>
				<br/>
				<form style={{ display: 'flex', flexDirection: 'column' }} onSubmit={submit}>
					<Accordion>
						<AccordionSummary
							expandIcon={<ExpandMoreIcon />}
							aria-controls="panel1-content"
							id="panel1-header"
						>
							<Typography>Оснавная информация *</Typography>
						</AccordionSummary>
						<AccordionDetails>
							<Typography>Основыные поля дла заполнения</Typography>
						</AccordionDetails>
						<AccordionActions style={{ display: 'flex', flexDirection: 'column', alignItems: 'stretch', justifyContent: 'center' }}>
							<br />
							<TextField
								label="Год рождения"
								variant="outlined"
								type='number'
								name='Year_Birth'
							/>
							<br />
							<TextField
								label="Уровень образования"
								variant="outlined"
								type='string'
								name='Education'
							/>
							<br />
							<TextField
								label="Семейное положение"
								variant="outlined"
								type='string'
								name='Marital_Status'
							/>
							<br />
							<TextField
								label="Годовой доход"
								variant="outlined"
								type='number'
								name='Income'
							/>
							<br />
							<TextField
								label="Количество детей в семье"
								variant="outlined"
								type='number'
								name='Kidhome'
							/>
							<br />
							<TextField
								label="Количество подростков в семье"
								variant="outlined"
								type='number'
								name='Teenhome'
							/>
							<br />
							<TextField
								label="Дней с последней покупки"
								variant="outlined"
								type='number'
								name='Recency'
							/>
							<br />
							<TextField
								label="Дата регистрации"
								variant="outlined"
								type='date'
								InputLabelProps={{
									shrink: true
								}}
								name='Dt_Customer'
							/>
							<br />
						</AccordionActions>
					</Accordion>
          

					<Accordion>
						<AccordionSummary
							expandIcon={<ExpandMoreIcon />}
							aria-controls="panel1-content"
							id="panel1-header"
						>
							<Typography>Способ совершения покупки</Typography>
						</AccordionSummary>
						<AccordionDetails>
							<Typography>Способ совершения покупки</Typography>
						</AccordionDetails>
						<AccordionActions style={{ display: 'flex', flexDirection: 'column', alignItems: 'stretch', justifyContent: 'center' }}>
							<br />
							<TextField
								label="Кол-во покупок через сайт"
								variant="outlined"
								type='number'
								name='NumWebPurchases'
							/>
							<br />
							<TextField
								label="Кол-во покупок с использованием каталога"
								variant="outlined"
								type='number'
								name='NumCatalogPurchases'
							/>
							<br />
							<TextField
								label="Кол-во покупок непосредственно в магазине"
								variant="outlined"
								type='number'
								name='NumStorePurchases'
							/>
							<br />
							<TextField
								label="Кол-во посещений сайта за последний месяц"
								variant="outlined"
								type='number'
								name='NumWebVisitsMonth'
							/>
							<br />
						</AccordionActions>
					</Accordion>
          

					<Accordion>
						<AccordionSummary
							expandIcon={<ExpandMoreIcon />}
							aria-controls="panel1-content"
							id="panel1-header"
						>
							<Typography>Предпочтения в товарах за последние два года</Typography>
						</AccordionSummary>
						<AccordionDetails>
							<Typography>Предпочтения в товарах за последние два года</Typography>
						</AccordionDetails>
						<AccordionActions style={{ display: 'flex', flexDirection: 'column', alignItems: 'stretch', justifyContent: 'center' }}>
							<br />
							<TextField
								label="Сумма, потраченная на вино"
								variant="outlined"
								type='number'
								name='MntWines'
							/>
							<br />
							<TextField
								label="Сумма, потраченная на фрукты"
								variant="outlined"
								type='number'
								name='MntFruits'
							/>
							<br />
							<TextField
								label="Сумма, потраченная на мясо"
								variant="outlined"
								type='number'
								name='MntMeatProducts'
							/>
							<br />
							<TextField
								label="Сумма, потраченная на рыбу"
								variant="outlined"
								type='number'
								name='MntFishProducts'
							/>
							<br />
							<TextField
								label="Сумма, потраченная на сладости"
								variant="outlined"
								type='number'
								name='MntSweetProducts'
							/>
							<br />
							<TextField
								label="Сумма, потраченная на золото"
								variant="outlined"
								type='number'
								name='MntGoldProducts'
							/>
							<br />
						</AccordionActions>
					</Accordion>

					<Accordion>
						<AccordionSummary
							expandIcon={<ExpandMoreIcon />}
							aria-controls="panel1-content"
							id="panel1-header"
						>
							<Typography>Реакция на специальные предложения</Typography>
						</AccordionSummary>
						<AccordionDetails>
							<Typography>Реакция на специальные предложения</Typography>
						</AccordionDetails>
						<AccordionActions style={{ display: 'flex', flexDirection: 'column', alignItems: 'stretch', justifyContent: 'center' }}>
							<br />
							<TextField
								label="Количество покупок со скидкой"
								variant="outlined"
								type='number'
								name='NumDealsPurchases'
							/>
							<br />
							<TextField
								label="Принял предложение в 1-ой кампании"
								variant="outlined"
								type='number'
								name='AcceptedCmp1'
							/>
							<br />
							<TextField
								label="Принял предложение в 2-ой кампании"
								variant="outlined"
								type='number'
								name='AcceptedCmp2'
							/>
							<br />
							<TextField
								label="Принял предложение в 3-ой кампании"
								variant="outlined"
								type='number'
								name='AcceptedCmp3'
							/>
							<br />
							<TextField
								label="Принял предложение в 4-ой кампании"
								variant="outlined"
								type='number'
								name='AcceptedCmp4'
							/>
							<br />
							<TextField
								label="Принял предложение в 5-ой кампании"
								variant="outlined"
								type='number'
								name='AcceptedCmp5'
							/>
							<br />
							<TextField
								label="Принял предложение в последней кампании"
								variant="outlined"
								type='number'
								name='Response'
							/>
							<br />
						</AccordionActions>
					</Accordion>
					<br />

					<Button type='submit' variant="contained">Отправить</Button>
				</form>
			</Paper>
		</div>
	);
};
