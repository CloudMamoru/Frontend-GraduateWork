import { Accordion, AccordionActions, AccordionDetails, AccordionSummary, Alert, AlertTitle, Box, Button, Paper, TextField, Typography } from '@mui/material';
import { FormEvent, useState } from 'react';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Title from '../Title/Title';
import { CustomerForm, CustomerFormKeys } from '../../interfaces/customerForm.type';
import { NEW_CUSTOMER } from '../../helpers/newCustomer';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../store/store';
import { addNewCustomer } from '../../store/customer.slice';

interface objInterface {
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	[id: string]: any
}

function formatDate(inputDate: string) {
	const parts = inputDate.split('-');
	const formattedDate = parts[2] + '-' + parts[1] + '-' + parts[0];
	return formattedDate;
}

export const NewCustomerForm = () => {
	const dispatch = useDispatch<AppDispatch>();
	const [successAdd, setSuccessAdd] = useState<boolean>(false);


	const submit = (e: FormEvent) => {
		e.preventDefault();
		const target = e.target as typeof e.target & CustomerForm;
		console.log(target.Education.value);

		const obj:objInterface = {};
		CustomerFormKeys.forEach(el => {
			if (target[el].value) {
				if (['Education', 'Marital_Status', 'Dt_Customer'].includes(el)) {
					if (el === 'Dt_Customer') {
						obj[el] = formatDate(target[el].value);
					} else {
						obj[el] = target[el].value;
					}
				} else {
					obj[el] = Number(target[el].value);
				}
			}
		});

		const newCustomer = { ...NEW_CUSTOMER, ...obj };
		dispatch(addNewCustomer(newCustomer));
		setSuccessAdd(true);
		setTimeout(() => {
			setSuccessAdd(false);
		}, 5000 );
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
							<Title>Основная информация *</Title>
						</AccordionSummary>
						<AccordionDetails>
							<Typography style={{textAlign: 'justify'}}>
								<b>Описание - </b>Эта группа переменных предоставляет ключевую информацию о клиентах, включая их основные характеристики,
								такие как возраст, уровень образования, семейное положение и доход. Эти данные позволяют лучше понять
								демографический профиль клиентов и их социально-экономический статус, что важно для адаптации маркетинговых
								стратегий и предложений под их потребности и предпочтения.
								<br/><br/>
								<b>* - </b>Все поля в данном разделе являются обязательными.
							</Typography>
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
								label="Жаловался ли клиент?"
								variant="outlined"
								type='number'
								name='Complain'
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
							<Title>Способ совершения покупки</Title>
						</AccordionSummary>
						<AccordionDetails>
							<Typography style={{textAlign: 'justify'}}>
								<b>Описание - </b>В этой группе представлена информация о предпочтительных каналах совершения покупок клиентами: онлайн,
								через каталог или в магазинах. Кроме того, оценивается активность клиентов на веб-сайте компании. Эти данные
								позволяют лучше понять предпочтения клиентов в сфере розничной торговли и оптимизировать каналы продаж и
								обслуживания в соответствии с ними.
							</Typography>
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
							<Title>Предпочтения в товарах за последние два года</Title>
						</AccordionSummary>
						<AccordionDetails>
							<Typography style={{textAlign: 'justify'}}>
								<b>Описание - </b>Здесь представлена информация о том, какие продукты предпочитают клиенты и сколько они готовы потратить
								на каждую категорию. Эти данные могут помочь определить наиболее востребованные товары среди клиентов,
								выявить тенденции в их покупательском поведении и адаптировать ассортимент и маркетинговые кампании в
								соответствии с этими предпочтениями.
							</Typography>
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
								name='MntGoldProds'
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
							<Title>Реакция на специальные предложения</Title>
						</AccordionSummary>
						<AccordionDetails>
							<Typography style={{textAlign: 'justify'}}>
								<b>Описание - </b>Эта группа переменных описывает, как клиенты реагируют на специальные предложения и маркетинговые акции компании.
								Здесь учитывается не только факт участия в предложениях, но и степень реакции на них. Эти данные помогают оценить
								эффективность маркетинговых кампаний и понять, какие предложения наиболее привлекательны для клиентов.
							</Typography>
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
					{successAdd &&
						<Box>
							<Alert severity="info">
								<AlertTitle>Информация</AlertTitle>
								Новый клиент успешно добавлен!
							</Alert>
							<br />
						</Box>
					}
					<Button type='submit' variant="contained">Отправить</Button>
				</form>
			</Paper>
		</div>
	);
};
