import styles from './ErrorPage.module.css';

export const ErrorPage = () => {
	return (
		<div className={styles.centered}>
			<img src="/404.jpg" alt="404" style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh'}}/>
		</div>
	);
};
