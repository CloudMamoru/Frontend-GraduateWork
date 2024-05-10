import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export const StartPage = () => {
	const navigate = useNavigate();
  
	useEffect(() => {
		navigate('/analytics/info');
	},[navigate]);

	return (
		<div>StartPage</div>
	);
};
