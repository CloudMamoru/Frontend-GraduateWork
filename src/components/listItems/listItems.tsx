import * as React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import PeopleIcon from '@mui/icons-material/People';
import InfoIcon from '@mui/icons-material/Info';
import HubIcon from '@mui/icons-material/Hub';
import ReduceCapacityIcon from '@mui/icons-material/ReduceCapacity';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import { Link } from 'react-router-dom';

export const mainListItems = (
	<React.Fragment>
		<Link style={{textDecoration: 'none', color: 'inherit'}} to={'/analytics/customer'}>
			<ListItemButton>
				<ListItemIcon>
					<PeopleIcon />
				</ListItemIcon>
				<ListItemText primary="Клиенты компании" />
			</ListItemButton>
		</Link>
		<Link style={{textDecoration: 'none', color: 'inherit'}} to={'/analytics/cluster'}>
			<ListItemButton>
				<ListItemIcon>
					<HubIcon />
				</ListItemIcon>
				<ListItemText primary="Клиентские кластеры" />
			</ListItemButton>
		</Link>
		<Link style={{textDecoration: 'none', color: 'inherit'}} to={'/analytics/typical'}>
			<ListItemButton>
				<ListItemIcon>
					<ReduceCapacityIcon />
				</ListItemIcon>
				<ListItemText primary="Типичные представители" />
			</ListItemButton>
		</Link>
		<Link style={{textDecoration: 'none', color: 'inherit'}} to={'/analytics/addCustomer'}>
			<ListItemButton>
				<ListItemIcon>
					<PersonAddIcon />
				</ListItemIcon>
				<ListItemText primary="Добавление клиента" />
			</ListItemButton>
		</Link>
		<Link style={{textDecoration: 'none', color: 'inherit'}} to={'/analytics/info'}>
			<ListItemButton>
				<ListItemIcon>
					<InfoIcon />
				</ListItemIcon>
				<ListItemText primary="Информация о проекте" />
			</ListItemButton>
		</Link>
	</React.Fragment>
);